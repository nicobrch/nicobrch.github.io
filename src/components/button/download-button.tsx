import { Button } from "@/components/ui/button"
import { FileText } from "lucide-react"

type DownloadButtonProps = {
  url: string;
}

export default function DownloadButton({url}: DownloadButtonProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Button variant="outline" className="gap-2">
        <p className="text-sm">Descargar</p>
        <FileText className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all"/>
        <span className="sr-only">Download</span>
      </Button>
    </a>    
  )
}