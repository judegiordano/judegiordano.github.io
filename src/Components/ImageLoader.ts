interface IImageLoader {
	src: string,
	width: number,
	quality?: number
}

export const ImageLoader = ({
	src,
	width,
	quality = 100
}: IImageLoader): string => {
	return `https://judegiordano.github.io/public/${src}?w=${width}&q=${quality}`;
};
