# import sys
# import tensorflow as tf
# from tensorflow import keras

# import numpy as np
# from tensorflow.keras.preprocessing import image
# import os

# # Load model once
# MODEL_PATH = r"C:\Users\ragad\Downloads\plant_disease_modeltlfinal (1).keras"
# model = tf.keras.models.load_model(MODEL_PATH)

# # Define your class names (update with your actual labels in order)
# class_names = ['Apple___Apple_scab', 'Apple___Black_rot', 'Apple___Cedar_apple_rust', 'Apple___healthy', 'Blueberry___healthy', 'Cherry_(including_sour)___Powdery_mildew', 'Cherry_(including_sour)___healthy', 'Corn_(maize)___Cercospora_leaf_spot Gray_leaf_spot', 'Corn_(maize)___Common_rust_', 'Corn_(maize)___Northern_Leaf_Blight', 'Corn_(maize)___healthy', 'Grape___Black_rot', 'Grape___Esca_(Black_Measles)', 'Grape___Leaf_blight_(Isariopsis_Leaf_Spot)', 'Grape___healthy', 'Orange___Haunglongbing_(Citrus_greening)', 'Peach___Bacterial_spot', 'Peach___healthy', 'Pepper,_bell___Bacterial_spot', 'Pepper,_bell___healthy', 'Potato___Early_blight', 'Potato___Late_blight', 'Potato___healthy', 'Raspberry___healthy', 'Soybean___healthy', 'Squash___Powdery_mildew', 'Strawberry___Leaf_scorch', 'Strawberry___healthy', 'Tomato___Bacterial_spot', 'Tomato___Early_blight', 'Tomato___Late_blight', 'Tomato___Leaf_Mold', 'Tomato___Septoria_leaf_spot', 'Tomato___Spider_mites Two-spotted_spider_mite', 'Tomato___Target_Spot', 'Tomato___Tomato_Yellow_Leaf_Curl_Virus', 'Tomato___Tomato_mosaic_virus', 'Tomato___healthy']


# def predict_image(img_path):
#     try:
#         img = image.load_img(img_path, target_size=(224, 224))
#         img_array = image.img_to_array(img)
#         img_array = tf.expand_dims(img_array, 0)  # Make batch of 1

#         predictions = model.predict(img_array)
#         predicted_class = class_names[np.argmax(predictions[0])]
#         confidence = np.max(predictions[0]) * 100

#         print(f"{predicted_class} ({confidence:.2f}%)")

#     except Exception as e:
#         print(f"Error: {str(e)}")

# if __name__ == "__main__":
#     # if len(sys.argv) < 2:
#     #     print("No image path provided")
#     #     sys.exit(1)

#     # img_path = sys.argv[1]
#     img_path = r"C:\Users\ragad\Downloads\testfin_dataset\Tomato___Leaf_Mold\1f64f046-46e6-47b3-91ef-31c2433face3___Crnl_L.Mold 9089.JPG"


#     if not os.path.exists(img_path):
#         print("Image path does not exist")
#         sys.exit(1)

#     predict_image(img_path)



# import sys
# import tensorflow as tf
# from tensorflow import keras
# import numpy as np
# from tensorflow.keras.preprocessing import image
# import os

# # Load model once
# MODEL_PATH = r"C:\Users\ragad\Downloads\plant_disease_modeltlfinal (1).keras"
# model = tf.keras.models.load_model(MODEL_PATH)

# # Define your class names (same as training time)
# class_names = ['Apple___Apple_scab', 'Apple___Black_rot', 'Apple___Cedar_apple_rust', 'Apple___healthy',
#                'Blueberry___healthy', 'Cherry_(including_sour)___Powdery_mildew', 'Cherry_(including_sour)___healthy',
#                'Corn_(maize)___Cercospora_leaf_spot Gray_leaf_spot', 'Corn_(maize)___Common_rust_',
#                'Corn_(maize)___Northern_Leaf_Blight', 'Corn_(maize)___healthy', 'Grape___Black_rot',
#                'Grape___Esca_(Black_Measles)', 'Grape___Leaf_blight_(Isariopsis_Leaf_Spot)', 'Grape___healthy',
#                'Orange___Haunglongbing_(Citrus_greening)', 'Peach___Bacterial_spot', 'Peach___healthy',
#                'Pepper,_bell___Bacterial_spot', 'Pepper,_bell___healthy', 'Potato___Early_blight',
#                'Potato___Late_blight', 'Potato___healthy', 'Raspberry___healthy', 'Soybean___healthy',
#                'Squash___Powdery_mildew', 'Strawberry___Leaf_scorch', 'Strawberry___healthy',
#                'Tomato___Bacterial_spot', 'Tomato___Early_blight', 'Tomato___Late_blight', 'Tomato___Leaf_Mold',
#                'Tomato___Septoria_leaf_spot', 'Tomato___Spider_mites Two-spotted_spider_mite', 'Tomato___Target_Spot',
#                'Tomato___Tomato_Yellow_Leaf_Curl_Virus', 'Tomato___Tomato_mosaic_virus', 'Tomato___healthy']

