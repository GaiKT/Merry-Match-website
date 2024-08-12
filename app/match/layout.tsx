import SideBar from "@/components/utils/match/SideBar";
import MatchSearchBar from "@/components/utils/match/matchSearchBar";

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode;}>) {
    return (
        <main className='relative min-h-screen'>
            {children}            
            <SideBar/>
            <MatchSearchBar/>
        </main>      
  )}