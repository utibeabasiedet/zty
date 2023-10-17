import { NavBar, SidebarMenu } from "./index";
import "../(homepage)/globals.css";
import {Roboto, Inter,Viga} from 'next/font/google'

const roboto = Roboto({
  subsets: ['latin'],
  weight:["100" , "300" , "400" , "500" , "700" , "900" ] 
})

export const metadata = {
  title: "dashboard",
  description: "Easy and reliable way to buy electricity",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`relative  ${roboto.className}`}>
         <NavBar />
       
        <div className="flex gap-0 h-auto ">
          <div className="w-[260px] sm:mr-12 lg:block hidden">
            <SidebarMenu />
          </div>
         

          <div className="md:px-[32px]  bg-[#F6F9FF]   pt-[24px] pb-10 md:pb-20    h-auto   relative w-full ">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
