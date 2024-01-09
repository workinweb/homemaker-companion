export default async function NotFoundPage() {
    return (
        <div className="bg-gray-200 flex items-center justify-center h-screen">
            <div className="text-center">
                <h1 className="text-6xl font-bolclassNameNamet-red-500">404</h1>
                <p className="text-xl mt-3">Oops! Page not found.</p>
                <p className="mt-5">
                    <a href="/" className="text-blue-500 hovclassNameNamederline">Go back home</a>
                </p>
            </div>
        </div>

    );
}