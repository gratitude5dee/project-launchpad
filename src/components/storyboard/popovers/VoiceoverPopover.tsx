import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Mic2, Play } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const VoiceoverPopover = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="sm" className="text-white/70 hover:text-white hover:bg-white/5">
          <Mic2 className="h-4 w-4 mr-2" />
          Voiceover
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 bg-dark-modal border-white/10 p-4" align="start">
        <div className="space-y-4">
          <Tabs defaultValue="narrator">
            <TabsList className="w-full bg-black/20">
              <TabsTrigger value="narrator" className="flex-1">Narrator</TabsTrigger>
              <TabsTrigger value="character" className="flex-1">Character</TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="space-y-2">
            <h4 className="text-sm font-medium mb-2">VOICE</h4>
            <div className="space-y-1">
              {["Antoni, well-rounded", "Nicole, whisper", "Josh, deep", "Harry, anxious", "Thomas, calm"].map((voice) => (
                <div key={voice} className="flex items-center justify-between p-2 hover:bg-white/5 rounded-lg cursor-pointer">
                  <span>{voice}</span>
                  <Play className="h-4 w-4" />
                </div>
              ))}
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