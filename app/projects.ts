export type Project = {
    title: string;
    description: string;
    github: string;
    demo?: string;
    image?: string;
}

export const projects: Project[] = [
    {
        title: "Multi-Functional LLM Agent",
        description: "A multi-functional agent cappable of doing SQL queries to retrieve products on a PostgreSQL database with PGVector and use similarity search on documents to retrieve company policies. Built using Langchain and Streamlit",
        github: "https://github.com/nicobrch/geeki",
    },
    {
        title: "Chatbot PDF",
        description: "A simple chatbot that retrieves data from PDF files stored on a Milvus vector database and mantain memory using CSBM. Built using Langchain and Streamlit.",
        github: "https://github.com/nicobrch/chatbot-pdf",
    },
    {
        title: "Student Evaluation Platform",
        description: "LabCall is a student evaluation platform that allows teachers to evaluate students with automated adaptative quizzes. Built using NextJS, Postgres, and Material-UI.",
        github: "https://github.com/nicobrch/labcall",
    },
    {
        title: "Ticket Management App",
        description: "A real-time ticket management application with team collaboration features. Built using NextJS, Postgres, and TailwindCSS.",
        github: "https://github.com/nicobrch/tics2",
    },
]