import React from "react";

// export const baseURL = process.env.REACT_APP__BOOK_SERVICE_BASE_URI;
// const baseURL = "https://jsonplaceholder.typicode.com/posts";
// const baseURL = "http://localhost:8000/books";
const baseURL = process.env.REACT_APP_BOOK_SERVICE_BASE_URI + "/books";
console.log(baseURL);
export const Books = () => {
	const [books, setBooks] = React.useState([]);
	const [error, setError] = React.useState(null);

	const fetchBooks = async (url) => {
		try {
			const response = await window.fetch(url);
			const respJson = await response.json();
			console.log(respJson);
			setBooks(respJson);
		} catch (err) {
			console.log("err", err);
			setError(err);
		}
	};

	if (error) throw error;

	React.useEffect(() => {
		fetchBooks(baseURL);
	}, []);

	return (
		<div>
			<h3>Books</h3>
			<ul>
				{books.map((book) => (
					<div key={book.isbn}>
						<li>Title: {book.title}</li>
						<li>ISBN: {book.isbn}</li>
						<li>Author: written by {book.author.name}</li>
					</div>
				))}
			</ul>
		</div>
	);
};
