import React from "react";
import IconButton from "@mui/material/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedIn from "@mui/icons-material/LinkedIn";
import Mail from "@mui/icons-material/Mail";

export const SocialsBar: React.FC = (): JSX.Element => {
	return (
		<div>
			<IconButton aria-label="github" >
				<a target="_blank" rel="noreferrer" href={"https://github.com/judegiordano"}>
					<GitHubIcon />
				</a>
			</IconButton>
			<IconButton aria-label="LinkedIn" >
				<a target="_blank" rel="noreferrer" href={"https://www.linkedin.com/in/jude-giordano-868728107/"}>
					<LinkedIn />
				</a>
			</IconButton>
			<IconButton aria-label="Mail" >
				<a target="_blank" rel="noreferrer" href={"mailto:judegiordano@gmail.com"}>
					<Mail />
				</a>
			</IconButton>
		</div>
	);
};
