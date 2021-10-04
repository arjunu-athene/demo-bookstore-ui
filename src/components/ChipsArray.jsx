import * as React from "react";
import { styled } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import { Link } from "react-router-dom";

const ListItem = styled("li")(({ theme }) => ({
	margin: theme.spacing(0.5),
}));

export default function ChipsArray({ books, title, isbn }) {
	// const [booksList, setBooksList] = React.useState([books]);

	console.log("BooksList", books, isbn, title);
	// const handleDelete = (chipToDelete) => () => {
	// 	setChipData((chips) =>
	// 		chips.filter((chip) => chip.key !== chipToDelete.key)
	// 	);
	// };

	// {
	// 	/* let icon; */
	// }

	// {
	// 	/* if (data.label === "React") {
	//     icon = <TagFacesIcon />;
	// } */
	// }
	return (
		<>
			{books && books.length > 0 && (
				<h5>author of {books?.length} books</h5>
			)}

			{/* <h4>{books[0].title}</h4> */}
			{books?.length > 0
				? books.map((book) => {
						return (
							<ListItem key={book.isbn}>
								<Link
									to={`/books/${book.isbn}`}
									style={{
										textDecoration: "none",
										textAlign: "center",
										margin: "o auto",
										cursor: "pointer",
									}}
									underline="hover"
								>
									<Chip
										label={book.title}
										color="info"
										style={{
											cursor: "pointer",
										}}
									/>
								</Link>
							</ListItem>
						);
				  })
				: null}
		</>
	);
}

// icon={icon}
// onDelete={
// 	data.label === "React" ? undefined : null // handleDelete(data)
// }
