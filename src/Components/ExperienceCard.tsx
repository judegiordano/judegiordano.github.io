import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

import { ExperienceData } from "../Constants/Experience";
import { AppImage } from "./AppImage";

export const ExperienceCard: React.FC = (): JSX.Element => {
	return (
		<Card style={{ marginTop: 10 }}>
			<CardContent style={{ paddingLeft: 30, paddingRight: 30 }}>
				<Typography color="textSecondary" style={{ fontWeight: "bold" }} >
					Experience
				</Typography>
				<Divider />
				{
					ExperienceData.map((exp, index) => (
						<div key={index} style={{ paddingTop: 10 }}>
							<div style={{ display: "inline", verticalAlign: "middle", paddingRight: 10 }}>
								<AppImage
									alt={exp.alt}
									src={exp.src}
								/>
							</div>
							<div style={{ display: "inline-grid", verticalAlign: "middle" }}>
								<Typography>
									{exp.jobTitle}
								</Typography>
								<Typography color="textSecondary" style={{ fontSize: 12 }}>
									{exp.company} ({exp.dateRamge})
								</Typography>
							</div>
						</div>
					))
				}

			</CardContent>
		</Card>
	);
};
