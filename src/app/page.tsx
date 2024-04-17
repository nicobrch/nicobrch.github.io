import Image from "next/image";
import config from "../../next.config.mjs";

export default function Home() {
  const basePath = config.basePath || "";
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-16">
      <h1>Hola!</h1>
    </main>
  );
}
