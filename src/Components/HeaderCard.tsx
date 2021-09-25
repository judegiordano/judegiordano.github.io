import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

import { BioData } from "../Constants/Bio";
import { AppImage } from "./AppImage";

export const HeaderCard: React.FC = (): JSX.Element => {
	return (
		<Card style={{ marginTop: 10 }}>
			<CardContent style={{ paddingLeft: 30, paddingRight: 30 }}>
				<AppImage
					alt={"headshot"}
					src={BioData.headshot}
					width={150}
					height={150}
					className="avatar"
				/>
				<Typography variant="h5" component="h2" style={{ paddingTop: 20, paddingBottom: 5, fontFamily: "'Open Sans', sans-serif", fontWeight: "bolder" }}>
					{BioData.name}
				</Typography>
				<Typography color="textSecondary" style={{ fontWeight: "bold" }} >
					{BioData.currentRole} at {BioData.currentCompany}
				</Typography>
				<Typography color="textSecondary" gutterBottom>
					{BioData.area}
				</Typography>
				<Divider />
				<Typography style={{ paddingTop: 20 }}>
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
