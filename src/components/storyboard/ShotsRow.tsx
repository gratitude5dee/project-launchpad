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
      "p-6 border-b border-white/5 bg-gradient-to-r from-black/30 to-transparent backdrop-blur-sm relative group",
      "before:absolute before:inset-0 before:bg-gradient-to-r before:from-purple-500/5 before:to-purple-500/5 before:opacity-0 group-hover:before:opacity-100 before:transition-opacity before:duration-500",
      className
    )}>
      <div className="mb-6">
        <h3 className="text-xl font-medium bg-gradient-to-r from-amber-300 to-yellow-500 bg-clip-text text-transparent animate-golden-glow relative inline-block">
          Scene {sceneNumber}
          <div className="absolute inset-0 bg-[url('/noise.png')] mix-blend-overlay opacity-20" />
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
              <div className="flex space-x-6 pb-4 min-w-max">
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
                      damping: 25,
                      mass: 0.8
                    }}
                    className="will-change-transform"
                    style={{
                      touchAction: "none"
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
                  className="bg-black/30 border-white/10 hover:bg-white/5 h-[450px] w-[300px] flex-shrink-0 backdrop-blur-sm transition-all duration-300 hover:scale-105 group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Plus className="h-6 w-6 mr-2 group-hover:rotate-90 transition-transform duration-300" />
                  <span className="bg-gradient-to-r from-amber-300 to-yellow-500 bg-clip-text text-transparent animate-golden-glow">
                    Add a shot
                  </span>
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