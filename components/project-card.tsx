import {CardContent, CardDescription, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {ExternalLink, Github} from "lucide-react";
import { Project } from "@/app/projects";
import { GlowingCard } from "@/components/ui/glowing-card";

export default function ProjectCard({ project }: { project: Project }) {
    return (
        <GlowingCard>
            <CardContent className="p-6">
                <CardTitle className="text-xl mb-2 text-white">{project.title}</CardTitle>
                <CardDescription
                    className="mb-4 text-muted-foreground">{project.description}</CardDescription>
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
            </CardContent>
        </GlowingCard>
    )
}