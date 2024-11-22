import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Settings, Undo, Redo, Play, Share } from "lucide-react";
import { StylePopover } from "./popovers/StylePopover";
import { CastPopover } from "./popovers/CastPopover";
import { SoundtrackPopover } from "./popovers/SoundtrackPopover";
import { VoiceoverPopover } from "./popovers/VoiceoverPopover";

export const StoryboardHeader = () => {
  return (
    <header className="border-b border-white/10 bg-dark sticky top-0 z-50">
      <div className="px-4">
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <span className="text-primary font-semibold">LTX Studio</span>
              <span className="px-2 py-0.5 text-xs bg-blue-500/20 text-blue-500 rounded">BETA</span>
            </div>
            <nav className="flex items-center space-x-1">
              <Button variant="ghost" size="sm" className="text-white/70 hover:text-white hover:bg-white/5">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Button>
              <StylePopover />
              <CastPopover />
              <SoundtrackPopover />
              <VoiceoverPopover />
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <Tabs defaultValue="storyboard" className="mr-4">
              <TabsList className="bg-white/5">
                <TabsTrigger value="storyboard" className="data-[state=active]:bg-white/10">
                  Storyboard
                </TabsTrigger>
                <TabsTrigger value="shot-editor" className="data-[state=active]:bg-white/10">
                  Shot Editor
                </TabsTrigger>
              </TabsList>
            </Tabs>

            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="icon" className="text-white/70 hover:text-white hover:bg-white/5">
                <Undo className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white/70 hover:text-white hover:bg-white/5">
                <Redo className="h-4 w-4" />
              </Button>
            </div>

            <div className="flex items-center space-x-2">
              <Button variant="ghost" className="text-primary hover:bg-primary/10">
                <Play className="h-4 w-4 mr-2" />
                Preview
              </Button>
              <Button variant="ghost" className="text-primary hover:bg-primary/10">
                <Share className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};