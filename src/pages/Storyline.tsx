import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Wand2, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Storyline = () => {
  const navigate = useNavigate();
  const [selectedStory, setSelectedStory] = useState("Echoes of the Past");
  const [selectedTags, setSelectedTags] = useState(["Mystery", "Family Secrets", "Voiceover Narration"]);
  const [storyContent, setStoryContent] = useState("");

  return (
    <div className="min-h-screen bg-[#0A0F1C] text-white">
      {/* Navigation */}
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
              <div className="flex items-center space-x-1">
                <button onClick={() => navigate("/concept")} className="px-4 py-2 text-gray-400">CONCEPT</button>
                <button className="px-4 py-2 text-primary bg-primary/10 rounded-md">STORYLINE</button>
                <button onClick={() => navigate("/settings")} className="px-4 py-2 text-gray-400">SETTINGS & CAST</button>
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
        <div className="grid grid-cols-12 gap-8">
          {/* Left Sidebar */}
          <div className="col-span-3 space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-4">ALTERNATIVE STORYLINES</h3>
              <div className="space-y-4">
                <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
                  <h4 className="font-medium text-primary mb-2">{selectedStory}</h4>
                  <p className="text-sm text-gray-400 mb-3">
                    A woman's haunting memories guide her through a mysterious town, revealing secrets long buried.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {selectedTags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-black/20">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="p-4 bg-[#1A1F2C] rounded-lg border border-gray-800">
                  <h4 className="font-medium mb-2">Whispers in the Wind</h4>
                  <p className="text-sm text-gray-400 mb-3">
                    A grieving artist finds solace in the whispers of nature, leading her to an unexpected revelation.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-black/20">Artistic Journey</Badge>
                    <Badge variant="secondary" className="bg-black/20">Grief</Badge>
                    <Badge variant="secondary" className="bg-black/20">Nature's Whispers</Badge>
                  </div>
                </div>
              </div>
              <Button className="w-full mt-4 bg-primary/10 text-primary hover:bg-primary/20">
                <Wand2 className="w-4 h-4 mr-2" />
                Generate more
              </Button>
            </div>
          </div>

          {/* Main Content */}
          <div className="col-span-9">
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-4">{selectedStory}</h2>
              <div className="flex gap-2 mb-4">
                {["Custom", "Mystery", "Family Secrets", "Voiceover Narration"].map((tag) => (
                  <Badge key={tag} variant="secondary" className="bg-black/20">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            <Textarea
              className="min-h-[400px] bg-[#1A1F2C] border-gray-800 resize-none p-4"
              placeholder="Start writing your story..."
              value={storyContent}
              onChange={(e) => setStoryContent(e.target.value)}
            />

            <div className="text-right text-sm text-gray-400 mt-2">
              1243 / 2000
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#0A0F1C]/80 backdrop-blur-sm border-t border-white/10">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Button 
            variant="outline" 
            className="bg-transparent hover:bg-white/5"
            onClick={() => navigate("/concept")}
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back
          </Button>
          <Button 
            className="bg-primary hover:bg-primary/90"
            onClick={() => navigate("/settings")}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Storyline;