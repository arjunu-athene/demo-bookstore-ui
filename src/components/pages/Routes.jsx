import React from "react";
import Container from "@mui/material/Container";

import { ErrorBoundary } from "react-error-boundary";
import { Switch, Route, Redirect } from "react-router-dom";
import Books from "../Books";
import Book from "../Book";
import Authors from "../Authors";
import Author from "../Author";
import Alerts from "../Alerts";

function ErrorFallback({ error }) {
	console.error(error.message);
	return <Alerts severity="error" message={error.message} />;
}

export const Routes = () => {
	return (
		<div>
			<Container sx={{ py: 8 }} maxWidth="md">
				<ErrorBoundary
					FallbackComponent={ErrorFallback}
					onReset={() => false}
				>
					<Switch>
						<Route path="/authors/:id" children={<Author />} />

						<Route exact path="/authors">
							<Authors />
						</Route>
						<Route path="/books/:isbn" children={<Book />} />
						<Route exact path="/books">
							<Books />
						</Route>
						<Redirect exact from="/" to="/books" />
						<Route path="*">
							<Alerts
								severity="error"
								message="404 - Page not found!"
							/>
						</Route>
					</Switch>
				</ErrorBoundary>
			</Container>
		</div>
	);
};
