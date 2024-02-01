import { HomeSection } from "~/sections/Home/HomeSection";
import { AboutUsSection } from "~/sections/AboutUs/AboutUsSection";
import { Footer } from "~/modules/Footer/Footer";
import { ServicesSection } from "~/sections/Services/ServicesSection";
import { SideButtons } from "~/modules/SideButtons/SideButtons";
import { FloatingButton } from "~/modules/FloatingButton/FloatingButton";
import Head from "next/head";

export default async function Home() {
    return (
        <>
            <Head>
                <link
                    href="https://db.onlinewebfonts.com/c/7655d129d0addb2f08a5c1dc994aaa4b?family=Brush+Script+MT"
                    rel="stylesheet"
                    type="text/css"
                    as="font"
                />

                <link
                    href="https://db.onlinewebfonts.com/c/7655d129d0addb2f08a5c1dc994aaa4b?family=Brush+Script+MT"
                    rel="preload"
                    type="text/css"
                    as="font"
                />
            </Head>
            <main>
                <SideButtons />

                <div className="flex w-full flex-col items-center">
                    <div className="w-full max-w-[1440px] px-5 pb-20 sm:px-10">
                        <HomeSection />
                        <AboutUsSection />
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
