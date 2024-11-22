import { useState } from "react";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle } from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { ArrowLeft, Undo, Redo, PaintBucket, Eraser } from "lucide-react";

interface CanvasDrawerProps {
  open: boolean;
  onClose: () => void;
}

export const CanvasDrawer = ({ open, onClose }: CanvasDrawerProps) => {
  const [strength, setStrength] = useState([50]);

  return (
    <Drawer open={open} onClose={onClose}>
      <DrawerContent className="bg-dark-modal border-t border-white/10">
        <div className="container max-w-5xl">
          <DrawerHeader className="px-0">
            <div className="flex items-center justify-between mb-6">
              <Button variant="ghost" size="icon" onClick={onClose} className="hover:bg-white/5">
                <ArrowLeft className="h-4 w-4" />
              </Button>
              <DrawerTitle className="text-lg font-medium">Canvas</DrawerTitle>
              <Button variant="ghost" size="icon" className="hover:bg-white/5">
                <Undo className="h-4 w-4" />
              </Button>
            </div>
          </DrawerHeader>

          <div className="space-y-6 pb-6">
            <div className="aspect-video bg-black/40 rounded-lg relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-white/50">START SCRIBBLE ON THE CANVAS</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex-1">
                <label className="text-xs text-white/70 mb-2 block">STRENGTH</label>
                <Slider
                  value={strength}
                  onValueChange={setStrength}
                  max={100}
                  step={1}
                  className="[&_[role=slider]]:bg-primary"
                />
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="icon" className="bg-dark-card border-white/10 hover:bg-white/5">
                  <PaintBucket className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="bg-dark-card border-white/10 hover:bg-white/5">
                  <Eraser className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="relative">
              <input
                type="text"
                placeholder="A woman in glowing neon clothing, watching the sunset over a futuristic cityscape..."
                className="w-full bg-dark-card border-0 rounded-lg py-3 pl-4 pr-20 text-sm focus:ring-1 focus:ring-primary"
              />
              <Button className="absolute right-1 top-1/2 -translate-y-1/2 text-xs h-8">
                Generate
              </Button>
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};