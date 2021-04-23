// App.jsx

import React from "react";
import "./App.css";
import Navbar from "./components/Navbar.js";
import Home from "./components/pages/Home.js";
import { BrowserRouter } from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<div className='App'>
				<Navbar />
				<Home />
			</div>
		</BrowserRouter>
	);
}

export default App;
