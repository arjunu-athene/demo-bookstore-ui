import * as React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import { Link } from "react-router-dom";
import Ratings, { RatingsReader } from "./Ratings";

export default function CardUI({ title, isbn, author }) {
	console.log("book data", title, isbn, author);
	return (
		<Grid item xs={4}>
			<Card sx={{ minWidth: 275 }} key={isbn}>
				<CardContent>
					<Typography variant="h6" component="p">
						{title}
					</Typography>

					<Typography variant="body2">
						<br />
						by{" "}
						<Link
							to={`/authors/${author.id}`}
							style={{
								textDecoration: "none",
								textAlign: "center",
								margin: "o auto",
								cursor: "pointer",
							}}
							underline="hover"
						>
							<Chip
								label={author.name}
								color="default"
								style={{
									cursor: "pointer",
								}}
							/>
						</Link>
						{/* {author?.name} */}
					</Typography>
				</CardContent>
				<CardActions>
					<Button size="small">
						<Typography
							sx={{ fontSize: 14, mb: 1.5 }}
							color="text.secondary"
							gutterBottom
						>
							ISBN: #
							<Link
								to={`/books/${isbn}`}
								// style={{
								// 	textDecoration: "none",
								// 	textAlign: "center",
								// 	margin: "o auto",
								// 	cursor: "pointer",
								// }}
								underline="hover"
							>
								{/* <Chip
									label={isbn}
									color="default"
									style={{
										cursor: "pointer",
									}}
								/> */}
								{isbn}
							</Link>
							<RatingsReader isbn={isbn} />
						</Typography>
					</Button>
				</CardActions>
			</Card>
		</Grid>
	);
}
