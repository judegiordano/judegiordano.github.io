import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import { ExperienceData } from "../Constants/Experience";
import { AppImage } from "./AppImage";
import { Colors } from "../Constants/Colors";
import { AppDivider } from "./AppDivider";

export const ExperienceCard: React.FC = (): JSX.Element => {
	return (
		<Card style={{ marginTop: 10, backgroundColor: Colors.gray }}>
			<CardContent style={{ paddingLeft: 30, paddingRight: 30 }}>
				<Typography color="textSecondary" style={{ fontWeight: "bold", color: Colors.white }} >
					Experience
				</Typography>
				<AppDivider />
				{
					ExperienceData.map((exp, index) => (
						<div key={index} style={{ paddingTop: 10 }}>
							<div style={{ display: "inline", verticalAlign: "middle", paddingRight: 10 }}>
								<AppImage
									alt={exp.alt}
									src={exp.src}
								/>
							</div>
							<div style={{ display: "inline-grid", verticalAlign: "middle", color: Colors.white }}>
								<Typography>
									{exp.jobTitle}
								</Typography>
								<Typography color="textSecondary" style={{ fontSize: 12, color: Colors.lightGray }}>
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
