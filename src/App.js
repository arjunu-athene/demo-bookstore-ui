// import logo from "./logo.svg";
import * as React from "react";
import "./App.css";
import CssBaseline from "@mui/material/CssBaseline";

import Layout from "./components/Layout";
import { BrowserRouter as Router } from "react-router-dom";
// import { ThemeProvider, createTheme } from "@material-ui/core/styles";
// import CssBaseline from "@material-ui/core/CssBaseline";

function App() {
	const [light, setLight] = React.useState(true);

	return (
		<div className="App">
			<CssBaseline />

			<Router>
				<Layout light={light} setLight={setLight} />
			</Router>
		</div>
	);
}

export default App;
