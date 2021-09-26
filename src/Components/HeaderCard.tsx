import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import { BioData } from "../Constants/Bio";
import { AppImage } from "./AppImage";
import { Colors } from "../Constants/Colors";
import { AppDivider } from "./AppDivider";

export const HeaderCard: React.FC = (): JSX.Element => {
	return (
		<Card style={{ marginTop: 10, backgroundColor: Colors.gray }}>
			<CardContent style={{ paddingLeft: 30, paddingRight: 30 }}>
				<AppImage
					alt={"headshot"}
					src={BioData.headshot}
					width={150}
					height={150}
					className="avatar"
				/>
				<Typography variant="h5" component="h2" style={{
					paddingTop: 20,
					paddingBottom: 5,
					fontFamily: "'Open Sans', sans-serif",
					fontWeight: "bolder",
					color: Colors.white
				}}>
					{BioData.name}
				</Typography>
				<Typography color="textSecondary" style={{ fontWeight: "bold", color: Colors.white }} >
					{BioData.currentRole} at {BioData.currentCompany}
				</Typography>
				<Typography color="textSecondary" style={{ color: Colors.lightGray }} gutterBottom>
					{BioData.area}
				</Typography>
				<AppDivider />
				<Typography style={{ paddingTop: 20, color: Colors.white }}>
					{BioData.bio}
				</Typography>
			</CardContent>
			<style jsx global>{`
				.avatar {
					border-radius: 50%;
				}
			`}</style>
		</Card>
	);
};
