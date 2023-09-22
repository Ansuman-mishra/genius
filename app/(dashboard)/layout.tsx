import Navbar from "@/components/Navbar";
import { Suspense } from "react";
import Loading from "./loading";
import Sidebar from "@/components/Sidebar";
import { getApiLimitCount } from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subscription";

export const metadata = {
    title: "Dashboard",
    description: "dashboard for genius application",
};

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
    const apiLimitCount = await getApiLimitCount();
    const isPro = await checkSubscription();
    return (
        <div className="h-full relative">
            <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 bg-gray-900">
                <Sidebar apiLimitCount={apiLimitCount} isPro={isPro} />
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
