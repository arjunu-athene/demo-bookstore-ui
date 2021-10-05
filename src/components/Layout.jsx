import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Books from "./Books";
import Authors from "./Authors";
import Author from "./Author";
import { MenuBook } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import { Switch, Route, Link } from "react-router-dom";
import Book from "./Book";
import Alerts from "./Alerts";
import { ErrorBoundary } from "react-error-boundary";
import { Routes } from "./pages/Routes";

function ErrorFallback({ error }) {
	console.error(error.message);
	return <Alerts severity="error" message={error.message} />;
}

function Copyright() {
	return (
		<Typography variant="body2" color="text.secondary" align="center">
			{"Copyright © "}
			<Link
				color="inherit"
				to="https://github.com/aumathanu-athene/demo-bookstore-ui"
			>
				source-code
			</Link>{" "}
			{new Date().getFullYear()}
			{"."}
		</Typography>
	);
}

const themeLight = createTheme({
	palette: {
		background: {
			// default: "#e4f0e2",
			default: "#EBEBEB",
		},
	},
});

const themeDark = createTheme({
	palette: {
		background: {
			default: "#222222",
		},
		text: {
			primary: "#ffffff",
		},
	},
});

export default function Layout({ light, setLight }) {
	return (
		<ThemeProvider theme={light ? themeLight : themeDark}>
			<CssBaseline />
			<AppBar position="relative">
				<Toolbar>
					<MenuBook sx={{ mr: 2 }} />
					<Typography variant="h6" color="inherit" noWrap>
						Books store
					</Typography>
				</Toolbar>
			</AppBar>
			{/* <main> */}
			{/* Hero unit */}
			<Box
				sx={{
					bgcolor: "background.paper",
					pt: 8,
					pb: 2,
				}}
			>
				<Container maxWidth="sm">
					<Button onClick={() => setLight((prev) => !prev)}>
						Toggle Theme
					</Button>
					<Typography
						component="h1"
						variant="h2"
						align="center"
						color="text.primary"
						gutterBottom
					>
						Books Store
					</Typography>
					<Typography
						variant="h5"
						align="center"
						color="text.secondary"
						paragraph
					>
						Manage the books collection
					</Typography>
					<Stack
						sx={{ pt: 4 }}
						direction="row"
						spacing={2}
						justifyContent="center"
					>
						<Button variant="outlined">
							<NavLink
								to={"/books"}
								style={{
									textDecoration: "none",
									listStyle: "none",
									textAlign: "center",
									margin: "o auto",
								}}
								activeStyle={{
									borderBottom: "2px solid #1976D1",
									textAlign: "center",
								}}
							>
								Books
							</NavLink>
						</Button>
						<Button variant="outlined">
							<NavLink
								to={"/authors"}
								variant="outlined"
								style={{
									textDecoration: "none",
									listStyle: "none",
									textAlign: "center",
									margin: "o auto",
								}}
								activeStyle={{
									borderBottom: "2px solid #1976D1",
									textAlign: "center",
								}}
							>
								Authors
							</NavLink>
						</Button>
					</Stack>
				</Container>
			</Box>
			<Routes />
			{/* </main> */}
			{/* Footer */}
			<Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
				<Typography variant="h6" align="center" gutterBottom>
					Demo App - Books store
				</Typography>
				<Typography
					variant="subtitle1"
					align="center"
					color="text.secondary"
					component="p"
				>
					Built for demo in Athene Advance
				</Typography>
				<Copyright />
			</Box>
			{/* End footer */}
		</ThemeProvider>
	);
}
