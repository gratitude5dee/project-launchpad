import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "@/components/ui/resizable";
import { StoryboardHeader } from "@/components/storyboard/StoryboardHeader";
import { StoryboardSidebar } from "@/components/storyboard/StoryboardSidebar";
import { ShotCard } from "@/components/storyboard/ShotCard";

const Storyboard = () => {
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
              <div className="flex-1 overflow-hidden">
                <ScrollArea className="h-full">
                  <div className="p-6">
                    <div className="grid grid-cols-1 gap-6 auto-rows-min">
                      {[1, 2, 3, 4, 5].map((index) => (
                        <ShotCard key={index} shotNumber={index} />
                      ))}
                    </div>
                  </div>
                </ScrollArea>
              </div>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </div>
  );
};

export default Storyboard;