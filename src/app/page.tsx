import CurrentNews from "@/components/shared/CurrentNews";
import ProfileCard from "@/components/shared/ProfileCard";

export default function Home() {
    return (
        <div className="mx-4 mt-4 font-semibold flex flex-col gap-2">
            Have a wonderful day Haz!
            <ProfileCard />
            Current News
            <CurrentNews />
        </div>
    );
}
