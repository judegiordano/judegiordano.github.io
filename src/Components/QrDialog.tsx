import React from "react";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";

import { AppImage } from "./AppImage";
import { Colors } from "../Constants/Colors";

interface IQrDialog {
	open: boolean;
	onClose: () => void;
}

export const QrDialog: React.FC<IQrDialog> = ({
	onClose,
	open
}: IQrDialog): JSX.Element => {
	return (
		<Dialog onClose={onClose} open={open} >
			<DialogContent style={{backgroundColor: Colors.black}}>
				<DialogTitle style={{color: Colors.white}}>Share Website</DialogTitle>
				<AppImage
					alt={"qrcode"}
					src={"qrcode.png"}
					width={350}
					height={350}
				/>
			</DialogContent>
		</Dialog>
	);
};
