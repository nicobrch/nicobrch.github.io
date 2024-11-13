import { projects } from "@/app/projects";
import ProjectCard from "@/components/project-card";

export default function FeaturedProjects() {
    return (
        <section className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-white">Featured Projects</h2>
            <div className="space-y-6">
                {projects.map((project, index) => (
                    <ProjectCard project={project} key={index} />
                ))}
            </div>
        </section>
    )
}