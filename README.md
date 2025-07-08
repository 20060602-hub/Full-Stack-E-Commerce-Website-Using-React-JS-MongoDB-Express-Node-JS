
# Forever - Fashion E-Commerce Web App

Forever is a full-stack modern fashion e-commerce website built with React, Node.js, Express, and MongoDB, designed to deliver a sleek shopping experience. It includes secure login, product browsing, cart, checkout, image management with Cloudinary, and mobile responsiveness — ready for real-world deployment.

## Features

- Seamless Product Browsing  
- User Signup / Login / Logout with LocalStorage  
- Add to Cart, View Cart, and Quantity Updates  
- Place Orders with Shipping Details  
- Generate Order Success Page + Email Ready  
- Cloudinary Image Upload Support  
- React Icons, Sticky Navbar, Dark Mode  
- Responsive Design (Mobile + Tablet + Desktop)  
- Clean UI with Tailwind CSS  

## Tech Stack

Category | Tools & Libraries
-------- | ------------------
Frontend | React, React Router, Tailwind CSS
Backend | Node.js, Express
Database | MongoDB, Mongoose
Auth | Firebase / LocalStorage JWT (optional)
Image Hosting | Cloudinary
Icons & Toast | react-icons, react-toastify

## Project Structure

```
forever/
├── backend/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── config/
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── styles/
│   │   ├── utils/
│   │   └── App.jsx
```

## Setup Instructions

### 1. Clone Repo

```
git clone https://github.com/20060602-hub/Full-Stack-E-Commerce-Website-Using-React-JS-MongoDB-Express-Node-JS.git
cd forever
```

### 2. Setup Frontend

```
cd frontend
npm install
```

### 3. Setup Backend

```
cd ../backend
npm install
```
### 3. Setup Admin

```
cd ../Admin
npm install

### 4. Create .env for Backend

Inside backend/, create a `.env` file:

```
MONGO_URI=mongodb+srv://your-db-url
JWT_SECRET=your-secret-key
CLOUDINARY_CLOUD_NAME=your-cloud
CLOUDINARY_API_KEY=your-key
CLOUDINARY_API_SECRET=your-secret
```

## Run the App

### Start Backend

```
cd backend
npm run dev
```

### Start Frontend

```
cd frontend
npm run dev
```
### Start Admin

```
cd Admin
npm run dev
```
Go to: http://localhost:5173

## Quotation (Hero Tagline)

"Style is a way to say who you are without having to speak. Discover our latest collection and express yourself."

## Dark Mode

- Automatic via system preference
- Can easily be extended with a toggle button

## Example Pages

- / → Home (Hero + Categories)
- /collection → All Products with Search
- /cart → Dynamic Cart Page
- /checkout → Shipping + Confirm Order
- /order-success → Final Order Invoice

## Deployment Suggestions

- I deployed in Azure cloud Service

## License

This project is licensed under the MIT License.

## Contributions

PRs are welcome. Please open an issue first to discuss what you'd like to change.

## Contact

Built by VengalaRao.
