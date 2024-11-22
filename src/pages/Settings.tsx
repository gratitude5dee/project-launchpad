import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Settings = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/loading", { state: { nextPage: "/breakdown" } });
  };

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
              <div className="flex items-center space-x-4">
                <span className="text-gray-400">Echoes of the Past</span>
              </div>
            </div>
            <Button variant="outline" className="border-primary/20 bg-transparent text-primary hover:bg-primary/10">
              Upgrade
            </Button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Settings</h2>
            <div className="space-y-6">
              <div>
                <Label>PROJECT NAME*</Label>
                <Input defaultValue="Echoes of the Past" className="bg-[#1A1F2C] border-gray-800" />
              </div>

              <div>
                <Label>ASPECT RATIO</Label>
                <div className="flex space-x-4 mt-2">
                  <Button variant="outline" className="bg-primary/10 border-primary">16:9</Button>
                  <Button variant="outline" className="bg-transparent">1:1</Button>
                </div>
              </div>

              <div>
                <Label>VIDEO STYLE</Label>
                <div className="grid grid-cols-3 gap-4 mt-2">
                  <div className="aspect-video bg-[#1A1F2C] rounded-lg p-2 border-2 border-transparent hover:border-primary cursor-pointer">
                    <div className="h-full flex items-center justify-center text-sm">Standard</div>
                  </div>
                  <div className="aspect-video bg-[#1A1F2C] rounded-lg p-2 border-2 border-primary cursor-pointer">
                    <div className="h-full flex items-center justify-center text-sm">Cinematic</div>
                  </div>
                  <div className="aspect-video bg-[#1A1F2C] rounded-lg p-2 border-2 border-transparent hover:border-primary cursor-pointer">
                    <div className="h-full flex items-center justify-center text-sm">Film Noir</div>
                  </div>
                </div>
              </div>

              <div>
                <Label>STYLE REFERENCE</Label>
                <div className="mt-2 border-2 border-dashed border-gray-700 rounded-lg p-8">
                  <div className="text-center">
                    <p>Drag image here</p>
                    <p className="text-sm text-gray-500">Or click here to upload a file</p>
                  </div>
                </div>
              </div>

              <div>
                <Label>CINEMATIC INSPIRATION</Label>
                <Input 
                  placeholder="E.g., 'Retro, gritty, eclectic, stylish, noir...'" 
                  className="bg-[#1A1F2C] border-gray-800" 
                />
              </div>
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
            onClick={() => navigate("/storyline")}
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back
          </Button>
          <Button 
            className="bg-primary hover:bg-primary/90"
            onClick={handleNext}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Settings;