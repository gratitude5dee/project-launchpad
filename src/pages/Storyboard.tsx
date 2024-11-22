import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "@/components/ui/resizable";
import { StoryboardHeader } from "@/components/storyboard/StoryboardHeader";
import { StoryboardSidebar } from "@/components/storyboard/StoryboardSidebar";
import { ShotsRow } from "@/components/storyboard/ShotsRow";
import { GradientBackground } from "@/components/effects/GradientBackground";
import { Plus } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const Storyboard = () => {
  const [scenes, setScenes] = useState([1]);

  const addScene = () => {
    setScenes(prev => [...prev, prev.length + 1]);
  };

  return (
    <div className="h-screen bg-dark text-white overflow-hidden relative">
      <GradientBackground />
      <div className="relative z-10">
        <StoryboardHeader />
        
        <div className="h-[calc(100vh-64px)]">
          <ResizablePanelGroup direction="horizontal">
            <ResizablePanel defaultSize={20} minSize={15} maxSize={30}>
              <StoryboardSidebar />
            </ResizablePanel>

            <ResizableHandle withHandle className="bg-white/5 hover:bg-white/10 transition-colors" />

            <ResizablePanel defaultSize={80}>
              <motion.div 
                className="h-full flex flex-col"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <ScrollArea className="flex-1 px-4">
                  <div className="min-h-full space-y-2">
                    {scenes.map((sceneNumber) => (
                      <motion.div
                        key={`scene-${sceneNumber}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: sceneNumber * 0.1 }}
                      >
                        <ShotsRow sceneNumber={sceneNumber} />
                      </motion.div>
                    ))}
                    <motion.div 
                      className="p-6 flex justify-center"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      <Button 
                        variant="outline" 
                        className="bg-white/[0.03] backdrop-blur-sm border-white/10 hover:bg-white/[0.06] px-8 py-6 group"
                        onClick={addScene}
                      >
                        <Plus className="h-6 w-6 mr-2 group-hover:rotate-90 transition-transform duration-300" />
                        Add a scene
                      </Button>
                    </motion.div>
                  </div>
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