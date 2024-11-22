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
    <div className="h-screen text-white overflow-hidden relative">
      <GradientBackground />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
      
      <StoryboardHeader />
      
      <div className="h-[calc(100vh-64px)]">
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel defaultSize={20} minSize={15} maxSize={30}>
            <StoryboardSidebar />
          </ResizablePanel>

          <ResizableHandle withHandle />

          <ResizablePanel defaultSize={80}>
            <div className="h-full flex flex-col">
              <ScrollArea className="flex-1">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="min-h-full"
                >
                  {scenes.map((sceneNumber) => (
                    <ShotsRow 
                      key={`scene-${sceneNumber}`} 
                      sceneNumber={sceneNumber}
                    />
                  ))}
                  <div className="p-6 flex justify-center">
                    <Button 
                      variant="outline" 
                      className="bg-dark-card/30 backdrop-blur-sm border-white/10 hover:bg-white/5 px-8 py-4 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
                      onClick={addScene}
                    >
                      <Plus className="h-6 w-6 mr-2" />
                      Add a scene
                    </Button>
                  </div>
                </motion.div>
              </ScrollArea>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </div>
  );
};

export default Storyboard;