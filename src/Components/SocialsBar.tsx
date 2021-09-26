import React from "react";
import IconButton from "@mui/material/IconButton";

import { SocialLinks } from "../Constants/Socials";
import { Colors } from "..//Constants/Colors";

export const SocialsBar: React.FC = (): JSX.Element => {
	return (
		<div>
			{
				SocialLinks.map((link, index) => (
					<IconButton
						key={index}
						aria-label={link.label}
						style={{ color: Colors.white }}
					>
						<a target="_blank" rel="noreferrer" href={link.href}>
							<link.icon />
						</a>
					</IconButton>
				))
			}
		</div>
	);
};
