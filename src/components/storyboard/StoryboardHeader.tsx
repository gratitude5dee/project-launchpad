import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Undo, Redo, Play, Share } from "lucide-react";

export const StoryboardHeader = () => {
  return (
    <header className="border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <span className="text-primary font-semibold">LTX Studio</span>
              <span className="px-2 py-0.5 text-xs bg-blue-500/20 text-blue-500 rounded">BETA</span>
            </div>
            <span className="text-gray-400">Echoes of the Past</span>
          </div>

          <div className="flex items-center space-x-4">
            <Tabs defaultValue="storyboard">
              <TabsList className="bg-white/5">
                <TabsTrigger value="storyboard" className="data-[state=active]:bg-white/10">
                  Storyboard
                </TabsTrigger>
                <TabsTrigger value="shot-editor" className="data-[state=active]:bg-white/10">
                  Shot Editor
                </TabsTrigger>
              </TabsList>
            </Tabs>

            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="icon">
                <Undo className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Redo className="h-4 w-4" />
              </Button>
            </div>

            <div className="flex items-center space-x-2">
              <Button variant="ghost" className="text-primary">
                <Play className="h-4 w-4 mr-2" />
                Preview
              </Button>
              <Button variant="ghost" className="text-primary">
                <Share className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};