import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "@/components/ui/resizable";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useNavigate } from "react-router-dom";
import { Settings, Style, Cast, Music, Mic2, ArrowLeft, ArrowRight, Play } from "lucide-react";

const Storyboard = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-[#0A0F1C] text-white">
      {/* Top Navigation */}
      <nav className="border-b border-primary/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <button 
                onClick={() => navigate("/")}
                className="text-primary hover:text-primary/90 flex items-center space-x-2"
              >
                <span>LTX Studio</span>
                <span className="px-2 py-0.5 text-xs bg-blue-500/20 text-blue-500 rounded">BETA</span>
              </button>
              <div className="flex items-center space-x-4">
                <span className="text-gray-400">Echoes of the Past</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" className="bg-white/5 hover:bg-white/10">Storyboard</Button>
              <Button variant="outline" className="bg-transparent hover:bg-white/5">Shot Editor</Button>
              <Button variant="outline" className="border-primary/20 bg-transparent text-primary hover:bg-primary/10">
                Upgrade
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <ResizablePanelGroup direction="horizontal" className="min-h-[calc(100vh-4rem)]">
        {/* Left Sidebar */}
        <ResizablePanel defaultSize={20} minSize={15} maxSize={30} className="bg-[#0F1624] p-4">
          <div className="space-y-4">
            <div className="flex flex-col space-y-2">
              <h3 className="text-lg font-semibold">Return to Eldridge</h3>
              <p className="text-sm text-gray-400">Sarah Thompson returns to Eldridge, evoking nostalgia as she steps into her childhood town.</p>
            </div>

            <Collapsible>
              <CollapsibleTrigger className="flex items-center justify-between w-full p-2 hover:bg-white/5 rounded-md">
                <div className="flex items-center space-x-2">
                  <Settings size={16} />
                  <span>Location</span>
                </div>
                <ArrowRight size={16} />
              </CollapsibleTrigger>
              <CollapsibleContent className="p-2">
                <Input placeholder="Search locations..." className="bg-black/20" />
              </CollapsibleContent>
            </Collapsible>

            <Collapsible>
              <CollapsibleTrigger className="flex items-center justify-between w-full p-2 hover:bg-white/5 rounded-md">
                <div className="flex items-center space-x-2">
                  <Style size={16} />
                  <span>Style</span>
                </div>
                <ArrowRight size={16} />
              </CollapsibleTrigger>
              <CollapsibleContent className="p-2">
                <Input placeholder="Define style..." className="bg-black/20" />
              </CollapsibleContent>
            </Collapsible>

            <Collapsible>
              <CollapsibleTrigger className="flex items-center justify-between w-full p-2 hover:bg-white/5 rounded-md">
                <div className="flex items-center space-x-2">
                  <Cast size={16} />
                  <span>Clothing</span>
                </div>
                <ArrowRight size={16} />
              </CollapsibleTrigger>
              <CollapsibleContent className="p-2">
                <Input placeholder="Clothing style..." className="bg-black/20" />
              </CollapsibleContent>
            </Collapsible>

            <div className="pt-4 border-t border-white/10">
              <Label className="text-sm font-medium mb-2">Sound</Label>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 p-2 hover:bg-white/5 rounded-md cursor-pointer">
                  <Mic2 size={16} />
                  <span className="text-sm">Voiceover</span>
                </div>
                <div className="flex items-center space-x-2 p-2 hover:bg-white/5 rounded-md cursor-pointer">
                  <Music size={16} />
                  <span className="text-sm">Scene Sound</span>
                </div>
              </div>
            </div>
          </div>
        </ResizablePanel>

        <ResizableHandle withHandle />

        {/* Main Content Area */}
        <ResizablePanel defaultSize={80}>
          <div className="p-4">
            <Carousel className="w-full">
              <CarouselContent>
                {[1, 2, 3, 4, 5].map((index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <Card className="bg-[#1A1F2C] border-none p-4">
                      <div className="aspect-video bg-black/40 rounded-lg mb-4 relative">
                        <div className="absolute bottom-2 right-2">
                          <Button size="sm" variant="outline" className="bg-black/50 hover:bg-black/70">
                            Shot editor
                          </Button>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div>
                          <Label>PROMPT</Label>
                          <Input 
                            placeholder="A wide view of Eldridge, showcasing cobblestone streets..."
                            className="mt-1 bg-black/20"
                          />
                        </div>
                        <div>
                          <Label>SHOT TYPE</Label>
                          <Input 
                            placeholder="Establishing shot"
                            className="mt-1 bg-black/20"
                          />
                        </div>
                        <div>
                          <Label>CHARACTER DIALOGUE</Label>
                          <Input 
                            placeholder="Add the character's dialogue here"
                            className="mt-1 bg-black/20"
                          />
                        </div>
                        <div>
                          <Label>SOUND EFFECTS</Label>
                          <Input 
                            placeholder="E.g., 'Ocean waves...'"
                            className="mt-1 bg-black/20"
                          />
                        </div>
                      </div>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>

      {/* Footer */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#0A0F1C]/80 backdrop-blur-sm border-t border-white/10">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Button variant="outline" className="bg-transparent hover:bg-white/5">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back
          </Button>
          <Button className="bg-primary hover:bg-primary/90">
            <Play className="mr-2 h-4 w-4" /> Preview
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Storyboard;