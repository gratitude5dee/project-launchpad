import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Music, Play } from "lucide-react";

export const SoundtrackPopover = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="sm" className="text-white/70 hover:text-white hover:bg-white/5">
          <Music className="h-4 w-4 mr-2" />
          Soundtrack
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 bg-dark-modal border-white/10 p-4" align="start">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-medium">Soundtrack</h4>
            <Button size="sm" variant="ghost" className="text-primary hover:bg-primary/10">
              Upload
            </Button>
          </div>

          <div className="space-y-2">
            <Input 
              placeholder="Search sound..." 
              className="bg-black/20 border-0 focus-visible:ring-1 focus-visible:ring-primary"
            />
            <div className="p-2 hover:bg-white/5 rounded-lg cursor-pointer">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Play className="h-4 w-4" />
                  <span>mysterious, emotional, reflective</span>
                </div>
              </div>
            </div>
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