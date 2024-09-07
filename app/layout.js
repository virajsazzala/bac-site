import { Inter } from "next/font/google";
// import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BAC's Site",
  description: "Bangalore anime club's website",
};

export default function RootLayout({ children }) {
  
  let header = (
    <header>
      <Link href={'/'}>
        <h1>BAC&apos;s Notice Board</h1>
      </Link>
      <div className="nav-links">
        <Link href={'/about'}>
          <p className="nav-link">About</p>
        </Link>
        <Link href={'/events'}>
          <p className="nav-link">Events</p>
        </Link>
      </div>
    </header>
  )

  let footer = (
    <footer>
      <p>Made during a late night depressive episode with 😭</p>
    </footer>
  )

  return (
    <html lang="en">
      {/* className={`${geistSans.variable} ${geistMono.variable} antialiased`} */}
      <body className={inter.className}>
        {header}
        {children}
        {footer}
      </body>
    </html>
  );
}
