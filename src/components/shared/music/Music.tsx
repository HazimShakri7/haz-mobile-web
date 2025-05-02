"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { Pause, Play, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import ReactPlayer from "react-player";

const categories = ["Semua", "Parti", "Blues", "Sedih", "Hip Hop"];
const popularSongs = [
    {
        title: "Aku Skandal",
        artist: "Hujan",
        image: "/music-list/AkuSkandal.jpg",
        videoUrl: "https://youtu.be/InFzVtO9zOA?si=T4yXPP4Xw9Tq-c0_",
    },
    {
        title: "Nirmala",
        artist: "Hujan",
        image: "/music-list/Nirmala.jpg",
        videoUrl: "https://youtu.be/HYypJzhDrNo?si=DtkSCXjib8MF2em3",
    },
    {
        title: "Air Mata Buaya",
        artist: "SpookyWetDreams",
        image: "/music-list/AirMataBuaya.jpg",
        videoUrl: "https://youtu.be/1nAjHrDiE3I?si=VckbRMF_dZJ-XeSo",
    },
    {
        title: "Dugaannya",
        artist: "Hujan",
        image: "/music-list/Dugaannya.jpg",
        videoUrl: "https://youtu.be/QaNBo-Py1AA?si=XSIWFq9vF5IV-3L6",
    },
    {
        title: "Perih Jerih",
        artist: "Masdo",
        image: "/music-list/PerihJerih.jpg",
        videoUrl: "https://youtu.be/C9XO00y3WeA?si=ziXOzD_trD0L6mm6",
    },
    {
        title: "Remaja",
        artist: "Orkes A Hizadin",
        image: "/music-list/Remaja.jpg",
        videoUrl: "https://youtu.be/oU8ldpVxLRk?si=TZT60t6VOHEbzHv3",
    },
    {
        title: "RAHSIA TUHAN",
        artist: "Noh Salleh",
        image: "/music-list/RahsiaTuhan.jpg",
        videoUrl: "https://youtu.be/NIDh_hqRbLI?si=RduTVsRMDHNbzVuo",
    },
];

export default function Music() {
    const [showAll, setShowAll] = useState(false);
    const [playing, setPlaying] = useState<string | null>(null);

    const handlePlay = (videoUrl: string) => {
        setPlaying(playing === videoUrl ? null : videoUrl);
    };

    return (
        <ScrollArea className="w-full h-[100vh] bg-black text-white">
            <div className="max-w-[375px] mx-auto px-4 py-5 space-y-6">
                {/* Kategori */}
                <div>
                    <h2 className="text-base font-semibold mb-2">Pilih Kategori</h2>
                    <div className="flex gap-2 overflow-x-auto scrollbar-none">
                        {categories.map((cat, i) => (
                            <Button
                                key={i}
                                variant={cat === "Semua" ? "default" : "outline"}
                                className={cn(
                                    "rounded-full px-4 h-8 text-xs",
                                    cat !== "Semua" &&
                                    "bg-white/20 border-white text-white hover:bg-white hover:text-black"
                                )}
                            >
                                {cat}
                            </Button>
                        ))}
                    </div>
                </div>

                {/* Lagu Popular */}
                <div>
                    <div className="flex justify-between items-center mb-2">
                        <h2 className="text-base font-semibold">Senarai Main Anda</h2>
                        <Button
                            variant="link"
                            onClick={() => setShowAll(!showAll)}
                            className="text-sm text-white/70 min-w-fit h-auto"
                        >
                            {showAll ? "Sembunyi" : "Lihat semua"}
                        </Button>
                    </div>
                    {showAll ? (
                        <div className="grid grid-cols-3 gap-3">
                            {popularSongs.map((song, i) => (
                                <div key={i} className="relative">
                                    <Image
                                        src={song.image}
                                        alt={song.title}
                                        width={120}
                                        height={120}
                                        className={`rounded-md object-cover w-full aspect-square ${playing === song.videoUrl ? "animate-spin" : ""
                                            }`}
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <Button
                                            onClick={() => handlePlay(song.videoUrl)}
                                            className="w-12 h-12 rounded-full bg-white/60 text-black"
                                        >
                                            {playing === song.videoUrl ? <Pause /> : <Play />}
                                        </Button>
                                    </div>
                                    <p className="mt-1 font-semibold text-sm truncate">
                                        {song.title}
                                    </p>
                                    <p className="text-xs text-white/60 truncate">
                                        {song.artist}
                                    </p>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="flex gap-3 overflow-x-auto scrollbar-none">
                            {popularSongs.slice(0, 5).map((song, i) => (
                                <div
                                    key={i}
                                    className="relative min-w-[120px] flex-shrink-0"
                                >
                                    <Image
                                        src={song.image}
                                        alt={song.title}
                                        width={120}
                                        height={120}
                                        className={`rounded-md object-cover ${playing === song.videoUrl ? "animate" : ""
                                            }`}
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <Button
                                            onClick={() => handlePlay(song.videoUrl)}
                                            className="w-12 h-12 rounded-full bg-white/60 text-black"
                                        >
                                            {playing === song.videoUrl ? <Pause /> : <Play />}
                                        </Button>
                                    </div>
                                    <p className="mt-1 font-semibold text-sm truncate">
                                        {song.title}
                                    </p>
                                    <p className="text-xs text-white/60 truncate">
                                        {song.artist}
                                    </p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Koleksi Baru */}
                <div>
                    <h2 className="text-base font-semibold mb-2">Koleksi Baru</h2>
                    <div className="grid grid-cols-2 gap-3">
                        <Card className="bg-white text-black">
                            <CardContent className="p-3 space-y-1">
                                <p className="text-sm font-semibold leading-4">
                                    LAGU TERPOPULER GLOBAL
                                </p>
                                <p className="text-xs text-muted-foreground">
                                    Terokai 85 lagu
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="bg-blue-400 text-white">
                            <CardContent className="p-3 space-y-1">
                                <p className="text-sm font-semibold leading-4">LAGU PUMP UP</p>
                                <p className="text-xs text-white/90">Terokai 65 lagu</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>

            {/* ReactPlayer terapung */}
            {playing && (
                <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[90%] max-w-xs bg-white text-black rounded-lg shadow-lg p-3 z-50">
                    <div className="flex justify-between items-center mb-2">
                        <p className="text-sm font-semibold">Sedang dimainkan</p>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="text-black"
                            onClick={() => setPlaying(null)}
                        >
                            <X className="w-4 h-4" />
                        </Button>
                    </div>
                    <ReactPlayer
                        url={playing}
                        playing={true}
                        controls={true}
                        width="100%"
                        height="80px"
                        style={{ borderRadius: "0.5rem" }}
                    />
                </div>
            )}
        </ScrollArea>
    );
}