# def predict_image(img_path):
#     try:
#         img = image.load_img(img_path, target_size=(224, 224))
#         img_array = image.img_to_array(img)

#         img_array = img_array.astype("float32")  # Cast to float just in case
#         img_array = tf.expand_dims(img_array, 0)  # Create batch of size 1

#         # Run prediction
#         predictions = model.predict(img_array)
#         predicted_class = class_names[np.argmax(predictions[0])]
#         confidence = np.max(predictions[0]) * 100

#         print(f"✅ Predicted: {predicted_class} ({confidence:.2f}%)")

#     except Exception as e:
#         print(f"❌ Error: {str(e)}")

# if __name__ == "__main__":
#     img_path = r"C:\Users\ragad\Downloads\testfin_dataset\Tomato___Leaf_Mold\1f64f046-46e6-47b3-91ef-31c2433face3___Crnl_L.Mold 9089.JPG"

#     if not os.path.exists(img_path):
#         print("❌ Image path does not exist")
#         sys.exit(1)

#     predict_image(img_path)



# import sys
# import tensorflow as tf
# import numpy as np
# from tensorflow.keras.preprocessing import image
# import os
# import subprocess
# import tempfile
# import json

# # Load model once
# MODEL_PATH = r"C:\Users\ragad\Downloads\plant_disease_modeltlfinal (1).keras"
# model = tf.keras.models.load_model(MODEL_PATH)

# # Define your class names
# class_names = ['Apple___Apple_scab', 'Apple___Black_rot', 'Apple___Cedar_apple_rust', 'Apple___healthy',
#                'Blueberry___healthy', 'Cherry_(including_sour)___Powdery_mildew', 'Cherry_(including_sour)___healthy',
#                'Corn_(maize)___Cercospora_leaf_spot Gray_leaf_spot', 'Corn_(maize)___Common_rust_',
#                'Corn_(maize)___Northern_Leaf_Blight', 'Corn_(maize)___healthy', 'Grape___Black_rot',
#                'Grape___Esca_(Black_Measles)', 'Grape___Leaf_blight_(Isariopsis_Leaf_Spot)', 'Grape___healthy',
#                'Orange___Haunglongbing_(Citrus_greening)', 'Peach___Bacterial_spot', 'Peach___healthy',
#                'Pepper,_bell___Bacterial_spot', 'Pepper,_bell___healthy', 'Potato___Early_blight',
#                'Potato___Late_blight', 'Potato___healthy', 'Raspberry___healthy', 'Soybean___healthy',
#                'Squash___Powdery_mildew', 'Strawberry___Leaf_scorch', 'Strawberry___healthy',
#                'Tomato___Bacterial_spot', 'Tomato___Early_blight', 'Tomato___Late_blight', 'Tomato___Leaf_Mold',
#                'Tomato___Septoria_leaf_spot', 'Tomato___Spider_mites Two-spotted_spider_mite', 'Tomato___Target_Spot',
#                'Tomato___Tomato_Yellow_Leaf_Curl_Virus', 'Tomato___Tomato_mosaic_virus', 'Tomato___healthy']

# def predict_image(img_path):
#     try:
#         # Open image and process it
#         img = image.load_img(img_path, target_size=(224, 224))
#         img_array = image.img_to_array(img)
#         img_array = img_array.astype("float32")  # Ensure correct type
#         img_array = tf.expand_dims(img_array, 0)  # Create batch of size 1

#         # Run prediction
#         predictions = model.predict(img_array)
#         predicted_class = class_names[np.argmax(predictions[0])]
#         confidence = np.max(predictions[0]) * 100

#         return predicted_class, confidence
#     except Exception as e:
#         print(f"❌ Error: {str(e)}")
#         return None, None


