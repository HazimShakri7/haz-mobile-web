"use client";
import { Home, CheckSquare, Music, UserRoundCog } from 'lucide-react';
import { useRouter } from 'next/navigation';  // To handle navigation

export default function BottomNavigation() {
    const router = useRouter();

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-lime-800 text-white flex justify-around py-4">
            <div
                className="flex flex-col items-center cursor-pointer"
                onClick={() => router.push('/')}>
                <Home size={30} />
            </div>
            <div
                className="flex flex-col items-center cursor-pointer"
                onClick={() => router.push('/task-list')}>
                <CheckSquare size={30} />
            </div>
            <div
                className="flex flex-col items-center cursor-pointer"
                onClick={() => router.push('/music-list')}>
                <Music size={30} />
            </div>
            <div
                className="flex flex-col items-center cursor-pointer"
                onClick={() => router.push('/user-profile')}>
                <UserRoundCog size={30} />
            </div>
        </div>
    );
}
