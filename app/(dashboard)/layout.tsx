import Navbar from "@/components/Navbar";
import { Suspense } from "react";
import Loading from "./loading";
import Sidebar from "@/components/Sidebar";

export const metadata = {
    title: "Dashboard",
    description: "dashboard for genius application",
};

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="h-full relative">
            <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-[80] bg-gray-900">
                <Sidebar />
            </div>
            <Suspense fallback={<Loading />}>
                <main className="md:pl-72">
                    <Navbar />
                    {children}
                </main>
            </Suspense>
        </div>
    );
}
