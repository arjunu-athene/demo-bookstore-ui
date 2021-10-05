import * as React from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import CloseIcon from "@mui/icons-material/Close";

export default function Alerts({ severity, message }) {
	const [open, setOpen] = React.useState(true);
	// severity can be "error", "warning", "info", "success"
	return (
		<Stack sx={{ width: "100%" }} spacing={2}>
			<Collapse in={open}>
				<Alert
					severity={severity}
					action={
						<IconButton
							aria-label="close"
							color="inherit"
							size="small"
							onClick={() => setOpen(false)}
						>
							<CloseIcon fontSize="inherit" />
						</IconButton>
					}
					sx={{ mb: 2 }}
				>
					{severity.toUpperCase()}: {message}
				</Alert>
			</Collapse>
		</Stack>
	);
}
