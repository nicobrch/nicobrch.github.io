import {Button} from "@/components/ui/button";
import Link from "next/link";
import {Github, Linkedin} from "lucide-react";

export default function SocialLinks() {
    return (
        <nav className="flex justify-center gap-4 mb-32 md:mb-48 text-white">
            <Button variant="ghost" size="icon" asChild>
                <Link href="https://github.com/nicobrch">
                    <Github className="w-6 h-6"/>
                    <span className="sr-only">GitHub Profile</span>
                </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
                <Link href="https://linkedin.com/in/nicobrch">
                    <Linkedin className="w-6 h-6"/>
                    <span className="sr-only">LinkedIn Profile</span>
                </Link>
            </Button>
        </nav>
    )
}