import { ScrollArea } from "@/components/ui/scroll-area";
import { ShotCard } from "./ShotCard";
import { cn } from "@/lib/utils";

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
      <ScrollArea className="w-full" orientation="horizontal">
        <div className="flex space-x-6 pb-4">
          {[1, 2, 3, 4, 5].map((index) => (
            <ShotCard 
              key={`scene-${sceneNumber}-shot-${index}`} 
              shotNumber={index} 
            />
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};