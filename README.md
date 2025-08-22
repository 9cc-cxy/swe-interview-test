## How to Launch the Application

### 1. Backend Setup

1. Open a terminal and navigate to the backend folder:
	```sh
	cd StarterCode/backend
	```
2. Install dependencies:
	```sh
	npm install
	```
3. (Optional) Create a `.env` file in the backend folder and set the port:
	```env
	PORT=4000
	```
4. Start the backend server:
	```sh
	node index.js
	```
	The backend will run on `http://localhost:5000` by default, unless you set a different PORT in the `.env` file.

### 2. Frontend Setup

1. Open a new terminal and navigate to the frontend folder:
	```sh
	cd StarterCode/frontend
	```
2. Install dependencies:
	```sh
	npm install
	```
3. Create a `.env` file in the frontend folder to specify the backend URL:
	```env
	REACT_APP_API_URL=http://localhost:5000
	```
4. Start the frontend app:
	```sh
	npm start
	```
	The frontend will run on `http://localhost:3000` by default.
---

**Note:**
- Make sure the backend is running before starting the frontend.
- If you change the backend port, update the frontend `.env` or API URLs accordingly.
