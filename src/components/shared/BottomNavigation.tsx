import { Gamepad2, Home, Timer, UserCog2 } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import Link from "next/link";

const navItems = [
    { icon: Home, label: "Home", href: "/" },
    { icon: Timer, label: "Time", href: "/time" },
    { icon: Gamepad2, label: "Game", href: "/game" },
    { icon: UserCog2, label: "Profile", href: "/profile" },
];

export default function BottomNavigation() {
    return (
        <Card className="fixed bottom-1 w-full rounded-xs border-t border-muted bg-background shadow-2xl p-4">
            <CardContent className="flex flex-row justify-around items-center gap-8">
                {navItems.map(({ icon: Icon, label, href }, index) => (
                    <Link
                        key={index}
                        href={href}
                        className="flex flex-col items-center text-xs text-foreground"
                    >
                        <Icon className="h-7 w-7" />
                        <span>{label}</span>
                    </Link>
                ))}
            </CardContent>
        </Card>
    );
}