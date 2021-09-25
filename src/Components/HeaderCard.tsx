import React from "react";
import Image from "next/image";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

import { BioData } from "../Constants/Bio";

export const HeaderCard: React.FC = (): JSX.Element => {
	return (
		<Card style={{ marginTop: 10 }}>
			<CardContent style={{ paddingLeft: 30, paddingRight: 30 }}>
				<Image
					unoptimized
					loading="eager"
					placeholder={"blur"}
					priority
					width={150}
					height={150}
					alt={"headshot"}
					src={BioData.headshot}
					draggable={false}
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
