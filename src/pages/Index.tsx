import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PlusCircle, FileCode } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0A0F1C] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center min-h-[80vh]">
          {/* Left Column */}
          <div className="space-y-8 animate-fade-up">
            <h1 className="text-5xl font-bold leading-tight">
              Start with a concept
            </h1>
            <p className="text-xl text-gray-400">
              Instantly turn any idea or script into a vivid Project
            </p>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white px-8"
              onClick={() => navigate("/create")}
            >
              <PlusCircle className="mr-2 h-5 w-5" />
              New Project
            </Button>
          </div>

          {/* Right Column */}
          <div className="space-y-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <h2 className="text-5xl font-bold leading-tight">
              Start from scratch
            </h2>
            <p className="text-xl text-gray-400">
              Full freedom to craft your story, shot by shot
            </p>
            <Button
              variant="outline"
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-white border-primary/20 px-8"
              onClick={() => navigate("/create")}
            >
              <FileCode className="mr-2 h-5 w-5" />
              New blank Project
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;