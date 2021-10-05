import axios from "axios";
import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CardUI from "./CardUI";
import SearchAppBar from "./Search";
import Alerts from "./Alerts";

// export const baseURL = process.env.REACT_APP__BOOK_SERVICE_BASE_URI;
// const baseURL = "https://jsonplaceholder.typicode.com/posts";
// const baseURL = "http://localhost:8000/books";
const baseURL = process.env.REACT_APP_BOOK_SERVICE_BASE_URI + "/books";
console.log(baseURL);

const Books = () => {
	const [status, setStatus] = useState("idle");
	const [books, setBooks] = useState([]);
	const [error, setError] = useState(null);
	const [searchTerm, setSearchTerm] = React.useState("");

	function handleSearch(event) {
		event.preventDefault();
		console.log("Search: ", event.target.value);
		setSearchTerm(event.target.value);
	}

	const isLoading = status === "loading";
	const isSuccess = status === "success";

	const fetchBooks = async (url) => {
		setStatus("loading");
		try {
			const response = await axios(url);
			console.log(response);
			setBooks(response?.data);
			setStatus("success");
		} catch (err) {
			console.log("err", err);
			setError(err);
		}
	};

	// if (error) throw error;

	useEffect(() => {
		setBooks([]);
		setError(null);
		fetchBooks(baseURL);
	}, []);

	if (error) return <Alerts severity="error" message={error.message} />;

	return (
		<>
			<SearchAppBar searchTerm={searchTerm} onSearch={handleSearch} />
			{isLoading ? (
				<h3>Loading.....</h3>
			) : (
				<div>
					<Grid container spacing={3}>
						<Box sx={{ flexGrow: 1 }}>
							<Grid container spacing={2}>
								{isSuccess ? (
									books?.length ? (
										books.map((book) => (
											<CardUI {...book} key={book.isbn} />
										))
									) : (
										<h3>No books found</h3>
									)
								) : null}
							</Grid>
						</Box>
					</Grid>
				</div>
			)}
		</>
	);
};

export default Books;