# def handle_image_upload(image_path):
#     # Process image prediction and return the result
#     predicted_class, confidence = predict_image(image_path)

#     if predicted_class:
#         return json.dumps({
#             "predicted_class": predicted_class,
#             "confidence": confidence
#         })
#     else:
#         return json.dumps({"error": "Prediction failed."})


# if __name__ == "__main__":
#     img_path = sys.argv[1]  # Receive image path from command-line input (or from frontend)

#     if not os.path.exists(img_path):
#         print("❌ Image path does not exist")
#         sys.exit(1)

#     result = handle_image_upload(img_path)
#     print(result)




# import sys
# import tensorflow as tf
# import numpy as np
# from tensorflow.keras.preprocessing import image
# import os
# import json
# # Load model once
# MODEL_PATH = r"C:\Users\ragad\Downloads\plant_disease_modeltlfinal (1).keras"
# model = tf.keras.models.load_model(MODEL_PATH)

# # Define your class names
# class_names = [
#     'Apple___Apple_scab', 'Apple___Black_rot', 'Apple___Cedar_apple_rust', 'Apple___healthy',
#     'Blueberry___healthy', 'Cherry_(including_sour)___Powdery_mildew', 'Cherry_(including_sour)___healthy',
#     'Corn_(maize)___Cercospora_leaf_spot Gray_leaf_spot', 'Corn_(maize)___Common_rust_',
#     'Corn_(maize)___Northern_Leaf_Blight', 'Corn_(maize)___healthy', 'Grape___Black_rot',
#     'Grape___Esca_(Black_Measles)', 'Grape___Leaf_blight_(Isariopsis_Leaf_Spot)', 'Grape___healthy',
#     'Orange___Haunglongbing_(Citrus_greening)', 'Peach___Bacterial_spot', 'Peach___healthy',
#     'Pepper,_bell___Bacterial_spot', 'Pepper,_bell___healthy', 'Potato___Early_blight',
#     'Potato___Late_blight', 'Potato___healthy', 'Raspberry___healthy', 'Soybean___healthy',
#     'Squash___Powdery_mildew', 'Strawberry___Leaf_scorch', 'Strawberry___healthy',
#     'Tomato___Bacterial_spot', 'Tomato___Early_blight', 'Tomato___Late_blight', 'Tomato___Leaf_Mold',
#     'Tomato___Septoria_leaf_spot', 'Tomato___Spider_mites Two-spotted_spider_mite', 'Tomato___Target_Spot',
#     'Tomato___Tomato_Yellow_Leaf_Curl_Virus', 'Tomato___Tomato_mosaic_virus', 'Tomato___healthy'
# ]

# def predict_image(img_path):
#     img = image.load_img(img_path, target_size=(224, 224))
#     img_array = image.img_to_array(img).astype("float32")
#     img_array = tf.expand_dims(img_array, 0)

#     preds = model.predict(img_array)[0]
#     idx = np.argmax(preds)
#     return class_names[idx], float(preds[idx] * 100)

# def handle_image_upload(img_path):
#     predicted_class, confidence = predict_image(img_path)

#     # **NEW: delete the file right after prediction**
#     # try:
#     #     os.remove(img_path)
#     # except OSError:
#     #     pass

#     return json.dumps({
#         "predicted_class": predicted_class,
#         "confidence": confidence
#     })

# if __name__ == "__main__":
#     img_path = sys.argv[1]
#     if not os.path.exists(img_path):
#         print(json.dumps({"error": "Image not found"}))
#         sys.exit(1)

#     print(handle_image_upload(img_path))


# from flask import Flask, request, jsonify
# from flask_cors import CORS
# import tensorflow as tf
# import numpy as np
# from PIL import Image
# import io

# app = Flask(_name_)
# CORS(app)  # Enable CORS

# MODEL_PATH = "C:/Users/ragad/Downloads/plant_disease_modeltlfinal (1).keras"
# model = tf.keras.models.load_model(MODEL_PATH)

