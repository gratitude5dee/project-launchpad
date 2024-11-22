import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Settings, FileCode, Music, Mic2, Upload } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

export const StoryboardSidebar = () => {
  return (
    <div className="h-full bg-dark p-4 space-y-6 border-r border-white/10 overflow-y-auto">
      <div className="space-y-4">
        <div>
          <h2 className="text-lg font-semibold">Return to Eldridge</h2>
          <p className="text-sm text-gray-400">
            Sarah Thompson returns to Eldridge, evoking nostalgia as she steps into her childhood town.
          </p>
        </div>

        <Collapsible defaultOpen>
          <CollapsibleTrigger className="flex items-center justify-between w-full p-2 hover:bg-white/5 rounded-md transition-colors">
            <div className="flex items-center space-x-2">
              <Settings size={16} />
              <span>Location</span>
            </div>
          </CollapsibleTrigger>
          <CollapsibleContent className="p-2 space-y-4">
            <div>
              <Label className="text-xs text-white/70">DESCRIPTION</Label>
              <Input 
                placeholder="Describe the location..."
                className="bg-black/20 border-0 focus-visible:ring-1 focus-visible:ring-primary mt-2"
              />
            </div>
            <div>
              <Label className="text-xs text-white/70">LIGHTING</Label>
              <Input 
                placeholder="Describe the lighting..."
                className="bg-black/20 border-0 focus-visible:ring-1 focus-visible:ring-primary mt-2"
              />
            </div>
            <div>
              <Label className="text-xs text-white/70">WEATHER</Label>
              <Input 
                placeholder="Describe the weather..."
                className="bg-black/20 border-0 focus-visible:ring-1 focus-visible:ring-primary mt-2"
              />
            </div>
          </CollapsibleContent>
        </Collapsible>

        <Collapsible>
          <CollapsibleTrigger className="flex items-center justify-between w-full p-2 hover:bg-white/5 rounded-md transition-colors">
            <div className="flex items-center space-x-2">
              <FileCode size={16} />
              <span>Style</span>
            </div>
          </CollapsibleTrigger>
          <CollapsibleContent className="p-2 space-y-4">
            <div>
              <Label className="text-xs text-white/70">VIDEO STYLE</Label>
              <div className="grid grid-cols-2 gap-2 mt-2">
                <Button variant="outline" size="sm" className="bg-black/20 border-white/10 hover:bg-white/10">
                  Standard
                </Button>
                <Button variant="outline" size="sm" className="bg-black/20 border-white/10 hover:bg-white/10">
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
              <Label className="text-xs text-white/70">STYLE REFERENCE</Label>
              <div className="mt-2 border-2 border-dashed border-white/10 rounded-lg p-4 text-center hover:bg-white/5 transition-colors cursor-pointer">
                <Upload className="h-6 w-6 mx-auto mb-2 text-white/50" />
                <p className="text-sm text-white/70">Drag image here</p>
                <p className="text-xs text-white/50">or click here to upload a file</p>
              </div>
            </div>
            <div>
              <Label className="text-xs text-white/70">REFERENCE STRENGTH</Label>
              <Slider 
                defaultValue={[50]} 
                max={100} 
                step={1}
                className="mt-2"
              />
            </div>
          </CollapsibleContent>
        </Collapsible>

        <div className="pt-4 border-t border-white/10">
          <Label className="text-sm font-medium mb-2">Sound</Label>
          <div className="space-y-2">
            <div className="flex items-center justify-between p-2 hover:bg-white/5 rounded-md transition-colors">
              <div className="flex items-center space-x-2">
                <Mic2 size={16} />
                <span className="text-sm">Voiceover</span>
              </div>
              <Switch />
            </div>
            <div className="flex items-center justify-between p-2 hover:bg-white/5 rounded-md transition-colors">
              <div className="flex items-center space-x-2">
                <Music size={16} />
                <span className="text-sm">Scene Sound</span>
              </div>
              <Switch />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};