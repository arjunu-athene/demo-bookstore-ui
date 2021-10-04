import logo from "./logo.svg";
import "./App.css";
import { Books } from "./components/Books";
import { Authors } from "./components/Authors";
import CardUI from "./components/CardUI";
import Layout from "./components/Layout";

function App() {
	return (
		<div className="App">
			<Layout />
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
