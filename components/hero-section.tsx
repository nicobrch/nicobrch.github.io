import {Button} from "@/components/ui/button";
import {Download, Mail} from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
    return (
        <section className="max-w-3xl mx-auto text-center mb-32 md:mb-48">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6 text-white">
                Nicolás Chirino
            </h1>
            <p className="text-lg text-muted-foreground">
                Software Engineer | Machine Learning | DevOps | Cloud Computing
            </p>
            <p className="text-lg text-muted-foreground mb-8">
                Passionate about tackling complex challenges and eager to apply technical expertise in real-world,
                high-impact projects.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
                <Button variant="destructive" asChild>
                    <Link href="mailto:nicolas.brch@gmail.com">
                        <Mail className="mr-2 h-4 w-4"/>
                        Contact Me
                    </Link>
                </Button>
                <Button asChild>
                    <Link href="/cv.pdf">
                        <Download className="mr-2 h-4 w-4"/>
                        Download CV
                    </Link>
                </Button>
            </div>
        </section>
    )
}