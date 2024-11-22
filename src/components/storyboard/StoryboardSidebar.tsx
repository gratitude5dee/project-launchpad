import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Settings, FileCode, Music, Mic2 } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

export const StoryboardSidebar = () => {
  return (
    <div className="h-full bg-[#0F1624] p-4 space-y-6">
      <div className="space-y-4">
        <div>
          <h2 className="text-lg font-semibold">Return to Eldridge</h2>
          <p className="text-sm text-gray-400">
            Sarah Thompson returns to Eldridge, evoking nostalgia as she steps into her childhood town.
          </p>
        </div>

        <Collapsible>
          <CollapsibleTrigger className="flex items-center justify-between w-full p-2 hover:bg-white/5 rounded-md">
            <div className="flex items-center space-x-2">
              <Settings size={16} />
              <span>Location</span>
            </div>
          </CollapsibleTrigger>
          <CollapsibleContent className="p-2">
            <Input placeholder="Search locations..." className="bg-black/20" />
          </CollapsibleContent>
        </Collapsible>

        <Collapsible>
          <CollapsibleTrigger className="flex items-center justify-between w-full p-2 hover:bg-white/5 rounded-md">
            <div className="flex items-center space-x-2">
              <FileCode size={16} />
              <span>Style</span>
            </div>
          </CollapsibleTrigger>
          <CollapsibleContent className="p-2">
            <Input placeholder="Define style..." className="bg-black/20" />
          </CollapsibleContent>
        </Collapsible>

        <div className="pt-4 border-t border-white/10">
          <Label className="text-sm font-medium mb-2">Sound</Label>
          <div className="space-y-2">
            <div className="flex items-center space-x-2 p-2 hover:bg-white/5 rounded-md cursor-pointer">
              <Mic2 size={16} />
              <span className="text-sm">Voiceover</span>
            </div>
            <div className="flex items-center space-x-2 p-2 hover:bg-white/5 rounded-md cursor-pointer">
              <Music size={16} />
              <span className="text-sm">Scene Sound</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};