import Link from "next/link"
import { Menu } from "lucide-react"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import ThemeButton from "@/components/theme-button"

export default function Navbar() {
  return (
    <div className="h-14 bg-neutral-50 dark:bg-neutral-950 flex items-center justify-between px-4 md:px-8 border-b border-neutral-200 dark:border-neutral-800">
      <Link href="/">
        <Button variant="outline" size="icon">
          <Menu className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all"/>
          <span className="sr-only">Home</span>
        </Button>
      </Link>
      <div className="flex gap-2 items-center">
        <Link href="https://github.com/nicobrch/">
          <Avatar className="border h-8 w-8">
            <AvatarImage alt="@nicobrch" src="https://github.com/nicobrch.png" />
            <AvatarFallback>NC</AvatarFallback>
          </Avatar>
        </Link>
        <ThemeButton/>
      </div>
    </div>
  )
}