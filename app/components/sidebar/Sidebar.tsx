import DesktopSidebar from "./DesktopSidebar"
import NobileFooter from "./MobileFooter"
import getCurrentUser from '@/app/actions/getCurrentUser'
async function Sidebar({children}:{
    children:React.ReactNode
}){
    const currentUser = await getCurrentUser();
    return(
        <div className="h-full">
            {currentUser && <DesktopSidebar currentUser={currentUser} />}
            <NobileFooter />
            <main className="lg:pl-20 h-full">
            {children}
            </main>
        </div>
    )
};

export default Sidebar