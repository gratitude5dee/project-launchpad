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
              <span className="text-lg font-bold tracking-tight bg-gradient-to-r from-amber-300 to-yellow-500 bg-clip-text text-transparent animate-golden-glow relative">
                WZRD.Studio
                <div className="absolute inset-0 bg-[url('/noise.png')] mix-blend-overlay opacity-20" />
              </span>
              <span className="px-2 py-0.5 text-[10px] font-medium bg-purple-500/20 text-purple-400 rounded-full">
                ALPHA
              </span>
            </div>
            <nav className="flex items-center space-x-1">
              <Button variant="ghost" size="sm" className="text-white/70 hover:text-white hover:bg-purple-500/10">
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
              <TabsList className="bg-dark-modal/50 backdrop-blur-xl">
                <TabsTrigger 
                  value="storyboard" 
                  className="data-[state=active]:bg-purple-500/20 data-[state=active]:text-purple-400"
                >
                  Storyboard
                </TabsTrigger>
                <TabsTrigger 
                  value="shot-editor" 
                  className="data-[state=active]:bg-purple-500/20 data-[state=active]:text-purple-400"
                >
                  Shot Editor
                </TabsTrigger>
              </TabsList>
            </Tabs>

            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="icon" className="text-white/70 hover:text-white hover:bg-purple-500/10">
                <Undo className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white/70 hover:text-white hover:bg-purple-500/10">
                <Redo className="h-4 w-4" />
              </Button>
            </div>

            <div className="flex items-center space-x-2">
              <Button 
                variant="ghost" 
                className="text-purple-400 hover:bg-purple-500/10 bg-purple-500/5"
              >
                <Play className="h-4 w-4 mr-2" />
                Preview
              </Button>
              <Button 
                variant="ghost" 
                className="text-purple-400 hover:bg-purple-500/10 bg-purple-500/5"
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