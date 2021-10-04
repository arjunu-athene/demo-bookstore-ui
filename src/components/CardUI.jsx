import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const bull = (
	<Box
		component="span"
		sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
	>
		•
	</Box>
);

export default function CardUI({ title, isbn, author, book }) {
	console.log("book data", title, isbn, author);
	console.log("Book object", book);
	return (
		<Card sx={{ minWidth: 275 }} key={isbn}>
			<CardContent>
				<Typography variant="h6" component="p">
					{title}
				</Typography>

				<Typography variant="body2">
					<br />
					by {author?.name}
				</Typography>
				<Typography
					sx={{ fontSize: 14, mb: 1.5 }}
					color="text.secondary"
					gutterBottom
				>
					ISBN: {isbn}
				</Typography>
			</CardContent>
			<CardActions>
				<Button size="small">Learn More</Button>
			</CardActions>
		</Card>
	);
}
