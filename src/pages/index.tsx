import React from "react";

import { AppLayout } from "@Comp/Layout/AppLayout";
import { ExperienceCard } from "@Comp/ExperienceCard";
import { EducationCard } from "@Comp/EducationCard";
import { HeaderCard } from "@Comp/HeaderCard";

const Home: React.FC = (): JSX.Element => {
	return (
		<AppLayout>
			<HeaderCard />
			<ExperienceCard />
			<EducationCard />
		</AppLayout>
	);
};

export default Home;