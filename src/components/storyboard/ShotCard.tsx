import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mic, Play, Image as ImageIcon, Plus, RefreshCw, Paintbrush, GripHorizontal } from "lucide-react";
import { CanvasDrawer } from "./CanvasDrawer";
import { motion } from "framer-motion";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

interface ShotCardProps {
  shotNumber: number;
  id: number;
}

export const ShotCard = ({ shotNumber, id }: ShotCardProps) => {
  const [isCanvasOpen, setIsCanvasOpen] = useState(false);
  
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: isDragging ? 1 : 0,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <>
      <motion.div
        ref={setNodeRef}
        style={style}
        whileHover={{ scale: isDragging ? 1 : 1.02, rotateY: isDragging ? 0 : 5 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="relative"
      >
        <Card className="bg-white/5 backdrop-blur-lg border-white/20 p-4 hover:bg-white/10 transition-all duration-300 w-[300px] flex-shrink-0 shadow-xl hover:shadow-2xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2 cursor-grab active:cursor-grabbing z-50 hover:bg-white/10"
            {...attributes}
            {...listeners}
          >
            <GripHorizontal className="h-4 w-4 text-white/50" />
          </Button>

          <div className="space-y-4 relative z-10">
            <div className="aspect-video bg-black/40 rounded-lg relative overflow-hidden group/image">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-200" />
              <div className="absolute top-2 left-2">
                <span className="text-sm text-white/70 font-medium bg-black/30 px-2 py-1 rounded-full backdrop-blur-sm">
                  #{shotNumber}
                </span>
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/image:opacity-100 transition-opacity duration-200 gap-2">
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20"
                  onClick={() => setIsCanvasOpen(true)}
                >
                  <Paintbrush className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20">
                  <ImageIcon className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20">
                  <Play className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20">
                  <RefreshCw className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div>
              <Label className="text-xs text-white/70">SHOT TYPE</Label>
              <Select>
                <SelectTrigger className="bg-white/5 backdrop-blur-sm border-white/10 focus:ring-1 focus:ring-white/20 mt-2">
                  <SelectValue placeholder="Select shot type" />
                </SelectTrigger>
                <SelectContent className="bg-white/10 backdrop-blur-lg border-white/20">
                  <SelectItem value="close-up">Close-up</SelectItem>
                  <SelectItem value="medium">Medium Shot</SelectItem>
                  <SelectItem value="wide">Wide Shot</SelectItem>
                  <SelectItem value="pov">Point of View</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label className="text-xs text-white/70">PROMPT</Label>
              <Input 
                placeholder="Describe your shot..."
                className="bg-white/5 backdrop-blur-sm border-white/10 focus-visible:ring-1 focus-visible:ring-white/20 mt-2"
              />
            </div>

            <div>
              <Label className="text-xs text-white/70">CHARACTER DIALOGUE</Label>
              <div className="relative">
                <Input 
                  placeholder="Add character dialogue..."
                  className="bg-white/5 backdrop-blur-sm border-white/10 focus-visible:ring-1 focus-visible:ring-white/20 pr-10 mt-2"
                />
                <Button 
                  size="icon" 
                  variant="ghost" 
                  className="absolute right-1 top-1/2 -translate-y-1/2 hover:bg-white/10"
                >
                  <Mic className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div>
              <Label className="text-xs text-white/70">SOUND EFFECTS</Label>
              <div className="relative">
                <Input 
                  placeholder='E.g., "Ocean waves..."'
                  className="bg-white/5 backdrop-blur-sm border-white/10 focus-visible:ring-1 focus-visible:ring-white/20 pr-10 mt-2"
                />
                <Button 
                  size="icon" 
                  variant="ghost" 
                  className="absolute right-1 top-1/2 -translate-y-1/2 hover:bg-white/10"
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </motion.div>

      <CanvasDrawer 
        open={isCanvasOpen}
        onClose={() => setIsCanvasOpen(false)}
      />
    </>
  );
};