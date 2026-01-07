import { Poppins } from 'next/font/google';
import localFont from 'next/font/local';
import Script from 'next/script';
import dynamic from "next/dynamic";
import NavBar from "@/components/Navbar";
import VideoPlayerModel from "@/components/Models/VideoPlayerModel";
import "../styles/globals.scss";
import "./layout.scss";
import Loader from '@/components/Loader';

const BottomFooter = dynamic(() => import("@/components/BottomFooter/Bottomfooter"), {
  loading: () => <Loader/>,
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-poppins',
});

const avenirRegular = localFont({
  src: '../../public/fonts/AvenirNextWorld-Regular.38dee76842bf5bff471c.ttf',
  variable: '--font-avenir-regular',
  fontDisplay: 'swap',
});

const bressayRegular = localFont({
  src: '../../public/fonts/BressayDisplay_W_Rg.b0d1f9766875b8a70308.woff2',
  variable: '--font-bressay-regular',
  fontDisplay: 'swap',
});

export const metadata = {
  title: "Sicilian Tech",
  description: "We specialize in creating Integrity Visionary Trusted E-Commerce ON-TIME. ON-BUDGET. ON-POINT",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script src="https://smtpjs.com/v3/smtp.js" strategy="beforeInteractive" />
      </head>
      <body id="body" className={`${avenirRegular.variable} ${poppins.variable} ${bressayRegular.variable}`}>
        <NavBar />
        <main className="main-wrapper">{children}</main>
        <BottomFooter />
      </body>
    </html>
  );
}
