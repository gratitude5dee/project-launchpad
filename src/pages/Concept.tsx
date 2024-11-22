import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Upload, Wand2, RefreshCcw } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Concept = () => {
  const navigate = useNavigate();
  const [inputText, setInputText] = useState("");

  return (
    <div className="min-h-screen bg-[#0A0F1C] text-white">
      {/* Navigation */}
      <nav className="border-b border-primary/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <div className="text-primary hover:text-primary/90 flex items-center space-x-2">
                <span>LTX Studio</span>
                <span className="px-2 py-0.5 text-xs bg-blue-500/20 text-blue-500 rounded">BETA</span>
              </div>
              <div className="flex items-center space-x-1">
                <button className="px-4 py-2 text-primary bg-primary/10 rounded-md">CONCEPT</button>
                <button className="px-4 py-2 text-gray-400">STORYLINE</button>
                <button className="px-4 py-2 text-gray-400">SETTINGS & CAST</button>
                <button className="px-4 py-2 text-gray-400">BREAKDOWN</button>
              </div>
            </div>
            <Button variant="outline" className="border-primary/20 bg-transparent text-primary hover:bg-primary/10">
              Upgrade
            </Button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Input your concept</h2>
          
          <div className="grid gap-4 mb-8">
            <div className="grid grid-cols-2 gap-4">
              <Button
                variant="outline"
                className="h-auto p-6 bg-[#1A1F2C] border-primary/20 hover:bg-primary/5"
                onClick={() => {}}
              >
                <div className="flex flex-col items-start text-left space-y-2">
                  <div className="flex items-center space-x-2">
                    <Wand2 className="w-5 h-5 text-primary" />
                    <span className="text-primary">Develop concept with AI</span>
                  </div>
                  <p className="text-sm text-gray-400">AI involvement in script editing and writing</p>
                </div>
              </Button>

              <Button
                variant="outline"
                className="h-auto p-6 bg-[#1A1F2C] border-primary/20 hover:bg-primary/5"
              >
                <div className="flex flex-col items-start text-left space-y-2">
                  <div className="flex items-center space-x-2">
                    <RefreshCcw className="w-5 h-5" />
                    <span>Stick to the script</span>
                  </div>
                  <p className="text-sm text-gray-400">Visualize your idea or script as written</p>
                </div>
              </Button>
            </div>

            <Textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Input anything from a full script, a few scenes, or a story..."
              className="min-h-[200px] bg-[#1A1F2C] border-primary/20"
            />

            <div className="flex justify-between items-center">
              <Button variant="outline" className="bg-[#1A1F2C] border-primary/20">
                <Upload className="w-4 h-4 mr-2" />
                Upload Text
              </Button>
              <span className="text-sm text-gray-400">0 / 12000</span>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Optional settings</h3>
            
            <div className="space-y-4">
              <div>
                <label className="text-sm text-gray-400 flex items-center mb-2">
                  SPECIAL REQUESTS
                  <span className="ml-2 text-xs bg-primary/20 text-primary px-1 rounded">?</span>
                </label>
                <Input
                  placeholder='Anything from "80s atmosphere" to "plot twists" or "a car chase"'
                  className="bg-[#1A1F2C] border-primary/20"
                />
              </div>

              <div>
                <label className="text-sm text-gray-400 mb-2 block">FORMAT</label>
                <div className="flex space-x-2">
                  <Badge variant="outline" className="bg-primary/10 text-primary">Custom</Badge>
                  <Badge variant="outline" className="bg-[#1A1F2C]">Short Film</Badge>
                  <Badge variant="outline" className="bg-[#1A1F2C]">Commercial</Badge>
                </div>
              </div>

              <div>
                <label className="text-sm text-gray-400 mb-2 block">CUSTOM FORMAT</label>
                <Input
                  placeholder="How should the AI shape your story?"
                  className="bg-[#1A1F2C] border-primary/20"
                />
              </div>

              <div>
                <label className="text-sm text-gray-400 mb-2 block">GENRE</label>
                <Input
                  placeholder="This defines the overall style or category of your story"
                  className="bg-[#1A1F2C] border-primary/20"
                />
              </div>

              <div>
                <label className="text-sm text-gray-400 mb-2 block">TONE</label>
                <Input
                  placeholder="This defines the mood and emotional quality of your story"
                  className="bg-[#1A1F2C] border-primary/20"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#0A0F1C]/80 backdrop-blur-sm border-t border-white/10">
        <div className="container mx-auto px-4 py-3 flex justify-end">
          <Button 
            className="bg-primary hover:bg-primary/90"
            onClick={() => navigate("/storyline")}
          >
            Next <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Concept;