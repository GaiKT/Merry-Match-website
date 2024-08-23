import SideBar from "@/components/utils/match/SideBar";

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode;}>) {
    return (
        <main className='relative min-h-screen'>
            {children}            
            <SideBar/>
        </main>      
  )}