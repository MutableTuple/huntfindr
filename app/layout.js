import { Lexend } from "next/font/google";
import "./globals.css";

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
});

export const metadata = {
  title: "huntfindr | The best place for your next Product Hunt launch",
  description: "Get Upvotes, Build Reach, and Earn Backlinks.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${lexend.className} antialiased`}>{children}</body>
    </html>
  );
}