# CLASS_NAMES = [
#     "Apple__Apple_scab", "Apple_Black_rot", "Apple_Cedar_apple_rust", "Apple__healthy",
#     "Blueberry__healthy", "Cherry(including_sour)Powdery_mildew", "Cherry(including_sour)_healthy",
#     "Corn_(maize)Cercospora_leaf_spot Gray_leaf_spot", "Corn(maize)Common_rust", "Corn_(maize)_Northern_Leaf_Blight",
#     "Corn_(maize)healthy", "Grape_Black_rot", "Grape_Esca(Black_Measles)", "Grape__Leaf_blight(Isariopsis_Leaf_Spot)",
#     "Grape__healthy", "Orange_Haunglongbing(Citrus_greening)", "Peach__Bacterial_spot", "Peach__healthy",
#     "Pepper,bell_Bacterial_spot", "Pepper,_bell_healthy", "Potato_Early_blight", "Potato__Late_blight",
#     "Potato__healthy", "Raspberry_healthy", "Soybean_healthy", "Squash_Powdery_mildew", "Strawberry__Leaf_scorch",
#     "Strawberry__healthy", "Tomato_Bacterial_spot", "Tomato_Early_blight", "Tomato__Late_blight",
#     "Tomato__Leaf_Mold", "Tomato_Septoria_leaf_spot", "Tomato__Spider_mites Two-spotted_spider_mite",
#     "Tomato__Target_Spot", "Tomato_Tomato_Yellow_Leaf_Curl_Virus", "Tomato_Tomato_mosaic_virus", "Tomato__healthy"
# ]
# def predict_disease(img):
#     img = image.load_img(img, target_size=(224, 224))
#     img_array = image.img_to_array(img)
#     img_array = tf.expand_dims(img_array, 0)
#     prediction = model.predict(img_array)
#     predicted_class = class_names[np.argmax(prediction[0])]
#     confidence = float(np.max(prediction[0]) * 100)
#     return predicted_class, confidence




from flask import Flask, request, jsonify
from flask_cors import CORS
import tensorflow as tf
import numpy as np
from tensorflow.keras.preprocessing import image
import os
import joblib
app = Flask(__name__)
CORS(app)

print("Loading model...")
MODEL_PATH = "C:/Users/ragad/Downloads/plant_disease_modeltlfinal (1).keras"
model = tf.keras.models.load_model(MODEL_PATH)
crop_model = joblib.load("C:/Users/ragad/Downloads/crop_recommendation_model.pkl")
encoder = joblib.load("C:/Users/ragad/Downloads/label_encoder.pkl")
scaler = joblib.load("C:/Users/ragad/Downloads/scaler.pkl")


fertilizer_model = joblib.load(r"c:\Users\ragad\Downloads\random_forest_model_fer.pkl")
 # RF model
# joblib.dump(fertilizer_model, "classifier.pkl")
# fertilizer_encoder = joblib.load("C:/Users/ragad/Downloads/fertilizer.pkl")  # LabelEncoder



class_names = ['Apple___Apple_scab', 'Apple___Black_rot', 'Apple___Cedar_apple_rust', 'Apple___healthy',
               'Blueberry___healthy', 'Cherry_(including_sour)___Powdery_mildew', 'Cherry_(including_sour)___healthy',
               'Corn_(maize)___Cercospora_leaf_spot Gray_leaf_spot', 'Corn_(maize)___Common_rust_',
               'Corn_(maize)___Northern_Leaf_Blight', 'Corn_(maize)___healthy', 'Grape___Black_rot',
               'Grape___Esca_(Black_Measles)', 'Grape___Leaf_blight_(Isariopsis_Leaf_Spot)', 'Grape___healthy',
               'Orange___Haunglongbing_(Citrus_greening)', 'Peach___Bacterial_spot', 'Peach___healthy',
               'Pepper,_bell___Bacterial_spot', 'Pepper,_bell___healthy', 'Potato___Early_blight',
               'Potato___Late_blight', 'Potato___healthy', 'Raspberry___healthy', 'Soybean___healthy',
               'Squash___Powdery_mildew', 'Strawberry___Leaf_scorch', 'Strawberry___healthy',
               'Tomato___Bacterial_spot', 'Tomato___Early_blight', 'Tomato___Late_blight', 'Tomato___Leaf_Mold',
               'Tomato___Septoria_leaf_spot', 'Tomato___Spider_mites Two-spotted_spider_mite', 'Tomato___Target_Spot',
               'Tomato___Tomato_Yellow_Leaf_Curl_Virus', 'Tomato___Tomato_mosaic_virus', 'Tomato___healthy']

# Soil type mapping
# soil_mapping = {
#     "Black": 0,
#     "Clayey": 1,
#     "Loamy": 2,
#     "Red": 3,
#     "Sandy": 4
# }

