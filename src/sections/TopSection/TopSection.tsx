import Image from "next/image";
import { SocialButtons } from "~/modules/SideButtons/SideButtons";

function TopSection() {
    return (
        <div className="mx-auto mb-5 flex max-w-[1440px] items-center justify-between px-10 ">
            <div className="  flex items-center gap-4">
                <Image
                    width={250}
                    height={250}
                    src="/logo.webp"
                    alt="Evan Home Care Logo"
                    className="h-48 w-48 object-contain sm:h-48 sm:w-48"
                />
            </div>

            <SocialButtons />
        </div>
    );
}

export default TopSection;
