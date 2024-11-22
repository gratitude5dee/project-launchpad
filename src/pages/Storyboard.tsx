import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "@/components/ui/resizable";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Settings, FileCode, Undo, Redo, Play, Share } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { StoryboardSidebar } from "@/components/storyboard/StoryboardSidebar";
import { StoryboardHeader } from "@/components/storyboard/StoryboardHeader";
import { ShotCard } from "@/components/storyboard/ShotCard";

const Storyboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0A0F1C] text-white">
      <StoryboardHeader />
      
      <div className="flex h-[calc(100vh-64px)]">
        <ResizablePanelGroup direction="horizontal">
          {/* Left Sidebar */}
          <ResizablePanel defaultSize={20} minSize={15} maxSize={30}>
            <StoryboardSidebar />
          </ResizablePanel>

          <ResizableHandle withHandle />

          {/* Main Content */}
          <ResizablePanel defaultSize={80}>
            <ScrollArea className="h-full">
              <div className="p-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[1, 2, 3, 4, 5].map((index) => (
                    <ShotCard key={index} shotNumber={index} />
                  ))}
                </div>
              </div>
            </ScrollArea>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </div>
  );
};

export default Storyboard;