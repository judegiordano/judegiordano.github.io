import React from "react";

import { SocialsBar } from "@Comp/SocialsBar";

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
		marginTop: "10px",
		width: "100%",
		height: "100px",
		borderTop: "1px solid #eaeaea",
		textAlign: "center",
		justifyContent: "center",
		alignItems: "center"
	}
} as IStyles;