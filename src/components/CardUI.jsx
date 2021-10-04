import * as React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export default function CardUI({ title, isbn, author, book }) {
	console.log("book data", title, isbn, author);
	console.log("Book object", book);
	return (
		<Grid item xs={4}>
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
		</Grid>
	);
}
