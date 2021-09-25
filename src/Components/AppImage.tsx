import React from "react";
import Image from "next/image";

import { ImageLoader } from "./ImageLoader";

interface IAppImage {
	alt: string,
	src: string,
	width?: number,
	height?: number,
	className?: string
}

export const AppImage: React.FC<IAppImage> = ({
	alt,
	src,
	width = 30,
	height = 30,
	className
}: IAppImage): JSX.Element => {
	return (
		<Image
			loader={ImageLoader}
			loading="eager"
			priority
			width={height}
			height={width}
			alt={alt}
			src={src}
			draggable={false}
			className={className}
		/>
	);
};
