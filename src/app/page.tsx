import BottomNavigation from "@/components/shared/bottombar/BottomNavigation";
import AvatarProfile from "@/components/shared/home/AvatarProfile";
import CalendarCard from "@/components/shared/home/CalendarCard";
import ExploreMore from "@/components/shared/home/ExploreMore";
import MyActivity from "@/components/shared/home/MyActivity";

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen bg-black">
            <main className="flex flex-col gap-4 flex-1 p-4">
                <AvatarProfile />
                <CalendarCard />
                <p className="font-semibold text-lg text-white">My Activity</p>
                <MyActivity />
                <p className="font-semibold text-lg text-white">Explore More</p>
                <ExploreMore />
            </main>
            <footer className="border-t p-4">
                <BottomNavigation />
            </footer>
        </div>
    );
}
