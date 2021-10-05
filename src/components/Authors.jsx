import axios from "axios";
import React, { useState, useEffect } from "react";
import UsersList from "./UsersList";
import Stack from "@mui/material/Stack";
import Alerts from "./Alerts";
// export const baseURL = process.env.REACT_APP__BOOK_SERVICE_BASE_URI;
// const baseURL = "https://jsonplaceholder.typicode.com/posts";
// const baseURL = "http://localhost:8000/books";
const baseURL = process.env.REACT_APP_BOOK_SERVICE_BASE_URI + "/authors";
console.log(baseURL);

const Authors = () => {
	const [status, setStatus] = useState("idle");
	const [authors, setAuthors] = useState([]);
	const [error, setError] = useState(null);

	const isLoading = status === "loading";
	const isSuccess = status === "success";

	const fetchauthors = async (url) => {
		setStatus("loading");
		try {
			const response = await axios(url);
			console.log(response);
			setAuthors(response?.data);
			setStatus("success");
		} catch (err) {
			console.log("err", err);
			setError(err);
		}
	};

	// if (error) throw error;

	useEffect(() => {
		setAuthors([]);
		setError(null);
		fetchauthors(baseURL);
	}, []);
	if (error) {
		return <Alerts severity="error" message={error.message} />;
	}

	// if (error) {
	// 	return (
	// 		<div role="alert">
	// 			<Alerts severity="error" message={error.message} />
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
				<Stack spacing={2}>
					{isSuccess ? (
						authors?.length ? (
							authors.map((author) => (
								<div key={author?.id}>
									<UsersList author={author} />
									{/* <li>Name: {author?.name}</li> */}
								</div>
							))
						) : (
							<h3>No authors found</h3>
						)
					) : null}
				</Stack>
			)}
		</>
	);
};

export default Authors;
