import logo from "./logo.svg";
import "./App.css";
import { Books } from "./components/Books";

function App() {
	return (
		<div className="App">
			{/* <header className="App-header"></header> */}
			{/* <img src={logo} className="App-logo" alt="logo" /> */}
			<p>E-Bookstore</p>
			<Books />
		</div>
	);
}

export default App;
