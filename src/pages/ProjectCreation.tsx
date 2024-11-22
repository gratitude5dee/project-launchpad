import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Upload, Wand2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ProjectCreation = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0A0F1C] text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Button
            variant="ghost"
            className="text-gray-400 hover:text-white"
            onClick={() => navigate("/")}
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back
          </Button>
          <div className="flex space-x-4">
            <Button variant="outline" className="border-primary/20">
              Settings & Cast
            </Button>
            <Button variant="outline" className="border-primary/20">
              Breakdown
            </Button>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-3xl mx-auto space-y-8 animate-fade-in">
          <h1 className="text-3xl font-bold mb-8">Input your concept</h1>

          {/* AI Development Option */}
          <div className="bg-secondary/50 p-6 rounded-lg border border-primary/20 space-y-4">
            <div className="flex items-center space-x-4">
              <Wand2 className="h-6 w-6 text-primary" />
              <div>
                <h2 className="text-xl font-semibold">Develop concept with AI</h2>
                <p className="text-gray-400">AI involvement in script editing and writing</p>
              </div>
            </div>
            <Textarea
              className="bg-[#0A0F1C] border-primary/20 h-40"
              placeholder="Input anything from a full script, a few scenes, or a story..."
            />
            <div className="flex justify-between items-center">
              <Button variant="outline" className="border-primary/20">
                <Upload className="mr-2 h-5 w-5" />
                Upload Text
              </Button>
              <span className="text-gray-400">0 / 12000</span>
            </div>
          </div>

          {/* Optional Settings */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Optional settings</h3>
            
            <div className="space-y-4">
              <label className="block">
                <span className="text-gray-400">Special requests</span>
                <Input
                  className="mt-1 bg-[#0A0F1C] border-primary/20"
                  placeholder='Anything from "80s atmosphere" to "plot twists" or "a car chase"'
                />
              </label>

              <label className="block">
                <span className="text-gray-400">Genre</span>
                <Input
                  className="mt-1 bg-[#0A0F1C] border-primary/20"
                  placeholder="This defines the overall style or category of your story"
                />
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCreation;