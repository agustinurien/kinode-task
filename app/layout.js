
import "./globals.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";


export const metadata = {
  title: "Kinode | Agustin Urien",
  description: "The technical home website challenge for Kinode.",
  canonicalUrl: 'https://kinode-task.vercel.app/',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
