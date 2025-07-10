import React from 'react'
import { Metadata } from "next";
export const metadata: Metadata = {
  title: {
    template: "%s | My About page",
    default: "About Page",
  },
  openGraph: {
    title: "About page",
    description: "About page",
    images: [
      {
        url: "https://i.pinimg.com/1200x/af/01/84/af01840d9a12d2caa2c75bbb2034ea9f.jpg",
        width: 800,
        height: 650,
        alt: "Car",
        type: "image/png",
      },
    ],
  },
};
function page() {
  return (
    <div>About Page</div>
  )
}

export default page