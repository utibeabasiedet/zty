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
        <div className=" p-4 sm:p-2 card-electric w-full h-full">{children}</div>
      </>
    );
  }
  