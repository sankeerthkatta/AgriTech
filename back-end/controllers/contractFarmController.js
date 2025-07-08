import user from '../models/user.js';
import asyncHandler from '../middlewares/asyncHandler.js';
import Crop from '../models/crop.js';
const createCrop = asyncHandler(async (req, res) => {
  console.log(req.body);
  const {
    crop_name,
    category,
    variety,
    quantity,
    price,
    harvestDate,
    quality,
    organic,
    location,
    phone,
    farmerName,
  } = req.body;

  if (!crop_name || !category || !variety || !quantity || !price || !location) {
    res.status(400);
    throw new Error('Please fill all required fields');
  }

  const sellerId = req.user._id;
  const image = req.file ? `/uploads/${req.file.filename}` : '';

  const newCrop = await Crop.create({
    crop_name,
    category,
    variety,
    quantity,
    price,
    harvestDate,
    image, // <- This is the uploaded image URL
    quality,
    organic,
    location,
    phone,
    farmerName,
    sellerId,
    status: 'available',
  });

  res.status(201).json(newCrop);
});

    const updateCrop = asyncHandler(async (req, res) => {
        const crop = await Crop.findById(req.params.id);
        if(!crop) {
            res.status(404);
            throw new Error('Crop not found');
        }
        if(crop.sellerId.toString() !== req.user._id.toString()) {
            res.status(401);
            throw new Error('Not authorized to update this crop');
        }
        const updatedCrop = await Crop.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
          });
          res.status(200).json(updatedCrop);
      });

      const deleteCrop = asyncHandler(async(req,res)=>{
        const crop = await Crop.findById(req.params.id);
        if (!crop){
            res.status(404);
            throw new Error('Crop not found');
          }
        
          if (crop.sellerId.toString()!== req.user._id.toString()) {
            res.status(401);
            throw new Error('Not authorized to delete this crop');
          }
        
          await crop.deleteOne();
          
  res.status(200).json({ message: 'Crop deleted successfully' });

      });

      const getMyCrops = asyncHandler(async (req, res) => {
        const sellerId = req.user._id;
        if (!sellerId) {
          res.status(400);
          throw new Error("Invalid seller ID");
        }
        const crops = await Crop.find({ sellerId });
        res.status(200).json(crops||[]);
;
      });

      const allCrops = asyncHandler(async (req, res) => {
        const crops = await Crop.find({});
        res.status(200).json(crops||[]);
      });
      
      export {createCrop, updateCrop, deleteCrop , getMyCrops,allCrops};