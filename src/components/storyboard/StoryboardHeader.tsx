import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Settings, Undo, Redo, Play, Share } from "lucide-react";
import { StylePopover } from "./popovers/StylePopover";
import { CastPopover } from "./popovers/CastPopover";
import { SoundtrackPopover } from "./popovers/SoundtrackPopover";
import { VoiceoverPopover } from "./popovers/VoiceoverPopover";
import { motion } from "framer-motion";

export const StoryboardHeader = () => {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="border-b border-white/10 bg-dark-lighter backdrop-blur-sm sticky top-0 z-50"
    >
      <div className="px-4">
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <span className="text-primary font-semibold bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                LTX Studio
              </span>
              <span className="px-2 py-0.5 text-xs bg-primary/20 text-primary rounded-full">BETA</span>
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
              <TabsList className="bg-dark-modal">
                <TabsTrigger 
                  value="storyboard" 
                  className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary"
                >
                  Storyboard
                </TabsTrigger>
                <TabsTrigger 
                  value="shot-editor" 
                  className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary"
                >
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
              <Button 
                variant="ghost" 
                className="text-primary hover:bg-primary/10 bg-primary/5"
              >
                <Play className="h-4 w-4 mr-2" />
                Preview
              </Button>
              <Button 
                variant="ghost" 
                className="text-primary hover:bg-primary/10 bg-primary/5"
              >
                <Share className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
};