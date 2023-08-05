import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LandingPage() {
    return (
        <div>
            <p>Landing Page</p>
            <Link href="/sign-in">
                <Button variant="secondary">Login</Button>
            </Link>
            <Link href="/sign-up">
                <Button variant="secondary">Register</Button>
            </Link>
        </div>
    );
}
