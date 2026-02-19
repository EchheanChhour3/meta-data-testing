import type { Metadata } from "next";
import "./globals.css";
import localfont from 'next/font/local' 
// import ButtonComponent from "@/components/ButtonComponent";
// import { NavbarComponent } from "@/components/(landing)/nav/NavbarComponent";
import { FooterComponent } from "@/components/(landing)/nav/FooterComponent";
import React from "react";

import { NavbarComponent } from "@/components/(landing)/nav/NavbarComponent";
import Script from "next/script";
export const metadata: Metadata = {
  // title: "Car Selling",
  // description: "This is homepage of car selling",
  // keywords:['car','discount','modern','luxeries','expensive'],
  // authors:[{'name':'FullStack Students'}],
  // applicationName:'Car Selling',
  title: {
    template: "%s | Car Selling",
    default: "HomePage",
  },
  openGraph: {
    title: "Car Selling",
    description: "This is HomePage of car ",
    images: [
      {
        url: "https://i.pinimg.com/736x/06/9e/af/069eaf93bcfc82d89df428b3cfce227c.jpg",
        width: 800,
        height: 600,
        alt: "Car",
        type: "image/png",
      },
    ],
  },
};


// kantumruy_font 
const kantumruy_font = localfont({
  src: '../../public/fonts/KantumruyPro-SemiBold.ttf',
  variable: '--font-kantumruy',
  display: 'swap',
  preload: true,
  fallback: ['sans']
})

// lexend_font
const lexend_font = localfont({
  src: '../../public/fonts/Lexend-Regular.ttf',
  variable: '--font-lexend',
  display: 'swap'
})


export default function RootLayout({
  children,
  modal
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${kantumruy_font.variable} ${lexend_font.variable}`}>
      <body
      >
        <NavbarComponent/>
        
        {children}
        {modal}
        {/* <h1 lang="km">សួស្តី</h1> */}
        <FooterComponent />
 <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-0LW4L89Y5J"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-0LW4L89Y5J');
        `}
      </Script>
      </body>
    </html>
  );
}
