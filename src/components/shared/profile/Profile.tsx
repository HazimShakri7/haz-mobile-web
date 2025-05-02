'use client';

import { Card } from "@/components/ui/card";
import Image from "next/image";
import {
    User,
    BarChart2,
    Award,
    Settings,
    Languages,
    Info,
    LogOut,
    ChevronRight, // Import ChevronRight icon
} from "lucide-react";

export default function Profile() {
    return (
        <div className="min-h-screen bg-lime-900 text-white px-4 pt-12 pb-8">
            {/* Profile Info */}
            <div className="flex flex-col items-center">
                <div className="w-24 h-24 rounded-full overflow-hidden">
                    <Image
                        src="/HazImage.jpg"
                        alt="Profile Picture"
                        width={96}
                        height={96}
                        className="object-cover w-full h-full"
                    />
                </div>
                <h1 className="mt-4 text-lg font-semibold">Haz Devep</h1>
            </div>

            {/* Menu Items */}
            <div className="mt-6 space-y-3">
                <MenuItem icon={<User size={18} />} text="Edit Profile" />
                <MenuItem icon={<BarChart2 size={18} />} text="Performance Stats" />
                <MenuItem icon={<Award size={18} />} text="Badges or Achievements" />
                <MenuItem icon={<Settings size={18} />} text="Settings" />
                <MenuItem icon={<Languages size={18} />} text="Languages" />
                <MenuItem icon={<Info size={18} />} text="About us" />
                <MenuItem
                    icon={<LogOut size={18} className="text-red-500" />}
                    text="Logout"
                    className="text-red-500"
                    isLast
                    isCentered
                />
            </div>
        </div>
    );
}

// MenuItem Component
function MenuItem({
    icon,
    text,
    className,
    isLast = false,
    isCentered = false,
}: {
    icon: React.ReactNode;
    text: string;
    className?: string;
    isLast?: boolean;
    isCentered?: boolean;
}) {
    return (
        <Card
            className={`flex items-center justify-between px-4 py-3 rounded-lg ${isLast ? "bg-transparent" : "bg-gray-100"
                } ${isCentered ? "items-center" : "items-start"}`}
        >
            <div className={`flex items-center gap-3 ${className}`}>
                {icon}
                <span className="text-sm font-medium">{text}</span>
                {!isLast && <ChevronRight size={18} className="text-gray-400 ml-auto" />}
            </div>
            {/* Conditionally render ChevronRight icon */}
        </Card>
    );
}
