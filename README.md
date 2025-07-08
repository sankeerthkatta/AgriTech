# AgriTech Contract Farming Platform

This project is a full-stack web application for contract farming, connecting buyers and farmers. It includes features like crop listing, contract management, wishlist, crop recommendations, and disease prediction.

## Project Structure

```
front-end/   # React + Vite client
back-end/    # Node.js + Express server
uploads/     # Uploaded images
```

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm

### Setup

#### 1. Clone the repository

```sh
git clone <your-repo-url>
cd AgriTech
```

#### 2. Install dependencies

For the front-end:
```sh
cd front-end
npm install
```

For the back-end:
```sh
cd ../back-end
npm install
```

#### 3. Environment Variables

- Set up your MongoDB URI and any other secrets in `back-end/.env` (create if not present):

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

#### 4. Run the Application

Start the back-end server:
```sh
cd back-end
npm start
```

Start the front-end dev server:
```sh
cd ../front-end
npm run dev
```

- The front-end will be available at [http://localhost:5173](http://localhost:5173)
- The back-end API will run at [http://localhost:3000](http://localhost:3000)

## Features

- User authentication (Buyer/Seller)
- Crop listing and management
- Contract creation and tracking
- Wishlist functionality
- Crop and fertilizer recommendations
- Crop disease prediction

## Tech Stack

- **Front-end:** React, Vite, CSS
- **Back-end:** Node.js, Express, MongoDB, Mongoose

## Scripts

**Front-end:**
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Lint code

**Back-end:**
- `npm start` - Start server

## License

This project is licensed under the MIT License.

---

*Feel free to contribute or
