import React from "react";
import Head from "next/head";

interface IAppHead {
	title: string
}

export const AppHead: React.FC<IAppHead> = ({ title }: IAppHead): JSX.Element => {
	return (
		<Head>
			<title>{ title }</title>
			<meta charSet="UTF-8" />
			<meta name="node application" content="A simple web application" />
			<meta name="keywords" content="HTML,CSS,XML,JavaScript" />
			<meta name="description" content="Jude Giordano Portfolio" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<meta name="author" content="Jude Giordano" />
			<meta name="theme-color" content="#b29074" />
			<meta name="apple-mobile-web-app-status-bar" content="#b29074" />
			{/* <link rel="manifest" href="/manifest.json" /> */}
			<link rel="icon" href="https://judegiordano.github.io/logo.png" />

			<link rel="preconnect" href="https://fonts.googleapis.com" />
			<link rel="preconnect" href="https://fonts.gstatic.com" />
			<link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet" />
		</Head>
	);
};