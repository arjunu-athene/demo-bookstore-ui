import axios from "axios";
import React, { useState, useEffect } from "react";
import UsersList from "./UsersList";
import Stack from "@mui/material/Stack";
import { useParams } from "react-router-dom";
import Alerts from "./Alerts";
// export const baseURL = process.env.REACT_APP__BOOK_SERVICE_BASE_URI;
// const baseURL = "https://jsonplaceholder.typicode.com/posts";
// const baseURL = "http://localhost:8000/books";
const baseURL = process.env.REACT_APP_BOOK_SERVICE_BASE_URI + "/authors";
console.log(baseURL);

const Author = () => {
	const [status, setStatus] = useState("idle");
	const [author, setAuthor] = useState(null);
	const [error, setError] = useState(null);
	let { id } = useParams();

	const isLoading = status === "loading";
	const isSuccess = status === "success";

	const fetchauthors = async (url) => {
		setStatus("loading");
		try {
			const response = await axios(url);
			console.log("response", response);
			setAuthor(response?.data);
			setStatus("success");
		} catch (err) {
			console.log("err", err);
			setError(err);
		}
	};

	// if (error) throw error;

	useEffect(() => {
		setAuthor(null);
		setError(null);
		fetchauthors(baseURL + `/${id}`);
	}, [id]);

	// console.log("Author Data: ", author);
	if (error) return <Alerts severity="error" message={error.message} />;

	return (
		<>
			{isLoading ? (
				<h3>Loading.....</h3>
			) : (
				<Stack spacing={2}>
					{isSuccess ? (
						author?.id ? (
							<div key={author?.id}>
								<UsersList author={author} />
								{/* <li>Name: {author?.name}</li> */}
							</div>
						) : (
							<h3>No author found</h3>
						)
					) : null}
				</Stack>
			)}
		</>
	);
};

export default Author;
