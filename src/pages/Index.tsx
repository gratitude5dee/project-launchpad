import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PlusCircle, FileCode } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0A0F1C] text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Project Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Start with concept card */}
          <div className="relative overflow-hidden rounded-xl bg-[#0D1424] border border-primary/20 p-8 animate-fade-up">
            <div className="relative z-10 space-y-4">
              <h1 className="text-4xl font-bold">Start with a concept</h1>
              <p className="text-lg text-gray-400">
                Instantly turn any idea or script into a vivid Project
              </p>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white"
                onClick={() => navigate("/concept")}
              >
                <PlusCircle className="mr-2 h-5 w-5" />
                New Project
              </Button>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#0D1424] to-transparent z-0" />
          </div>

          {/* Start from scratch card */}
          <div className="relative overflow-hidden rounded-xl bg-[#0D1424] border border-primary/20 p-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative z-10 space-y-4">
              <h1 className="text-4xl font-bold">Start from scratch</h1>
              <p className="text-lg text-gray-400">
                Full freedom to craft your story, shot by shot
              </p>
              <Button
                variant="outline"
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-white border-primary/20"
                onClick={() => navigate("/storyboard")}
              >
                <FileCode className="mr-2 h-5 w-5" />
                New blank Project
              </Button>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#0D1424] to-transparent z-0" />
          </div>
        </div>

        {/* Projects Section */}
        <div className="space-y-6">
          <div className="flex gap-6 text-sm">
            <button className="text-primary border-b-2 border-primary pb-1">All Projects</button>
            <button className="text-gray-400 hover:text-white pb-1">Shared Projects</button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {/* Project thumbnails would go here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;