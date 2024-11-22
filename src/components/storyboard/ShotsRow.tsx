import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { ShotCard } from "./ShotCard";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { DndContext, DragEndEvent, MouseSensor, TouchSensor, useSensor, useSensors } from "@dnd-kit/core";
import { SortableContext, horizontalListSortingStrategy } from "@dnd-kit/sortable";
import { useState } from "react";

interface ShotsRowProps {
  sceneNumber: number;
  className?: string;
}

export const ShotsRow = ({ sceneNumber, className }: ShotsRowProps) => {
  const [shots, setShots] = useState([1, 2, 3, 4, 5]);
  
  const sensors = useSensors(
    useSensor(MouseSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
    useSensor(TouchSensor, {
      activationConstraint: {
        delay: 200,
        tolerance: 8,
      },
    })
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    
    if (over && active.id !== over.id) {
      const oldIndex = shots.indexOf(Number(active.id));
      const newIndex = shots.indexOf(Number(over.id));
      
      const newShots = [...shots];
      newShots.splice(oldIndex, 1);
      newShots.splice(newIndex, 0, Number(active.id));
      
      setShots(newShots);
    }
  };

  return (
    <div className={cn("p-4 border-b border-white/10", className)}>
      <div className="mb-4">
        <h3 className="text-lg font-medium bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 animate-pulse">
          Scene {sceneNumber}
        </h3>
      </div>
      <ScrollArea className="w-full whitespace-nowrap rounded-md">
        <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
          <SortableContext items={shots} strategy={horizontalListSortingStrategy}>
            <div className="flex space-x-6 pb-4">
              {shots.map((index) => (
                <ShotCard 
                  key={`scene-${sceneNumber}-shot-${index}`} 
                  shotNumber={index} 
                  id={index}
                />
              ))}
              <Button 
                variant="outline" 
                className="bg-dark-card/50 border-white/10 hover:bg-white/5 h-[450px] w-[300px] flex-shrink-0 backdrop-blur-sm transition-all duration-300 hover:scale-105"
              >
                <Plus className="h-6 w-6 mr-2" />
                Add a shot
              </Button>
            </div>
          </SortableContext>
        </DndContext>
        <ScrollBar orientation="horizontal" className="h-3" />
      </ScrollArea>
    </div>
  );
};