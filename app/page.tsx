import Link from "next/link"
import Image from "next/image"
import { Github, Linkedin, ExternalLink, Download, Mail } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import { projects } from "@/app/projects"

export default function Home() {
    return (
        <div className="min-h-screen relative overflow-hidden">
            {/* Circular gradient blur */}
            <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,rgba(0,128,0,0.1),rgba(0,0,0,0)_75%)] pointer-events-none"/>

            {/* Main content */}
            <div className="container mx-auto px-4 py-8 relative">
                {/* Navigation */}
                <nav className="flex justify-center gap-4 mb-48 text-white">
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

                {/* Hero Section */}
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
                        <Button variant="default">
                            <Download className="mr-2 h-4 w-4"/>
                            Download CV
                        </Button>
                    </div>
                </section>

                {/* Projects Section */}
                <section className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold mb-8 text-white">Featured Projects</h2>
                    <div className="space-y-6">
                        {projects.map((project, index) => (
                            <Card key={index} className="overflow-hidden bg-card/50">
                                <div className="md:grid md:grid-cols-5 md:gap-6">
                                    <CardContent className="md:col-span-3 p-6">
                                        <CardTitle className="text-xl mb-2 text-white">{project.title}</CardTitle>
                                        <CardDescription
                                            className="mb-4 text-muted-foreground">{project.description}</CardDescription>
                                        <div className="flex flex-wrap gap-3">
                                            {project.github && (
                                                <Button variant="outline" size="sm" asChild>
                                                    <Link href={project.github}>
                                                        <Github className="mr-2 h-4 w-4"/>
                                                        Code
                                                    </Link>
                                                </Button>
                                            )}
                                            {project.demo && (
                                                <Button variant="ghost" size="sm" asChild>
                                                    <Link href={project.demo}>
                                                        <ExternalLink className="mr-2 h-4 w-4"/>
                                                        Demo
                                                    </Link>
                                                </Button>
                                            )}
                                        </div>
                                    </CardContent>
                                    <div className="md:col-span-2 relative min-h-[100px]">
                                        <Image
                                            src={project.image}
                                            alt={`Screenshot of ${project.title}`}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    )
}