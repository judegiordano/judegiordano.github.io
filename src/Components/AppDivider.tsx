import React from "react";
import Divider from "@mui/material/Divider";

import { Colors } from "../Constants/Colors";

export const AppDivider: React.FC = (): JSX.Element => {
	return <Divider style={{ backgroundColor: Colors.black }} />;
};