import { Poppins } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // adjust weights as needed
  variable: "--font-poppins", // this sets a CSS variable
});

export const metadata = {
  title: "EKAANT - AGRO TOURISM RETREAT",
  description: "Where silence heals, and nature whispers.....",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
