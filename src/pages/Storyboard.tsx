import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "@/components/ui/resizable";
import { StoryboardHeader } from "@/components/storyboard/StoryboardHeader";
import { StoryboardSidebar } from "@/components/storyboard/StoryboardSidebar";
import { ShotsRow } from "@/components/storyboard/ShotsRow";
import { GradientBackground } from "@/components/effects/GradientBackground";
import { Plus } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Storyboard = () => {
  const [scenes, setScenes] = useState([1]);

  const addScene = () => {
    setScenes(prev => [...prev, prev.length + 1]);
  };

  return (
    <div className="h-screen bg-dark text-white overflow-hidden relative">
      <GradientBackground />
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.015] pointer-events-none" />
      <div className="relative z-10">
        <StoryboardHeader />
        
        <div className="h-[calc(100vh-64px)]">
          <ResizablePanelGroup direction="horizontal">
            <ResizablePanel defaultSize={20} minSize={15} maxSize={30}>
              <StoryboardSidebar />
            </ResizablePanel>

            <ResizableHandle className="w-1.5 bg-white/5 hover:bg-white/10 transition-colors" />

            <ResizablePanel defaultSize={80}>
              <motion.div 
                className="h-full flex flex-col"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <ScrollArea className="flex-1 px-4">
                  <AnimatePresence mode="popLayout">
                    {scenes.map((sceneNumber) => (
                      <motion.div
                        key={`scene-${sceneNumber}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ 
                          type: "spring",
                          stiffness: 300,
                          damping: 25
                        }}
                      >
                        <ShotsRow sceneNumber={sceneNumber} />
                      </motion.div>
                    ))}
                  </AnimatePresence>
                  <motion.div 
                    className="p-6 flex justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <Button 
                      variant="outline" 
                      className="bg-white/[0.03] backdrop-blur-sm border-white/10 hover:bg-white/[0.06] px-8 py-6 group relative overflow-hidden"
                      onClick={addScene}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <Plus className="h-6 w-6 mr-2 group-hover:rotate-90 transition-transform duration-300" />
                      Add a scene
                    </Button>
                  </motion.div>
                </ScrollArea>
              </motion.div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </div>
      </div>
    </div>
  );
};

export default Storyboard;