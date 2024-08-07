import { JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast"
import { Header, PageTransition } from "@/components/index";

const defaultJetBrainsMono = JetBrains_Mono({
    subsets: ["latin"],
    weight: [
        "100",
        "200",
        "300",
        "400",
        "500",
        "600",
        "700",
        "800"
    ],
    variable: "--font-jetbrainsMono"
})

export const metadata = {
  title: "Prince Khanyile",
  description: "I thrive on solving complex problems. From sites to apps, I've got you covered!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body className={defaultJetBrainsMono.variable}>
            <Header />
            <PageTransition>
              {children}
              <Toaster position="bottom-center" />
            </PageTransition>
        </body>
    </html>
  );
}
