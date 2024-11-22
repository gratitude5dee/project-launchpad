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
      className="border-b border-white/10 bg-dark-lighter/80 backdrop-blur-xl sticky top-0 z-50"
    >
      <div className="px-6">
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-3">
              <span className="text-xl font-cinzel font-bold tracking-wider golden-text">
                WZRD.Studio
                <div className="noise-overlay" />
              </span>
              <span className="px-2 py-0.5 text-[10px] font-medium bg-primary/20 text-primary rounded-full">
                ALPHA
              </span>
            </div>
            <nav className="flex items-center space-x-1">
              <Button variant="ghost" size="sm" className="btn-mystical">
                <Settings className="h-4 w-4" />
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
              <TabsList className="bg-dark-modal/50 backdrop-blur-xl border border-white/10">
                <TabsTrigger 
                  value="storyboard" 
                  className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary font-cinzel"
                >
                  Storyboard
                </TabsTrigger>
                <TabsTrigger 
                  value="shot-editor" 
                  className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary font-cinzel"
                >
                  Shot Editor
                </TabsTrigger>
              </TabsList>
            </Tabs>

            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="icon" className="btn-mystical p-2">
                <Undo className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="btn-mystical p-2">
                <Redo className="h-4 w-4" />
              </Button>
            </div>

            <div className="flex items-center space-x-2">
              <Button 
                variant="ghost" 
                className="btn-mystical text-primary"
              >
                <Play className="h-4 w-4" />
                Preview
              </Button>
              <Button 
                variant="ghost" 
                className="btn-mystical text-primary"
              >
                <Share className="h-4 w-4" />
                Share
              </Button>
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
};