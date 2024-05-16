import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import LenisWrapper from "@/components/layouts/LenisWrapper";
import Providers from "./_providers/Providers";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
	title: "RCollabs",
	description: "Generated by create next app",
	icons: {
		icon: "/assets/favicon.ico",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning={true}>
			<body className={GeistSans.className}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<Toaster richColors position="top-center" />
					<Providers>
						<LenisWrapper>{children}</LenisWrapper>
					</Providers>
				</ThemeProvider>
			</body>
		</html>
	);
}
