import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Breakdown = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-[#0A0F1C] text-white">
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
        <h2 className="text-2xl font-bold mb-6">Breakdown</h2>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">SYNOPSIS</h3>
            <p className="text-gray-400">
              In Eldridge, Sarah Thompson returns to her childhood home after her estranged mother's death. 
              As she encounters peculiar townspeople and significant locations, she unravels family secrets 
              through her mother's journal, leading her to confront the haunting truths of her past. 
              Empowered by understanding, she leaves the town with acceptance of her legacy.
            </p>
          </div>

          <div className="space-y-6">
            <div className="border-b border-gray-800 pb-6">
              <h4 className="text-lg font-medium mb-4">Scene 1 - Return to Eldridge</h4>
              <p className="text-sm text-gray-400 mb-4">
                A quaint small town with cobblestone streets and weathered buildings, featuring faded signs
                and overgrown bushes. The architecture reflects a bygone era, with Victorian-style houses and...
              </p>
              
              <div className="space-y-4">
                <div>
                  <h5 className="text-sm font-medium mb-2">SCENE DESCRIPTION</h5>
                  <p className="text-sm text-gray-400">
                    Sarah Thompson stands at the edge of Eldridge, her childhood town. The cobblestone streets 
                    stretch before her, lined with dilapidated buildings and overgrown gardens. The air is thick 
                    with nostalgia as she takes her first steps into the town, her heart heavy with the weight 
                    of her return. The sun casts long shadows, hinting at the secrets held within the town's history.
                  </p>
                </div>
                
                <div>
                  <h5 className="text-sm font-medium mb-2">VOICEOVER</h5>
                  <p className="text-sm text-gray-400">
                    Returning to Eldridge feels like stepping back in time—every cobblestone echoes with 
                    memories, and every shadow brings a whisper of the past.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-[#0A0F1C]/80 backdrop-blur-sm border-t border-white/10">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Button 
            variant="outline" 
            className="bg-transparent hover:bg-white/5"
            onClick={() => navigate("/settings")}
          >
            Back
          </Button>
          <Button 
            className="bg-primary hover:bg-primary/90"
          >
            Start
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Breakdown;