import { useState } from "react";
import { ChevronRight, Upload } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

interface LeftSidebarProps {
  activeTab: string;
}

export const LeftSidebar = ({ activeTab }: LeftSidebarProps) => {
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [isStyleOpen, setIsStyleOpen] = useState(false);
  const [isClothingOpen, setIsClothingOpen] = useState(false);
  const [isSoundOpen, setIsSoundOpen] = useState(false);

  return (
    <div className="w-80 border-r border-gray-800 bg-[#0F1624] p-6 space-y-6">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Return to Eldridge</h3>
        <p className="text-sm text-gray-400">
          Sarah Thompson returns to Eldridge, evoking nostalgia as she steps into her childhood town.
        </p>
      </div>

      <Collapsible open={isLocationOpen} onOpenChange={setIsLocationOpen}>
        <CollapsibleTrigger className="flex items-center justify-between w-full p-2 hover:bg-white/5 rounded-md">
          <div className="flex items-center space-x-2">
            <span>Location</span>
          </div>
          <ChevronRight className={`h-4 w-4 transition-transform ${isLocationOpen ? "rotate-90" : ""}`} />
        </CollapsibleTrigger>
        <CollapsibleContent className="p-2 space-y-4">
          <div>
            <Label>Search Location</Label>
            <Input placeholder="Type to search..." className="mt-1 bg-black/20" />
          </div>
          <div className="space-y-2">
            <Label>Reference Image</Label>
            <div className="border-2 border-dashed border-gray-700 rounded-lg p-4 text-center">
              <Upload className="mx-auto h-8 w-8 text-gray-400 mb-2" />
              <p className="text-sm text-gray-400">Drag and drop or click to upload</p>
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>

      <Collapsible open={isStyleOpen} onOpenChange={setIsStyleOpen}>
        <CollapsibleTrigger className="flex items-center justify-between w-full p-2 hover:bg-white/5 rounded-md">
          <div className="flex items-center space-x-2">
            <span>Style</span>
          </div>
          <ChevronRight className={`h-4 w-4 transition-transform ${isStyleOpen ? "rotate-90" : ""}`} />
        </CollapsibleTrigger>
        <CollapsibleContent className="p-2 space-y-4">
          <div className="grid grid-cols-2 gap-2">
            <Button variant="outline" className="bg-primary/10 border-primary">Standard</Button>
            <Button variant="outline" className="bg-transparent">Cinematic</Button>
            <Button variant="outline" className="bg-transparent">Film Noir</Button>
            <Button variant="outline" className="bg-transparent">Anime</Button>
          </div>
        </CollapsibleContent>
      </Collapsible>

      <Collapsible open={isClothingOpen} onOpenChange={setIsClothingOpen}>
        <CollapsibleTrigger className="flex items-center justify-between w-full p-2 hover:bg-white/5 rounded-md">
          <div className="flex items-center space-x-2">
            <span>Clothing</span>
          </div>
          <ChevronRight className={`h-4 w-4 transition-transform ${isClothingOpen ? "rotate-90" : ""}`} />
        </CollapsibleTrigger>
        <CollapsibleContent className="p-2">
          <Input placeholder="Describe clothing style..." className="bg-black/20" />
        </CollapsibleContent>
      </Collapsible>

      <Collapsible open={isSoundOpen} onOpenChange={setIsSoundOpen}>
        <CollapsibleTrigger className="flex items-center justify-between w-full p-2 hover:bg-white/5 rounded-md">
          <div className="flex items-center space-x-2">
            <span>Sound</span>
          </div>
          <ChevronRight className={`h-4 w-4 transition-transform ${isSoundOpen ? "rotate-90" : ""}`} />
        </CollapsibleTrigger>
        <CollapsibleContent className="p-2 space-y-4">
          <div>
            <Label>Voiceover</Label>
            <Input placeholder="Add voiceover text..." className="mt-1 bg-black/20" />
          </div>
          <div>
            <Label>Sound Effects</Label>
            <Input placeholder="E.g., 'Ocean waves...'" className="mt-1 bg-black/20" />
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};