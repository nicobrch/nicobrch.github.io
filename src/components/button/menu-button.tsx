import Link from "next/link"
import { navItems } from "@/config/site"
import { Button } from "@/components/ui/button"
import { Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"

export default function MenuButton() {
  return (
    <Sheet>
      <SheetTrigger asChild>
      <Button variant="outline" size="icon">
        <Menu className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all"/>
        <span className="sr-only">Home</span>
      </Button>
      </SheetTrigger>
      <SheetContent side={"left"}>
        <SheetHeader className="mb-6">
          <SheetTitle>Navegación</SheetTitle>
        </SheetHeader>
        <div className="w-full flex flex-col justify-center items-start gap-2">
          {navItems.map((item) => (
            <Link key={item.title} href={item.url}>
              <Button variant="link" className="text-md">
                {item.title}
              </Button>
            </Link>
          ))}
        </div>
      </SheetContent>
    </Sheet>   
  )
}