# # Crop type mapping
# crop_mapping = {
#     "Barley": 0,
#     "Cotton": 1,
#     "Ground Nuts": 2,
#     "Maize": 3,
#     "Millets": 4,
#     "Oil seeds": 5,
#     "Paddy": 6,
#     "Pulses": 7,
#     "Sugarcane": 8,
#     "Tobacco": 9,
#     "Wheat": 10,
#     "coffee": 11,
#     "kidneybeans": 12,
#     "orange": 13,
#     "pomegranate": 14,
#     "rice": 15,
#     "watermelon": 16
# }

# # Fertilizer type mapping
# fertilizer_mapping = {
#     "10-10-10": 0,
#     "10-26-26": 1,
#     "14-14-14": 2,
#     "14-35-14": 3,
#     "15-15-15": 4,
#     "17-17-17": 5,
#     "20-20": 6,
#     "28-28": 7,
#     "DAP": 8,
#     "Potassium chloride": 9,
#     "Potassium sulfate.": 10,
#     "Superphosphate": 11,
#     "TSP": 12,
#     "Urea": 13
# }

def predict_disease(img):
    img = image.load_img(img, target_size=(224, 224))
    img_array = image.img_to_array(img)
    img_array = tf.expand_dims(img_array, 0)
    prediction = model.predict(img_array)
    predicted_class = class_names[np.argmax(prediction[0])]
    confidence = float(np.max(prediction[0]) * 100)
    return predicted_class, confidence

# API endpoint
@app.route('/predict', methods=['POST'])
def predict():
    if 'image' not in request.files:
        return jsonify({'error': 'No image uploaded'}), 400

    img_file = request.files['image']
    if img_file.filename == '':
        return jsonify({'error': 'Empty file name'}), 400

    # Save to a temporary file
    temp_path = os.path.join("temp", img_file.filename)
    os.makedirs("temp", exist_ok=True)
    img_file.save(temp_path)

    try:
        result, confidence = predict_disease(temp_path)
        os.remove(temp_path)
        return jsonify({
            "predicted_class": result,
            "confidence": confidence
        })
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/recommend_crop', methods=['POST'])
def recommend_crop():
    try:
        data = request.json
        features = [
            data['N'],
            data['P'],
            data['K'],
            data['temperature'],
            data['humidity'],
            data['ph'],
            data['rainfall']
        ]

        features_scaled = scaler.transform([features])
        prediction = crop_model.predict(features_scaled)
        crop_name = encoder.inverse_transform(prediction)[0]

        return jsonify({'recommended_crop': crop_name})

    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/recommend_fertilizer', methods=['POST'])
def recommend_fertilizer():
    print("Received request for fertilizer recommendation")
    try:
        # Mappings
        soil_mapping = {
            "Black": 0, "Clayey": 1, "Loamy": 2, "Red": 3, "Sandy": 4
        }

        crop_mapping = {
            "Barley": 0, "Cotton": 1, "Ground Nuts": 2, "Maize": 3, "Millets": 4,
            "Oil seeds": 5, "Paddy": 6, "Pulses": 7, "Sugarcane": 8, "Tobacco": 9,
            "Wheat": 10, "coffee": 11, "kidneybeans": 12, "orange": 13,
            "pomegranate": 14, "rice": 15, "watermelon": 16
        }

        fertilizer_mapping = {
            0: "10-10-10", 1: "10-26-26", 2: "14-14-14", 3: "14-35-14",
            4: "15-15-15", 5: "17-17-17", 6: "20-20", 7: "28-28",
            8: "DAP", 9: "Potassium chloride", 10: "Potassium sulfate.",
            11: "Superphosphate", 12: "TSP", 13: "Urea"
        }

        data = request.json

        # Manual encoding
        soil = soil_mapping.get(data['soil_type'], -1)
        crop = crop_mapping.get(data['crop_type'], -1)

        if soil == -1 or crop == -1:
            return jsonify({'error': 'Invalid soil or crop type'}), 400

        features = [
            float(data['temperature']),
            float(data['humidity']),
            float(data['moisture']),
            soil,
            crop,
            float(data['nitrogen']),
            float(data['phosphorous']),
            float(data['potassium']),
        ]

        prediction = fertilizer_model.predict([features])
        predicted_index = int(prediction[0])
        fertilizer_name = fertilizer_mapping.get(predicted_index, "Unknown")

        return jsonify({'recommendation': fertilizer_name})
    
    except Exception as e:
        return jsonify({'error': str(e)}), 500


if __name__ == '__main__':
    app.run(port=5000, debug=True)


