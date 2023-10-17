import "./globals.css";

 import { Footer, NavBar } from "./home/components/index";
import {Roboto, Inter,Viga} from 'next/font/google'


const roboto = Roboto({
  subsets: ['latin'],
  weight:["100" , "300" , "400" , "500" , "700" , "900" ] 
})
export const metadata = {
  title: "My Recharge NG",
  description: "Easy and reliable way to buy electricity",
  openGragh:{
    title: "My Recharge NG",
    description:"recharge your meters from home #buy electricity"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`relative overflow-x-hidden ${roboto.className}`}>
        <NavBar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
