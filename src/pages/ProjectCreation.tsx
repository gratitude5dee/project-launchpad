import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Upload, Wand2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const ProjectCreation = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    concept: "",
    specialRequests: "",
    format: "",
    genre: ""
  });

  const hasInput = Object.values(formData).some(value => value.trim() !== "");

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="min-h-screen bg-[#0A0F1C] text-white relative">
      {/* Navigation */}
      <nav className="border-b border-primary/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <button 
                onClick={() => navigate("/")}
                className="text-primary hover:text-primary/90"
              >
                LTX Studio
              </button>
              <div className="flex items-center space-x-1">
                <button className="px-4 py-2 text-primary bg-primary/10 rounded-md">CONCEPT</button>
                <button className="px-4 py-2 text-gray-400 hover:text-white">STORYLINE</button>
                <button className="px-4 py-2 text-gray-400 hover:text-white">SETTINGS & CAST</button>
                <button className="px-4 py-2 text-gray-400 hover:text-white">BREAKDOWN</button>
              </div>
            </div>
            <Button variant="outline" className="border-primary/20 bg-[#1E293B] text-white hover:bg-[#1E293B]/80">
              Upgrade
            </Button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8 pb-24">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-semibold">Input your concept</h1>
            <div className="flex items-center space-x-4">
              <button className="text-gray-400 hover:text-white">EXAMPLES</button>
              <button className="text-gray-400 hover:text-white p-2">
                <ArrowLeft className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Concept Input Section */}
          <div className="space-y-6">
            <div className="flex gap-4">
              <button className="flex-1 flex items-center gap-3 p-4 rounded-lg bg-primary/10 border border-primary/20">
                <Wand2 className="h-5 w-5 text-primary" />
                <div className="text-left">
                  <div className="font-medium">Develop concept with AI</div>
                  <div className="text-sm text-gray-400">AI involvement in script editing and writing</div>
                </div>
              </button>
              <button className="flex-1 flex items-center gap-3 p-4 rounded-lg border border-gray-800 hover:border-primary/20">
                <div className="text-left">
                  <div className="font-medium">Stick to the script</div>
                  <div className="text-sm text-gray-400">Visualize your idea or script as written</div>
                </div>
              </button>
            </div>

            <Textarea 
              className="min-h-[200px] bg-[#0D1424] border-primary/20 resize-none"
              placeholder="Input anything from a full script, a few scenes, or a story..."
              value={formData.concept}
              onChange={(e) => handleInputChange("concept", e.target.value)}
            />

            <div className="flex justify-between items-center">
              <Button variant="outline" className="border-primary/20 bg-[#1E293B] text-white hover:bg-[#1E293B]/80">
                <Upload className="mr-2 h-5 w-5" />
                Upload Text
              </Button>
              <span className="text-gray-400">
                {formData.concept.length} / 12000
              </span>
            </div>
          </div>

          {/* Optional Settings */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Optional settings</h3>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-gray-400 text-sm">SPECIAL REQUESTS</label>
                <Input
                  className="bg-[#0D1424] border-primary/20"
                  placeholder='Anything from "80s atmosphere" to "plot twists" or "a car chase"'
                  value={formData.specialRequests}
                  onChange={(e) => handleInputChange("specialRequests", e.target.value)}
                />
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-gray-400 text-sm">FORMAT</label>
                  <div className="flex gap-2">
                    <Button variant="outline" className="bg-primary/10 border-primary/20 text-white">Custom</Button>
                    <Button variant="outline" className="border-gray-800 hover:border-primary/20 bg-[#1E293B] text-white">Short Film</Button>
                    <Button variant="outline" className="border-gray-800 hover:border-primary/20 bg-[#1E293B] text-white">Commercial</Button>
                  </div>
                </div>

                <Input
                  className="bg-[#0D1424] border-primary/20"
                  placeholder="How should the AI shape your story?"
                  value={formData.format}
                  onChange={(e) => handleInputChange("format", e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <label className="text-gray-400 text-sm">GENRE</label>
                <Input
                  className="bg-[#0D1424] border-primary/20"
                  placeholder="This defines the overall style or category of your story"
                  value={formData.genre}
                  onChange={(e) => handleInputChange("genre", e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#0A0F1C]/80 backdrop-blur-sm border-t border-primary/10">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <Button 
              variant="outline" 
              className="border-primary/20 bg-[#1E293B] text-white hover:bg-[#1E293B]/80"
              onClick={() => navigate("/")}
            >
              Back
            </Button>
            <Button
              className="bg-primary text-white hover:bg-primary/90 px-8"
              disabled={!hasInput}
              onClick={() => navigate("/storyboard")}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCreation;