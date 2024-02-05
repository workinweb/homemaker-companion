import { HomeSection } from "~/sections/Home/HomeSection";
import { AboutUsSection } from "~/sections/AboutUs/AboutUsSection";
import { Footer } from "~/modules/Footer/Footer";
import { ServicesSection } from "~/sections/Services/ServicesSection";
import { SideButtons } from "~/modules/SideButtons/SideButtons";
import { FloatingButton } from "~/modules/FloatingButton/FloatingButton";
import { TeamSection } from "~/sections/Team/TeamSection";
import { ChooseUsSection } from "~/sections/ChooseUs/ChooseUsSection";

export default async function Home() {
    return (
        <>
            <main>
                <SideButtons />

                <div className="flex w-full flex-col items-center">
                    <div className="w-full max-w-[1440px] px-5 pb-20 sm:px-10">
                        <HomeSection />
                        <AboutUsSection />
                        {/* <TeamSection /> */}
                        <ChooseUsSection />
                        <ServicesSection />
                    </div>

                    <div className="w-full ">
                        <Footer />
                    </div>

                    <FloatingButton />
                </div>
            </main>
        </>
    );
}
