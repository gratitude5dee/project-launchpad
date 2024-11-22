import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mic, Play, Image as ImageIcon, Plus, RefreshCw, Paintbrush } from "lucide-react";
import { CanvasDrawer } from "./CanvasDrawer";

interface ShotCardProps {
  shotNumber: number;
}

export const ShotCard = ({ shotNumber }: ShotCardProps) => {
  const [isCanvasOpen, setIsCanvasOpen] = useState(false);

  return (
    <>
      <Card className="bg-dark-lighter border-none p-4 hover:bg-dark-card transition-colors duration-200">
        <div className="flex gap-6">
          <div className="w-[300px] flex-shrink-0">
            <div className="aspect-video bg-black/40 rounded-lg mb-4 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              <div className="absolute top-2 left-2">
                <span className="text-sm text-white/70">#{shotNumber}</span>
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="bg-black/50 hover:bg-black/70 mr-2"
                  onClick={() => setIsCanvasOpen(true)}
                >
                  <Paintbrush className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="bg-black/50 hover:bg-black/70 mr-2">
                  <ImageIcon className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="bg-black/50 hover:bg-black/70 mr-2">
                  <Play className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="bg-black/50 hover:bg-black/70">
                  <RefreshCw className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="space-y-2">
              <Label className="text-xs text-white/70">SHOT TYPE</Label>
              <Select>
                <SelectTrigger className="bg-black/20 border-0 focus:ring-1 focus:ring-primary">
                  <SelectValue placeholder="Select shot type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="close-up">Close-up</SelectItem>
                  <SelectItem value="medium">Medium Shot</SelectItem>
                  <SelectItem value="wide">Wide Shot</SelectItem>
                  <SelectItem value="pov">Point of View</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex-1 space-y-4">
            <div>
              <Label className="text-xs text-white/70">PROMPT</Label>
              <Input 
                placeholder="Describe your shot..."
                className="bg-black/20 border-0 focus-visible:ring-1 focus-visible:ring-primary"
              />
            </div>

            <div>
              <Label className="text-xs text-white/70">CHARACTER DIALOGUE</Label>
              <div className="relative">
                <Input 
                  placeholder="Add character dialogue..."
                  className="bg-black/20 border-0 focus-visible:ring-1 focus-visible:ring-primary pr-10"
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
                  placeholder="E.g., 'Ocean waves...'"
                  className="bg-black/20 border-0 focus-visible:ring-1 focus-visible:ring-primary pr-10"
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
        </div>
      </Card>

      <CanvasDrawer 
        open={isCanvasOpen}
        onClose={() => setIsCanvasOpen(false)}
      />
    </>
  );
};