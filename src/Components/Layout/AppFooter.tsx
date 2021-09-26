import React from "react";

import { SocialsBar } from "@Comp/SocialsBar";
import { Colors } from "../../Constants/Colors";

export const AppFooter: React.FC = (): JSX.Element => {
	return (
		<footer style={styles.footer}>
			<div style={{ paddingTop: "10px" }}>
				<SocialsBar />
				&#169; Copyright {new Date().getFullYear()}
			</div>
		</footer>
	);
};

const styles = {
	footer: {
		color: Colors.white,
		marginTop: "10px",
		width: "100%",
		height: "100px",
		borderTop: `1px solid ${Colors.lightGray}`,
		textAlign: "center",
		justifyContent: "center",
		alignItems: "center"
	}
} as IStyles;