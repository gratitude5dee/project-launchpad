import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mic, Play, Image as ImageIcon, Plus, RefreshCw, Paintbrush } from "lucide-react";
import { CanvasDrawer } from "./CanvasDrawer";
import { motion } from "framer-motion";

interface ShotCardProps {
  shotNumber: number;
}

export const ShotCard = ({ shotNumber }: ShotCardProps) => {
  const [isCanvasOpen, setIsCanvasOpen] = useState(false);

  return (
    <>
      <motion.div
        whileHover={{ 
          scale: 1.02,
          rotateY: 5,
          z: 50
        }}
        transition={{ 
          type: "spring",
          stiffness: 300,
          damping: 20
        }}
        className="perspective-1000"
      >
        <Card className="bg-dark-lighter/30 backdrop-blur-xl border border-white/10 shadow-xl p-4 hover:shadow-primary/20 hover:border-primary/30 transition-all duration-300 w-[300px] flex-shrink-0">
          <div className="space-y-4">
            <div className="aspect-video bg-black/40 rounded-lg relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              <div className="absolute top-2 left-2">
                <span className="text-sm font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400 animate-pulse">
                  #{shotNumber}
                </span>
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="bg-black/50 hover:bg-black/70 mr-2 backdrop-blur-sm border border-white/20"
                  onClick={() => setIsCanvasOpen(true)}
                >
                  <Paintbrush className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="bg-black/50 hover:bg-black/70 mr-2 backdrop-blur-sm border border-white/20">
                  <ImageIcon className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="bg-black/50 hover:bg-black/70 mr-2 backdrop-blur-sm border border-white/20">
                  <Play className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="bg-black/50 hover:bg-black/70 backdrop-blur-sm border border-white/20">
                  <RefreshCw className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div>
              <Label className="text-xs text-white/70">SHOT TYPE</Label>
              <Select>
                <SelectTrigger className="bg-black/20 border-white/10 focus:ring-1 focus:ring-primary mt-2 backdrop-blur-sm">
                  <SelectValue placeholder="Select shot type" />
                </SelectTrigger>
                <SelectContent className="bg-dark-modal/80 backdrop-blur-xl border-white/10">
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
                className="bg-black/20 border-white/10 focus-visible:ring-1 focus-visible:ring-primary mt-2 backdrop-blur-sm"
              />
            </div>

            <div>
              <Label className="text-xs text-white/70">CHARACTER DIALOGUE</Label>
              <div className="relative">
                <Input 
                  placeholder="Add character dialogue..."
                  className="bg-black/20 border-white/10 focus-visible:ring-1 focus-visible:ring-primary pr-10 mt-2 backdrop-blur-sm"
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
                  className="bg-black/20 border-white/10 focus-visible:ring-1 focus-visible:ring-primary pr-10 mt-2 backdrop-blur-sm"
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