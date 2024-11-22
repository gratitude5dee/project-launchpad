import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { ShotCard } from "./ShotCard";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { DndContext, DragEndEvent, MouseSensor, TouchSensor, useSensor, useSensors, closestCenter } from "@dnd-kit/core";
import { SortableContext, horizontalListSortingStrategy, arrayMove } from "@dnd-kit/sortable";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

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
      setShots(arrayMove(shots, oldIndex, newIndex));
    }
  };

  return (
    <div className={cn(
      "p-6 border-b border-white/5 bg-gradient-to-r from-white/[0.03] to-transparent backdrop-blur-sm relative",
      "before:absolute before:inset-0 before:bg-gradient-to-r before:from-blue-500/5 before:to-purple-500/5 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500",
      className
    )}>
      <div className="mb-6">
        <h3 className="text-xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 relative inline-block">
          Scene {sceneNumber}
          <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-xl" />
        </h3>
      </div>
      <ScrollArea className="w-full rounded-lg bg-black/20 backdrop-blur-md p-4">
        <DndContext 
          sensors={sensors} 
          onDragEnd={handleDragEnd}
          collisionDetection={closestCenter}
        >
          <SortableContext items={shots} strategy={horizontalListSortingStrategy}>
            <AnimatePresence mode="popLayout">
              <div className="flex space-x-6 pb-4">
                {shots.map((index) => (
                  <motion.div
                    key={`scene-${sceneNumber}-shot-${index}`}
                    layout
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 25
                    }}
                  >
                    <ShotCard 
                      shotNumber={index} 
                      id={index}
                    />
                  </motion.div>
                ))}
                <Button 
                  variant="outline" 
                  className="bg-dark-card/50 border-white/10 hover:bg-white/5 h-[450px] w-[300px] flex-shrink-0 backdrop-blur-sm transition-all duration-300 hover:scale-105 group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Plus className="h-6 w-6 mr-2 group-hover:rotate-90 transition-transform duration-300" />
                  Add a shot
                </Button>
              </div>
            </AnimatePresence>
          </SortableContext>
        </DndContext>
        <ScrollBar orientation="horizontal" className="h-2.5 bg-white/5" />
      </ScrollArea>
    </div>
  );
};