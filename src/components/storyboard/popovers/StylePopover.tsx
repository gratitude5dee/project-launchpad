import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { FileCode, Upload } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const StylePopover = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="sm" className="text-white/70 hover:text-white hover:bg-white/5">
          <FileCode className="h-4 w-4 mr-2" />
          Style
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 bg-dark-modal border-white/10 p-4" align="start">
        <div className="space-y-4">
          <div>
            <h4 className="text-sm font-medium mb-2">VIDEO STYLE</h4>
            <div className="grid grid-cols-2 gap-2">
              <Button variant="outline" size="sm" className="bg-black/20 border-white/10 hover:bg-white/10">
                Standard
              </Button>
              <Button variant="outline" size="sm" className="bg-primary/10 border-primary">
                Cinematic
              </Button>
              <Button variant="outline" size="sm" className="bg-black/20 border-white/10 hover:bg-white/10">
                Film Noir
              </Button>
              <Button variant="outline" size="sm" className="bg-black/20 border-white/10 hover:bg-white/10">
                Anime
              </Button>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-2">STYLE REFERENCE</h4>
            <div className="border-2 border-dashed border-white/10 rounded-lg p-4 text-center hover:bg-white/5 transition-colors cursor-pointer">
              <Upload className="h-6 w-6 mx-auto mb-2 text-white/50" />
              <p className="text-sm text-white/70">Drag image here</p>
              <p className="text-xs text-white/50">or click here to upload a file</p>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-2">REFERENCE STRENGTH</h4>
            <Slider defaultValue={[50]} max={100} step={1} />
          </div>

          <div>
            <h4 className="text-sm font-medium mb-2">CINEMATIC INSPIRATION</h4>
            <Input 
              placeholder="E.g., 'Retro, gritty, eclectic, stylish, noir...'" 
              className="bg-black/20 border-0 focus-visible:ring-1 focus-visible:ring-primary"
            />
          </div>

          <div className="flex justify-end space-x-2 pt-2">
            <Button variant="ghost" size="sm" className="text-white/70 hover:bg-white/10">
              Cancel
            </Button>
            <Button size="sm">Apply</Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};