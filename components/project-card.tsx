import {Card, CardContent, CardDescription, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {ExternalLink, Github} from "lucide-react";
import Image from "next/image";
import { Project } from "@/app/projects";

export default function ProjectCard({ project }: { project: Project }) {
    return (
        <Card className="overflow-hidden bg-card/50">
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
    )
}