import express from "express";
import multer from "multer";
import { spawn } from "child_process";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

// ES Modules don't have __dirname by default, so define it manually
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

// Multer setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`),
});
const upload = multer({ storage });

router.post("/", upload.single("image"), (req, res) => {
  const imagePath = path.join(__dirname, "..", req.file.path);

  const python = spawn("python3", ["predict_disease.py", imagePath]);

  let result = "";
  python.stdout.on("data", (data) => {
    result += data.toString();
  });

  python.stderr.on("data", (data) => {
    console.error("Python error:", data.toString());
  });

  python.on("close", (code) => {
    // Optional: delete image
    try {
      fs.unlinkSync(imagePath);
    } catch (err) {
      console.error("Error deleting file:", err);
    }

    res.json({ prediction: result.trim() });
  });
});

export default router;
