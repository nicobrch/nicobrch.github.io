import {Button} from "@/components/ui/button";
import {Download, Mail} from "lucide-react";

export default function HeroSection() {
    return (
        <section className="max-w-3xl mx-auto text-center mb-48">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6 text-white">
                Nicolás Chirino
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
                Full-stack developer passionate about creating functional web applications.
                Specialized in React, Next.js, and modern web technologies.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
                <Button variant="outline">
                    <Mail className="mr-2 h-4 w-4"/>
                    Contact Me
                </Button>
                <Button>
                    <Download className="mr-2 h-4 w-4"/>
                    Download CV
                </Button>
            </div>
        </section>
    )
}