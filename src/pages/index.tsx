import React from "react";
import Image from "next/image";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

import { AppLayout } from "@Comp/Layout/AppLayout";
import headshot1 from "../../public/headshot1.jpg";

import { ExperienceCard } from "@Comp/ExperienceCard";
import { EducationCard } from "@Comp/EducationCard";

const Home: React.FC = (): JSX.Element => {
	return (
		<AppLayout>
			<Card style={{ marginTop: 10 }}>
				<CardContent style={{ paddingLeft: 30, paddingRight: 30 }}>
					<Image
						loading="eager"
						placeholder={"blur"}
						priority
						width={150}
						height={150}
						alt={"headshot2"}
						src={headshot1}
						draggable={false}
						className="avatar"
					/>
					<Typography variant="h5" component="h2" style={{ paddingTop: 20, paddingBottom: 5, fontFamily: "'Open Sans', sans-serif", fontWeight: "bolder" }}>
						Jude Giordano
					</Typography>
					<Typography color="textSecondary" style={{ fontWeight: "bold" }} >
						Software Engineer at Harold Grinspoon Foundation
					</Typography>
					<Typography color="textSecondary" gutterBottom>
						Springfield, Massachusetts Metropolitan Area
					</Typography>
					<Divider />
					<Typography style={{ paddingTop: 20 }}>
						Solution-driven professional excelling in a highly collaborative work environment. Proven experience developing products for web, desktop, and mobile app users, meeting the highest standards for SEO, UX, and performance.
					</Typography>
				</CardContent>
			</Card>
			
			<ExperienceCard />
			
			<EducationCard />

			<style jsx global>{`
				.avatar {
					border-radius: 50%;
				}
			`}</style>
		</AppLayout>
	);
};

export default Home;