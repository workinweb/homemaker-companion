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

{
    /* Floating Stats Card */
}
{
    /* <Card className="mx-auto flex w-72 justify-center bg-white/95 shadow-xl backdrop-blur-sm sm:absolute sm:bottom-8 sm:right-8">
                                    <CardBody className="p-6">
                                        <div className="space-y-6">
                                            <div>
                                                <p className="text-sm font-medium text-gray-600">
                                                    Patient Satisfaction
                                                </p>
                                                <p className="text-3xl font-bold text-primary">
                                                    100%
                                                </p>
                                            </div>
                                            <div>
                                                <p className="text-sm font-medium text-gray-600">
                                                    Professional Staff
                                                </p>
                                                <p className="text-3xl font-bold text-primary">
                                                    Fully Certified
                                                </p>
                                            </div>
                                        </div>
                                    </CardBody>
                                </Card> */
}
