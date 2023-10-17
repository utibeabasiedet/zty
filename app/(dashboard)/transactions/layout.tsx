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
      <>
        <div className=" p-4 sm:p-2 bg-[#F6F9FF]  w-full h-full">{children}</div>
      </>
    );
  }
  