import logo from "./logo.svg";
import "./App.css";
import { Books } from "./components/Books";
import { Authors } from "./components/Authors";
import CardUI from "./components/CardUI";
import Layout from "./components/Layout";
import PrimarySearchAppBar from "./components/Nav";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
	return (
		<div className="App">
			{/* <PrimarySearchAppBar /> */}
			<Router>
				<Layout />
			</Router>

			{/* <header className="App-header"></header> */}
			{/* <img src={logo} className="App-logo" alt="logo" /> */}
			{/* <p>E-Bookstore</p>
			<CardUI />
			<Books />
			<Authors /> */}
		</div>
	);
}

export default App;
