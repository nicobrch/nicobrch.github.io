"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronUp } from "lucide-react"

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      // if the user scrolls down, show the button
      window.scrollY > 500 ? setIsVisible(true) : setIsVisible(false)
    }
    // listen for scroll events
    window.addEventListener("scroll", toggleVisibility)

    // clear the listener on component unmount
    return () => {
      window.removeEventListener("scroll", toggleVisibility)
    }
  }, [])

  // handles the animation when scrolling to the top
  const scrollToTop = () => {
    isVisible &&
      window.scrollTo({
        top: 0,
        behavior: "auto",
      })
  }

  return (
    <Button
    variant="outline"
    size="icon"
    className={`fixed bottom-4 right-4 rounded-full p-2 transition-all duration-200 ${isVisible ? "opacity-100" : "opacity-0"}`}
    onClick={scrollToTop}
    >
      <ChevronUp className="h-[1.2rem] w-[1.2rem]"/>
      <span className="sr-only">Scroll to top</span>
    </Button>
  )
}

export default ScrollToTopButton