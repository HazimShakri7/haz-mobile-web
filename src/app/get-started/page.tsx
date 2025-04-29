"use client";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import GetStartedSlider from '@/components/shared/start/GetStartedSlider';

export default function GetStarted() {
    const [isVisible, setIsVisible] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);  // Mulakan animasi slide
        }, 500);  // Menunggu 0.5 saat sebelum animasi bermula

        // Set timeout untuk mengarahkan pengguna ke halaman utama selepas animasi selesai (3 detik)
        const redirectTimer = setTimeout(() => {
            router.push('/');  // Arahkan ke halaman utama
        }, 800000);  // Selepas 3 saat, redirect

        return () => {
            clearTimeout(timer);
            clearTimeout(redirectTimer);
        };
    }, [router]);

    return (
        <div
            className={`transition-transform transform h-screen flex justify-center items-center bg-blue-950 ${isVisible ? 'translate-x-0' : '-translate-x-full'
                }`} // Animasi slide dari kiri ke kanan
        >
            <div className="text-white text-center">
                <h1 className="text-4xl mb-4">Your Journey to Success Start with Daily Tracking</h1>
                <GetStartedSlider className="-bottom-60" />
            </div>
        </div>
    );
}
