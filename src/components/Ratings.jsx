import { useState, useEffect } from "react";
import axios from "axios";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

const baseURL = process.env.REACT_APP_BOOK_REVIEW_URL;
const reviewsURL = process.env.REACT_APP_BOOK_REVIEW_URL; // baseURL || "http://localhost:5001/reviews";
console.log("Review URL", reviewsURL);
const parseScore = (booksList) => {
	let data = 0;
	if (booksList.length > 1) {
		data = booksList[booksList.length - 1].score;
	} else if (booksList.length === 1) {
		data = booksList[0].score;
	}

	return parseInt(data);
};

export function RatingsReader({ isbn }) {
	const [booksReview, setBooksReview] = useState([]);
	const [status, setStatus] = useState("idle");
	const [error, setError] = useState(null);
	const isLoading = status === "loading";
	const isSuccess = status === "success";
	const calcScore = parseScore(booksReview);
	const [score, setScore] = useState(calcScore);

	const fetchBooksReview = async (url) => {
		setStatus("loading");
		try {
			const response = await axios(url);
			console.log("axio POST", response);
			setBooksReview(response?.data);
			setStatus("success");
		} catch (err) {
			console.log("err", err);
			setError(err);
		}
	};

	const handleRating = (event, newScore) => {
		event.preventDefault();
		setScore(newScore);
		console.log("onChange Rating value", { newScore, isbn });
	};

	useEffect(() => {
		// setError(null);
		console.log("Review URL", reviewsURL);

		fetchBooksReview(reviewsURL + `/${isbn}`);
	}, [isbn]);
	return (
		<div>
			<Ratings handleRating={handleRating} score={score} />
		</div>
	);
}

export default function Ratings({ handleRating, score }) {
	// const [value, setValue] = useState({ isbn, value: 0 });

	// const [score, setScore] = useState(initialScore);

	// function handleSearch(event) {
	// 	event.preventDefault();
	// 	console.log("Search: ", event.target.value);
	// 	setSearchTerm(event.target.value);
	// }

	// console.log("Reviews post data", { isbn, score });

	// const handleRating = (event, newScore) => {
	// 	event.preventDefault();
	// 	setScore(newScore);
	// 	console.log("onChange Rating value", { newScore });
	// };

	// const UpdateRating = async (url = reviewsURL, payload) => {
	// 	// setStatus("loading");
	// 	axios
	// 		.post(`${url}`, payload)
	// 		.then(function (response) {
	// 			console.log("POST Resp", response);
	// 			// setStatus("success");
	// 		})
	// 		.catch(function (error) {
	// 			console.log(error);
	// 			// setError(error);
	// 		});
	// };

	// useEffect(() => {
	// 	// setError(null);
	// 	console.log("Review URL", reviewsURL);

	// 	UpdateRating(reviewsURL, { isbn, score });
	// }, [isbn, score]);

	// useEffect(() => {
	// 	// setError(null);
	// 	console.log("Review URL", baseURL);

	// 	fetchBooksReview(baseURL + `/${isbn}`);
	// }, [isbn]);

	// useEffect(() => {
	// 	// setError(null);
	// 	UpdateRating();
	// }, [score, initialScore]);

	return (
		<Stack spacing={1}>
			<Rating
				value={score}
				onChange={handleRating}
				name="Ratings"
				defaultValue={0}
				precision={0.5}
			/>
			{/* <Rating
				name="Ratings-Read-Only"
				defaultValue={2.5}
				precision={0.5}
				readOnly
			/> */}
		</Stack>
	);
}
