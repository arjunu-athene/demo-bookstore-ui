import axios from "axios";
import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CardUI from "./CardUI";
import { useParams } from "react-router-dom";
import Alerts from "./Alerts";
// export const baseURL = process.env.REACT_APP__BOOK_SERVICE_BASE_URI;
// const baseURL = "https://jsonplaceholder.typicode.com/posts";
// const baseURL = "http://localhost:8000/books";
const baseURL = process.env.REACT_APP_BOOK_SERVICE_BASE_URI + "/books";
console.log(baseURL);

const Book = () => {
	const [status, setStatus] = useState("idle");
	const [book, setBook] = useState(null);
	const [error, setError] = useState(null);
	let { isbn } = useParams();

	const isLoading = status === "loading";
	const isSuccess = status === "success";

	const fetchBook = async (url) => {
		setStatus("loading");
		try {
			const response = await axios(url);
			console.log(response);
			setBook(response?.data);
			setStatus("success");
		} catch (err) {
			console.log("err", err);
			setError(err);
		}
	};

	// if (error) throw error;

	useEffect(() => {
		setBook(null);
		setError(null);
		fetchBook(baseURL + `/${isbn}`);
	}, [isbn]);
	console.log("Individual Book: ", book);

	if (error) return <Alerts severity="error" message={error.message} />;

	// if (error) {
	// 	return (
	// 		<div role="alert">
	// 			There is an error:{" "}
	// 			<pre style={{ whiteSpace: "normal", color: "crimson" }}>
	// 				{error.message}
	// 			</pre>
	// 		</div>
	// 	);
	// }

	return (
		<>
			{isLoading ? (
				<h3>Loading.....</h3>
			) : (
				<div>
					<Grid container spacing={3}>
						<Box sx={{ flexGrow: 1 }}>
							<Grid container spacing={2}>
								{isSuccess ? (
									book?.isbn ? (
										<CardUI {...book} key={book.isbn} />
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

export default Book;
