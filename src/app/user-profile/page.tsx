import BottomNavigation from "@/components/shared/bottombar/BottomNavigation";
import Profile from "@/components/shared/profile/Profile";

export default function UserProfile() {
    return (
        <div className="min-h-screen bg-black">
            <Profile />
            <footer className="border-t p-4">
                <BottomNavigation />
            </footer>
        </div>
    );
}
