import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import ChipsArray from "./ChipsArray";
import { Link } from "react-router-dom";

const parsedConcat = (str) => str.toLowerCase().split(" ").join("-");

export default function UsersList({ author }) {
	console.log("Author's books: ", author);
	return (
		<List
			sx={{
				width: "100%",
				maxWidth: 360,
				bgcolor: "background.paper",
			}}
		>
			<ListItem alignItems="flex-start">
				<ListItemAvatar>
					<Avatar alt={author.name} />
				</ListItemAvatar>
				<ListItemText
					primary={author.name}
					secondary={
						<React.Fragment>
							<Typography
								sx={{ display: "inline" }}
								component="span"
								variant="body2"
								color="text.primary"
							>
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
									@{parsedConcat(author.name)}
								</Link>
							</Typography>
							<ChipsArray
								{...author.books}
								books={author.books}
							/>
						</React.Fragment>
					}
				/>
			</ListItem>
			<Divider variant="inset" component="li" />
		</List>
	);
}
