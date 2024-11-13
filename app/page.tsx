import StarryBackground from "@/components/star-background";
import GradientBackground from "@/components/gradient-bg";
import SocialLinks from "@/components/social-links";
import HeroSection from "@/components/hero-section";
import FeaturedProjects from "@/components/featured-projects";

export default function Home() {
    return (
        <div className="min-h-screen relative overflow-hidden">
            <StarryBackground />
            <GradientBackground />

            <div className="container mx-auto px-4 py-8 relative">
                <SocialLinks />
                <HeroSection />
                <FeaturedProjects />
            </div>
        </div>
    )
}