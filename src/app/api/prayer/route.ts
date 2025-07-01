// app/api/prayer/route.ts
import { NextRequest, NextResponse } from 'next/server'

const CITY_TO_ZONE: Record<string, string> = {
    // Perlis
    "Kangar": "PLS01",
    "Arau": "PLS01",
    "Padang Besar": "PLS01",

    // Kedah
    "Alor Setar": "KDH01",
    "Sungai Petani": "KDH01",
    "Kulim": "KDH01",
    "Baling": "KDH01",
    "Pendang": "KDH01",
    "Jitra": "KDH01",
    "Yan": "KDH01",

    // Pulau Pinang
    "George Town": "PNG01",
    "Bayan Lepas": "PNG01",
    "Butterworth": "PNG01",
    "Bukit Mertajam": "PNG01",
    "Nibong Tebal": "PNG01",
    "Kepala Batas": "PNG01",

    // Perak
    "Ipoh": "PRK01",
    "Taiping": "PRK01",
    "Teluk Intan": "PRK01",
    "Sitiawan": "PRK01",
    "Batu Gajah": "PRK01",
    "Kampar": "PRK01",
    "Lumut": "PRK01",
    "Kuala Kangsar": "PRK01",

    // Selangor
    "Shah Alam": "SGR01",
    "Petaling Jaya": "SGR01",
    "Subang Jaya": "SGR01",
    "Klang": "SGR01",
    "Kajang": "SGR01",
    "Ampang": "SGR01",
    "Gombak": "SGR01",
    "Rawang": "SGR01",
    "Sepang": "SGR01",

    // Kuala Lumpur
    "Kuala Lumpur": "SGR01",

    // Putrajaya
    "Putrajaya": "SGR01",

    // Negeri Sembilan
    "Seremban": "NGS01",
    "Nilai": "NGS01",
    "Port Dickson": "NGS01",
    "Kuala Pilah": "NGS01",
    "Jempol": "NGS01",

    // Melaka
    "Bandar Melaka": "MLK01",
    "Alor Gajah": "MLK01",
    "Jasin": "MLK01",
    "Masjid Tanah": "MLK01",

    // Johor
    "Johor Bahru": "JHR01",
    "Pasir Gudang": "JHR01",
    "Skudai": "JHR01",
    "Batu Pahat": "JHR01",
    "Muar": "JHR01",
    "Kluang": "JHR01",
    "Segamat": "JHR01",
    "Kulai": "JHR01",

    // Pahang
    "Kuantan": "PHG01",
    "Temerloh": "PHG01",
    "Bentong": "PHG01",
    "Jerantut": "PHG01",
    "Raub": "PHG01",
    "Maran": "PHG01",

    // Terengganu
    "Kuala Terengganu": "TRG01",
    "Dungun": "TRG01",
    "Kemaman": "TRG01",
    "Marang": "TRG01",
    "Besut": "TRG01",

    // Kelantan
    "Kota Bharu": "KTN01",
    "Pasir Mas": "KTN01",
    "Tumpat": "KTN01",
    "Gua Musang": "KTN01",
    "Machang": "KTN01",
    "Pasir Puteh": "KTN01",
    "Tanah Merah": "KTN01",

    // Sabah
    "Kota Kinabalu": "SBH01",
    "Sandakan": "SBH02",
    "Tawau": "SBH03",
    "Lahad Datu": "SBH02",
    "Keningau": "SBH01",
    "Beaufort": "SBH01",
    "Semporna": "SBH03",

    // Sarawak
    "Kuching": "SWK01",
    "Miri": "SWK03",
    "Sibu": "SWK02",
    "Bintulu": "SWK03",
    "Limbang": "SWK03",
    "Sarikei": "SWK02",

    // Labuan
    "Labuan": "LBN01",
}

export async function GET(req: NextRequest) {
    const city = req.nextUrl.searchParams.get('city')

    if (!city) {
        return NextResponse.json({ error: 'City required' }, { status: 400 })
    }

    const zone = CITY_TO_ZONE[city]

    if (!zone) {
        return NextResponse.json({ error: 'Zone not found for city' }, { status: 404 })
    }

    const today = new Date()
    const year = today.getFullYear()
    const month = String(today.getMonth() + 1).padStart(2, '0')
    const day = String(today.getDate()).padStart(2, '0')

    const url = `https://www.e-solat.gov.my/index.php?r=esolatApi/TakwimSolat&zone=${zone}&date=${day}-${month}-${year}`

    try {
        const res = await fetch(url)
        const json = await res.json()

        const todayData = json.prayerTime[0]

        const timings = {
            Fajr: todayData.fajr,
            Sunrise: todayData.syuruk,
            Dhuhr: todayData.zohor,
            Asr: todayData.asar,
            Maghrib: todayData.maghrib,
            Isha: todayData.isyak,
        }

        return NextResponse.json(timings)
    } catch (err) {
        return NextResponse.json({ error: 'Failed to fetch JAKIM data' }, { status: 500 })
    }
}
