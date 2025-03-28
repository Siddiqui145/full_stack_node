# Full Stack Node + React App  

This is a simple full-stack application that provides an API endpoint using Node.js and Express, which serves motivational quotes. The frontend, built with React and Vite, fetches data from the API and displays it dynamically.  

## Features  

- **Backend:** Express server providing an API endpoint (`/api/jokes`).  
- **Frontend:** React application using Axios to fetch data from the API.  
- **Deployment Ready:** Can be deployed separately as an API and a frontend app.  

## Setup Guide  

### 1. Backend Setup  

#### Install Dependencies  
```sh
cd backend
npm install
```

#### Run Server  
```sh
node server.js
```
By default, the server runs on `http://localhost:3000/`.  

#### Deploy API  
You can deploy this backend using services like:  
- **Render:** [render.com](https://render.com)  
- **Vercel:** [vercel.com](https://vercel.com)  
- **Railway:** [railway.app](https://railway.app)  

### 2. Frontend Setup  

#### Install Dependencies  
```sh
cd frontend
npm install
```

#### Run React App  
```sh
npm run dev
```
By default, the React app runs on `http://localhost:5173/`.  

#### Connect API to Deployed Backend  
Once the backend is deployed, update the API URL in `App.jsx`:  
```js
axios.get('https://your-api-url.com/api/jokes')
```

#### Deploy Frontend  
You can deploy the frontend using:  
- **Vercel:** `vercel deploy`  
- **Netlify:** `netlify deploy`  

## Tech Stack  
- **Backend:** Node.js, Express  
- **Frontend:** React, Vite, Axios  
- **Deployment:** Vercel, Render, Netlify  
