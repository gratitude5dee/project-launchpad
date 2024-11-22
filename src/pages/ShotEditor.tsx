import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Camera, Download, Share2, Undo2, Redo2, Play, Mic, Settings2 } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const ShotEditor = () => {
  const [selectedTab, setSelectedTab] = useState("frame");
  const [expressiveness, setExpressiveness] = useState("medium");

  return (
    <div className="h-screen bg-dark text-white overflow-hidden relative">
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.015] pointer-events-none" />
      
      {/* Header */}
      <header className="border-b border-white/10 bg-dark-lighter/80 backdrop-blur-xl sticky top-0 z-50 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <span className="text-xl font-cinzel font-bold tracking-wider golden-text">
              LTX Studio
              <span className="ml-2 px-2 py-0.5 text-[10px] font-medium bg-primary/20 text-primary rounded-full">
                BETA
              </span>
            </span>
            
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="btn-mystical">
                <Settings2 className="h-4 w-4 mr-2" />
                Settings
              </Button>
              <Button variant="ghost" size="sm" className="btn-mystical">
                <Camera className="h-4 w-4 mr-2" />
                Style
              </Button>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Tabs value={selectedTab} onValueChange={setSelectedTab} className="mr-4">
              <TabsList className="bg-dark-modal/50 backdrop-blur-xl border border-white/10">
                <TabsTrigger value="storyboard" className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary font-cinzel">
                  Storyboard
                </TabsTrigger>
                <TabsTrigger value="shot-editor" className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary font-cinzel">
                  Shot Editor
                </TabsTrigger>
              </TabsList>
            </Tabs>

            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="icon" className="btn-mystical p-2">
                <Undo2 className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="btn-mystical p-2">
                <Redo2 className="h-4 w-4" />
              </Button>
            </div>

            <div className="flex items-center space-x-2">
              <Button variant="ghost" className="btn-mystical text-primary">
                <Play className="h-4 w-4 mr-2" />
                Preview
              </Button>
              <Button variant="ghost" className="btn-mystical text-primary">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-[320px_1fr] h-[calc(100vh-73px)]">
        {/* Left Sidebar */}
        <div className="border-r border-white/10 bg-dark-lighter/30 backdrop-blur-sm p-4">
          <ScrollArea className="h-full">
            <div className="space-y-6">
              {/* Frame Section */}
              <div className="space-y-4">
                <h3 className="text-sm font-cinzel text-glow">Frame</h3>
                <div className="flex space-x-2">
                  <Button variant="outline" className="flex-1 bg-dark-card/30 border-white/10 hover:bg-white/5">
                    Prompt
                  </Button>
                  <Button variant="outline" className="flex-1 bg-dark-card/30 border-white/10 hover:bg-white/5">
                    Upload
                  </Button>
                  <Button variant="outline" className="flex-1 bg-dark-card/30 border-white/10 hover:bg-white/5">
                    Canvas
                  </Button>
                </div>
              </div>

              {/* Shot Type */}
              <div className="space-y-4">
                <h3 className="text-sm font-cinzel text-glow">Shot Type</h3>
                <Select>
                  <SelectTrigger className="mystical-input">
                    <SelectValue placeholder="Close-up" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="close-up">Close-up</SelectItem>
                    <SelectItem value="medium">Medium Shot</SelectItem>
                    <SelectItem value="wide">Wide Shot</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Motion */}
              <div className="space-y-4">
                <h3 className="text-sm font-cinzel text-glow">Motion</h3>
                <div className="flex space-x-2">
                  <Button variant="outline" className="flex-1 bg-dark-card/30 border-white/10 hover:bg-white/5">
                    Frame
                  </Button>
                  <Button variant="outline" className="flex-1 bg-dark-card/30 border-white/10 hover:bg-white/5">
                    Character
                  </Button>
                </div>
              </div>

              {/* Character Dialogue */}
              <div className="space-y-4">
                <h3 className="text-sm font-cinzel text-glow">Character Dialogue</h3>
                <div className="relative">
                  <Input 
                    placeholder="Add the character's dialogue here"
                    className="mystical-input pr-10"
                  />
                  <Button 
                    size="icon" 
                    variant="ghost" 
                    className="absolute right-1 top-1/2 -translate-y-1/2 hover:bg-white/10"
                  >
                    <Mic className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-white/50">0 / 500</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-white/50">Enable Lip Sync</span>
                    <Switch />
                  </div>
                </div>
              </div>

              {/* Expressiveness */}
              <div className="space-y-4">
                <h3 className="text-sm font-cinzel text-glow">Expressiveness</h3>
                <div className="flex space-x-2">
                  {["Low", "Medium", "High"].map((level) => (
                    <Button
                      key={level}
                      variant="outline"
                      className={`flex-1 bg-dark-card/30 border-white/10 hover:bg-white/5 ${
                        expressiveness === level.toLowerCase() ? "bg-primary/20 border-primary/50" : ""
                      }`}
                      onClick={() => setExpressiveness(level.toLowerCase())}
                    >
                      {level}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Generate Video Button */}
              <Button className="w-full bg-primary hover:bg-primary/90 text-white font-cinzel">
                Generate Video
              </Button>
            </div>
          </ScrollArea>
        </div>

        {/* Main Content Area */}
        <div className="bg-dark p-6">
          <div className="aspect-video bg-black/40 rounded-lg relative overflow-hidden">
            {/* Preview content would go here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShotEditor;