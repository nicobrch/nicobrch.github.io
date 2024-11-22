import React from "react";
import {Card} from "@/components/ui/card";

export function GlowingCard({ children }: { children: React.ReactNode }) {
    return (
        <Card className="overflow-hidden bg-card/50 relative transition duration-300 hover:border-glow hover:shadow-glow">
            {children}
        </Card>
    )
}