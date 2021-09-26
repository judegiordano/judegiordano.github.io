import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import { EducationData } from "../Constants/Education";
import { AppImage } from "./AppImage";
import { Colors } from "../Constants/Colors";
import { AppDivider } from "./AppDivider";

export const EducationCard: React.FC = (): JSX.Element => {
	return (
		<Card style={{ marginTop: 10, backgroundColor: Colors.gray }}>
			<CardContent style={{ paddingLeft: 30, paddingRight: 30 }}>
				<Typography color="textSecondary" style={{ fontWeight: "bold", color: Colors.white }} >
					Education
				</Typography>
				<AppDivider />
				{
					EducationData.map((edu, index) => (
						<div key={index} style={{ paddingTop: 10 }}>
							<div style={{ display: "inline", verticalAlign: "middle", paddingRight: 10 }}>
								<AppImage
									alt={edu.alt}
									src={edu.src}
								/>
							</div>
							<div style={{ display: "inline-grid", verticalAlign: "middle" }}>
								<Typography style={{ color: Colors.white }}>
									{edu.schoolName}
								</Typography>
								<Typography color="textSecondary" style={{ fontSize: 12, color: Colors.lightGray }}>
									{edu.major} ({edu.dateRamge})
								</Typography>
							</div>
						</div>
					))
				}
			</CardContent>
		</Card>
	);
};
