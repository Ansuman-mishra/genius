import React from "react";
import { UserButton } from "@clerk/nextjs";
import { MobileSidebar } from "@/components/Mobile-Sidebar";

import { getApiLimitCount } from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subscription";
import { ModeToggle } from "./dark-mode-switcher";

const Navbar = async () => {
    const apiLimitCount = await getApiLimitCount();
    const isPro = await checkSubscription();
    return (
        <div className="flex items-center p-4">
            <MobileSidebar isPro={isPro} apiLimitCount={apiLimitCount} />
            <div className="flex w-full justify-end gap-5 items-center">
                <UserButton afterSignOutUrl="/" />
                <ModeToggle />
            </div>
        </div>
    );
};

export default Navbar;
