import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { ShotCard } from "./ShotCard";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

interface ShotsRowProps {
  sceneNumber: number;
  className?: string;
}

export const ShotsRow = ({ sceneNumber, className }: ShotsRowProps) => {
  return (
    <div className={cn("p-4 border-b border-white/10", className)}>
      <div className="mb-4">
        <h3 className="text-lg font-medium">Scene {sceneNumber}</h3>
      </div>
      <ScrollArea className="w-full whitespace-nowrap">
        <div className="flex space-x-6 pb-4 w-max">
          {[1, 2, 3, 4, 5].map((index) => (
            <ShotCard 
              key={`scene-${sceneNumber}-shot-${index}`} 
              shotNumber={index} 
            />
          ))}
          <Button 
            variant="outline" 
            className="bg-dark-card border-white/10 hover:bg-white/5 h-[450px] w-[300px] flex-shrink-0"
          >
            <Plus className="h-6 w-6 mr-2" />
            Add a shot
          </Button>
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
};