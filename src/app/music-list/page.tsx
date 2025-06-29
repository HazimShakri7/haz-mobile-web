import BottomNavigation from "@/components/shared/bottombar/BottomNavigation";
import Music from "@/components/shared/music/Music";

export default function MusicList() {
    return (
        <div className="flex flex-col min-h-screen bg-black">
            <main className="flex flex-col items-center gap-6 flex-1 p-4 pt-8">
                <Music />
            </main>
            <footer className="border-t p-4">
                <BottomNavigation />
            </footer>
        </div>
    );
}
