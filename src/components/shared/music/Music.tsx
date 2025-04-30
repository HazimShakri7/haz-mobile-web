"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import Image from "next/image";

const categories = ["All", "Party", "Blues", "Sad", "Hip Hop"];
const popularSongs = [
    {
        title: "Starboy Remix",
        artist: "The Weeknd",
        image: "/music-list/TheWeeknd.jpg",
    },
    {
        title: "Superman",
        artist: "Eminem",
        image: "/music-list/Superman.jpg",
    },
    {
        title: "We Don't Talk",
        artist: "Kyanu & Marc",
        image: "/music-list/Puth.jpg",
    },
];

export default function Music() {
    return (
        <ScrollArea className="w-full h-[100vh] bg-black text-white px-4 py-6 space-y-6">
            {/* Categories */}
            <div>
                <h2 className="text-lg font-semibold mb-2">Select Categories</h2>
                <div className="flex gap-2 overflow-x-auto">
                    {categories.map((cat, i) => (
                        <Button
                            key={i}
                            variant={cat === "All" ? "default" : "outline"}
                            className={cn(
                                "rounded-full px-4 text-sm",
                                cat !== "All" && "bg-transparent border-white/40 text-white hover:bg-white hover:text-black"
                            )}
                        >
                            {cat}
                        </Button>
                    ))}
                </div>
            </div>

            {/* Popular Songs */}
            <div>
                <div className="flex justify-between items-center mb-2">
                    <h2 className="text-lg font-semibold">Popular Songs</h2>
                    <Button variant="link" className="text-xs text-white/70 px-0">See all</Button>
                </div>
                <div className="flex gap-4 overflow-x-auto">
                    {popularSongs.map((song, i) => (
                        <div key={i} className="min-w-[140px] flex-shrink-0">
                            <Image
                                src={song.image}
                                alt={song.title}
                                width={140}
                                height={140}
                                className="rounded-md object-cover"
                            />
                            <p className="mt-2 font-semibold text-sm truncate">{song.title}</p>
                            <p className="text-xs text-white/60">{song.artist}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* New Collection */}
            <div>
                <h2 className="text-lg font-semibold mb-2">New Collection</h2>
                <div className="grid grid-cols-2 gap-4">
                    <Card className="bg-white text-black">
                        <CardContent className="p-4 space-y-1">
                            <p className="text-sm font-semibold">TOP SONGS GLOBAL</p>
                            <p className="text-xs text-muted-foreground">Discover 85 songs</p>
                        </CardContent>
                    </Card>
                    <Card className="bg-blue-400 text-white">
                        <CardContent className="p-4 space-y-1">
                            <p className="text-sm font-semibold">PUMP UP SONGS</p>
                            <p className="text-xs text-white/90">Discover 65 songs</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </ScrollArea>
    );
}
