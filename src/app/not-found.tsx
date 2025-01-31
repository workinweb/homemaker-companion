import Image from "next/image";

export default async function NotFoundPage() {
    return (
        <div className="mt-[-50px] flex h-screen items-center justify-center bg-gray-200">
            <div className="text-center">
                <h1 className="font-bolclassNameNamet-red-500 text-6xl">404</h1>
                <p className="mt-3 text-xl">Oops! Page not found.</p>

                <div className="p-10">
                    <Image
                        src="/404.svg"
                        width={400}
                        height={400}
                        alt="404 image"
                    />
                </div>

                <div className="mt-8">
                    <p className="mt-3 text-xl"> Come back later</p>
                    <p className="mt-5">
                        <a
                            href="/"
                            className="hovclassNameNamederline text-blue-500"
                        >
                            Go back home
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}
