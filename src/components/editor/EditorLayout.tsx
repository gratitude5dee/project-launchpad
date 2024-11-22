import { useState } from "react";
import { Settings, Paintbrush, Cast, Music, Mic2, Undo2, Redo2, Play, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LeftSidebar } from "./LeftSidebar";
import { MainEditor } from "./MainEditor";
import { TabContent } from "./TabContent";

export const EditorLayout = () => {
  const [activeTab, setActiveTab] = useState("settings");

  return (
    <div className="min-h-screen bg-[#0A0F1C] text-white">
      {/* Top Navigation */}
      <nav className="border-b border-primary/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <div className="text-primary hover:text-primary/90 flex items-center space-x-2">
                <span>LTX Studio</span>
                <span className="px-2 py-0.5 text-xs bg-blue-500/20 text-blue-500 rounded">BETA</span>
              </div>
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
      <div className="flex h-[calc(100vh-4rem)]">
        {/* Tab Navigation */}
        <div className="w-16 border-r border-gray-800 flex flex-col items-center py-4 space-y-6">
          <button
            onClick={() => setActiveTab("settings")}
            className={`p-3 rounded-lg ${activeTab === "settings" ? "bg-primary/10 text-primary" : "text-gray-400 hover:text-white hover:bg-white/5"}`}
          >
            <Settings size={20} />
          </button>
          <button
            onClick={() => setActiveTab("style")}
            className={`p-3 rounded-lg ${activeTab === "style" ? "bg-primary/10 text-primary" : "text-gray-400 hover:text-white hover:bg-white/5"}`}
          >
            <Paintbrush size={20} />
          </button>
          <button
            onClick={() => setActiveTab("cast")}
            className={`p-3 rounded-lg ${activeTab === "cast" ? "bg-primary/10 text-primary" : "text-gray-400 hover:text-white hover:bg-white/5"}`}
          >
            <Cast size={20} />
          </button>
          <button
            onClick={() => setActiveTab("soundtrack")}
            className={`p-3 rounded-lg ${activeTab === "soundtrack" ? "bg-primary/10 text-primary" : "text-gray-400 hover:text-white hover:bg-white/5"}`}
          >
            <Music size={20} />
          </button>
          <button
            onClick={() => setActiveTab("voiceover")}
            className={`p-3 rounded-lg ${activeTab === "voiceover" ? "bg-primary/10 text-primary" : "text-gray-400 hover:text-white hover:bg-white/5"}`}
          >
            <Mic2 size={20} />
          </button>
        </div>

        {/* Left Sidebar */}
        <LeftSidebar activeTab={activeTab} />

        {/* Main Editor Area */}
        <MainEditor />

        {/* Footer Actions */}
        <div className="fixed bottom-0 left-0 right-0 bg-[#0A0F1C]/80 backdrop-blur-sm border-t border-white/10">
          <div className="container mx-auto px-4 py-3 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Undo2 className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Redo2 className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" className="bg-transparent hover:bg-white/5">
                <Play className="mr-2 h-4 w-4" /> Preview
              </Button>
              <Button className="bg-primary hover:bg-primary/90">
                <Share2 className="mr-2 h-4 w-4" /> Share
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <TabContent activeTab={activeTab} />
    </div>
  );
};