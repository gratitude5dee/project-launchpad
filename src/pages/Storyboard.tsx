import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "@/components/ui/resizable";
import { StoryboardHeader } from "@/components/storyboard/StoryboardHeader";
import { StoryboardSidebar } from "@/components/storyboard/StoryboardSidebar";
import { ShotsRow } from "@/components/storyboard/ShotsRow";
import { Plus } from "lucide-react";
import { useState } from "react";

const Storyboard = () => {
  const [scenes, setScenes] = useState([1]);

  const addScene = () => {
    setScenes(prev => [...prev, prev.length + 1]);
  };

  return (
    <div className="h-screen bg-dark text-white overflow-hidden">
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
                <div className="min-h-full w-full">
                  {scenes.map((sceneNumber) => (
                    <ShotsRow 
                      key={`scene-${sceneNumber}`} 
                      sceneNumber={sceneNumber}
                      className="min-w-max"
                    />
                  ))}
                  <div className="p-6 flex justify-center">
                    <Button 
                      variant="outline" 
                      className="bg-dark-card border-white/10 hover:bg-white/5 px-8 py-4"
                      onClick={addScene}
                    >
                      <Plus className="h-6 w-6 mr-2" />
                      Add a scene
                    </Button>
                  </div>
                </div>
              </ScrollArea>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </div>
  );
};

export default Storyboard;