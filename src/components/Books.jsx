import axios from "axios";
import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import CardUI from "./CardUI";

// export const baseURL = process.env.REACT_APP__BOOK_SERVICE_BASE_URI;
// const baseURL = "https://jsonplaceholder.typicode.com/posts";
// const baseURL = "http://localhost:8000/books";
const baseURL = process.env.REACT_APP_BOOK_SERVICE_BASE_URI + "/books";
console.log(baseURL);

export const Books = () => {
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
			<h3>Books</h3>
			<Box sx={{ flexGrow: 1 }}>
				<Grid container spacing={2}>
					{isSuccess ? (
						books?.length ? (
							books.map((book) => {
								return (
									<Grid item xs={4}>
										<CardUI book={book} {...book} />
									</Grid>
								);
							})
						) : (
							<h3>No books found</h3>
						)
					) : null}
				</Grid>
			</Box>
		</div>
	);
};
