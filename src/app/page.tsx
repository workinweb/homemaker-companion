import { FloatingButton } from "~/modules/FloatingButton/FloatingButton";
import { Footer } from "~/modules/Footer/Footer";
import { CustomNavbar } from "~/modules/Navbar/Navbar";
import { SocialButtons } from "~/modules/SideButtons/SideButtons";
import { AboutUsSection } from "~/sections/AboutUs/AboutUsSection";
import { ChooseUsSection } from "~/sections/ChooseUs/ChooseUsSection";
import { HomeSection } from "~/sections/Home/HomeSection";
import { ServicesSection } from "~/sections/Services/ServicesSection";
import Squares from "~/sections/Squares/Squares";
import TopSection from "~/sections/TopSection/TopSection";

export default async function Home() {
    return (
        <>
            <main>
                <div className="hidden sm:block">
                    <TopSection />
                </div>

                <CustomNavbar />

                <div className="mt-5 px-5 sm:hidden">
                    <SocialButtons />
                </div>

                <div className="flex w-full flex-col items-center">
                    <div className="w-full max-w-[1440px] px-3 pb-20 sm:px-10">
                        <HomeSection />
                        <ServicesSection />
                        <Squares />
                        <AboutUsSection />
                        <ChooseUsSection />
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
