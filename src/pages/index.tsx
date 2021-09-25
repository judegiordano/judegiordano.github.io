import React from "react";
import Image from "next/image";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

import { AppLayout } from "@Comp/Layout/AppLayout";
import headshot1 from "../../public/headshot1.jpg";
import elmsLogo from "../../public/elmsLogo.jpg";
import grinspoonLogo from "../../public/haroldGrinspoonLogo.jpg";
import fpiLogo from "../../public/fpiLogo.jpg";
import questLogo from "../../public/questLogo.jpg";

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
			<Card style={{ marginTop: 10 }}>
				<CardContent style={{ paddingLeft: 30, paddingRight: 30 }}>
					<Typography color="textSecondary" style={{ fontWeight: "bold" }} >
						Experience
					</Typography>
					<Divider />
					<div style={{ paddingTop: 10 }}>
						<div style={{ display: "inline", verticalAlign: "middle", paddingRight: 10 }}>
							<Image
								loading="eager"
								placeholder={"blur"}
								priority
								width={30}
								height={30}
								alt={"haroldGrinspoonLogo"}
								src={grinspoonLogo}
								draggable={false}
							/>
						</div>
						<div style={{ display: "inline-grid", verticalAlign: "middle" }}>
							<Typography>
								Fulstack Software Engineer
							</Typography>
							<Typography color="textSecondary" style={{ fontSize: 12 }}>
								Harold Grinspoon Foundation (Mar 2020 - Present)
							</Typography>
						</div>
					</div>
					<div style={{ paddingTop: 10 }}>
						<div style={{ display: "inline", verticalAlign: "middle", paddingRight: 10 }}>
							<Image
								loading="eager"
								placeholder={"blur"}
								priority
								width={30}
								height={30}
								alt={"fpiLogo"}
								src={fpiLogo}
								draggable={false}
							/>
						</div>
						<div style={{ display: "inline-grid", verticalAlign: "middle" }}>
							<Typography>
								Software Engineer
							</Typography>
							<Typography color="textSecondary" style={{ fontSize: 12 }}>
								Farm Credit Financial Partners Inc. (Oct 2019 - Mar 2020)
							</Typography>
						</div>
					</div>
					<div style={{ paddingTop: 10 }}>
						<div style={{ display: "inline", verticalAlign: "middle", paddingRight: 10 }}>
							<Image
								loading="eager"
								placeholder={"blur"}
								priority
								width={30}
								height={30}
								alt={"questLogo"}
								src={questLogo}
								draggable={false}
							/>
						</div>
						<div style={{ display: "inline-grid", verticalAlign: "middle" }}>
							<Typography>
								Software Developer
							</Typography>
							<Typography color="textSecondary" style={{ fontSize: 12 }}>
								Quest Global (Apr 2019 - Oct 2020)
							</Typography>
						</div>
					</div>
				</CardContent>
			</Card>
			<Card style={{ marginTop: 10 }}>
				<CardContent style={{ paddingLeft: 30, paddingRight: 30 }}>
					<Typography color="textSecondary" style={{ fontWeight: "bold" }} >
						Education
					</Typography>
					<Divider />
					<div style={{ paddingTop: 10 }}>
						<div style={{ display: "inline", verticalAlign: "middle", paddingRight: 10 }}>
							<Image
								loading="eager"
								placeholder={"blur"}
								priority
								width={30}
								height={30}
								alt={"elmsLogo"}
								src={elmsLogo}
								draggable={false}
							/>
						</div>
						<div style={{ display: "inline-grid", verticalAlign: "middle" }}>
							<Typography>
								College of Our Lady of the Elms
							</Typography>
							<Typography color="textSecondary" style={{ fontSize: 12 }}>
								Computer Information Techonology / Graphic Design (2015 - 2019)
							</Typography>
						</div>
					</div>
				</CardContent>
			</Card>
			
			<style jsx global>{`
				.avatar {
					border-radius: 50%;
				}
			`}</style>
		</AppLayout>
	);
};

export default Home;