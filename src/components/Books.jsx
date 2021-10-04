import axios from "axios";
import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CardUI from "./CardUI";

// export const baseURL = process.env.REACT_APP__BOOK_SERVICE_BASE_URI;
// const baseURL = "https://jsonplaceholder.typicode.com/posts";
// const baseURL = "http://localhost:8000/books";
const baseURL = process.env.REACT_APP_BOOK_SERVICE_BASE_URI + "/books";
console.log(baseURL);

const Books = () => {
	const [status, setStatus] = useState("idle");
	const [books, setBooks] = useState([]);
	const [error, setError] = useState(null);

	const isLoading = status === "loading";
	const isSuccess = status === "success";

	const fetchBooks = async (url) => {
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
		fetchBooks(baseURL);
	}, []);

	return (
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
	);
};

export default Books;
