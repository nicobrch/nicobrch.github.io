export type Project = {
    title: string;
    description: string;
    github?: string;
    demo?: string;
    image: string;
}

export const projects: Project[] = [
    {
        title: "Student Evaluation Platform",
        description: "LabCall is a student evaluation platform that allows teachers to evaluate students with automated adaptative quizzes. Built using NextJS, Postgres, and Material-UI.",
        github: "https://github.com/nicobrch/labcall",
        image: "/labcall.webp?height=400&width=600",
    },
    {
        title: "Ticket Management App",
        description: "A real-time ticket management application with team collaboration features. Built using NextJS, Postgres, and TailwindCSS.",
        github: "https://github.com/nicobrch/tics2",
        image: "/integra.webp?height=400&width=600",
    },
]