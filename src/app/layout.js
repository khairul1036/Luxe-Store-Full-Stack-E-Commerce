import { Inter } from "next/font/google";
import "./globals.css";
import { SITE_NAME } from "@/config/constants";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: { default: SITE_NAME, template: `%s | ${SITE_NAME}` },
  description: "Premium fashion and accessories.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
