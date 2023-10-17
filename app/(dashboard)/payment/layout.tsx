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
        <div className="pb-10  bg-black sm:p-4 card-electric sm:w-full h-full ">{children}</div>
      </>
    );
  }
  