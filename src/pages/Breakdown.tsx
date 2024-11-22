import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { Synopsis } from "@/components/breakdown/Synopsis";
import { SceneCard } from "@/components/breakdown/SceneCard";

interface Scene {
  id: number;
  title: string;
  description: string;
  location: string;
  lighting: string;
  weather: string;
  sceneDescription: string;
  voiceover: string;
}

const Breakdown = () => {
  const navigate = useNavigate();
  const [showEditDialog, setShowEditDialog] = useState(false);
  const [selectedScene, setSelectedScene] = useState<number | null>(null);
  const [scenes, setScenes] = useState<Scene[]>([
    {
      id: 1,
      title: "Return to Eldridge",
      description: "A quaint small town with cobblestone streets and weathered buildings...",
      location: "A quaint small town with cobblestone streets and weathered buildings, featuring faded signs and overgrown bushes...",
      lighting: "September, 4:00 PM, soft natural sunlight",
      weather: "Crystal clear skies, calm atmosphere...",
      sceneDescription: "Sarah Thompson stands at the edge of Eldridge, her childhood town...",
      voiceover: "Returning to Eldridge feels like stepping back in time—every cobblestone echoes with memories..."
    }
  ]);

  const handleDuplicate = (sceneId: number) => {
    const sceneToClone = scenes.find(scene => scene.id === sceneId);
    if (sceneToClone) {
      const newScene = {
        ...sceneToClone,
        id: Math.max(...scenes.map(s => s.id)) + 1,
        title: `${sceneToClone.title} (Copy)`
      };
      setScenes([...scenes, newScene]);
    }
  };

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
          <Synopsis 
            content="In Eldridge, Sarah Thompson returns to her childhood home after her estranged mother's death. As she encounters peculiar townspeople and significant locations, she unravels family secrets through her mother's journal, leading her to confront the haunting truths of her past. Empowered by understanding, she leaves the town with acceptance of her legacy."
            onEdit={() => {
              setSelectedScene(0);
              setShowEditDialog(true);
            }}
          />

          <div className="space-y-6">
            {scenes.map((scene) => (
              <SceneCard
                key={scene.id}
                title={scene.title}
                description={scene.description}
                sceneDescription={scene.sceneDescription}
                voiceover={scene.voiceover}
                onEdit={() => {
                  setSelectedScene(scene.id);
                  setShowEditDialog(true);
                }}
                onDuplicate={() => handleDuplicate(scene.id)}
              />
            ))}
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

      <Dialog open={showEditDialog} onOpenChange={setShowEditDialog}>
        <DialogContent className="bg-[#1A1F2C] text-white border-gray-800">
          <DialogHeader>
            <DialogTitle>{selectedScene === 0 ? "Edit Synopsis" : "Edit Scene"}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 pt-4">
            <div className="space-y-2">
              <Label>SCENE NAME</Label>
              <Input 
                defaultValue={selectedScene === 1 ? "Return to Eldridge" : ""} 
                className="bg-[#0A0F1C] border-gray-800"
              />
            </div>
            
            {selectedScene === 1 && (
              <>
                <div className="space-y-2">
                  <Label>LOCATION</Label>
                  <Textarea 
                    defaultValue="A quaint small town with cobblestone streets and weathered buildings, featuring faded signs and overgrown bushes. The architecture reflects a bygone era, with Victorian-style houses and peeling paint."
                    className="bg-[#0A0F1C] border-gray-800 min-h-[100px]"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label>LIGHTING</Label>
                  <Input 
                    defaultValue="September, 4:00 PM, soft natural sunlight"
                    className="bg-[#0A0F1C] border-gray-800"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label>WEATHER</Label>
                  <Input 
                    defaultValue="Crystal clear skies, calm atmosphere..."
                    className="bg-[#0A0F1C] border-gray-800"
                  />
                </div>
              </>
            )}
            
            <div className="space-y-2">
              <Label>{selectedScene === 0 ? "SYNOPSIS" : "SCENE"}</Label>
              <Textarea 
                className="bg-[#0A0F1C] border-gray-800 min-h-[150px]"
                defaultValue={selectedScene === 0 
                  ? "In Eldridge, Sarah Thompson returns to her childhood home after her estranged mother's death..."
                  : "Sarah Thompson stands at the edge of Eldridge, her childhood town..."
                }
              />
            </div>
            
            {selectedScene === 1 && (
              <div className="space-y-2">
                <Label>VOICEOVER</Label>
                <Input 
                  defaultValue="Returning to Eldridge feels like stepping back in time—every cobble"
                  className="bg-[#0A0F1C] border-gray-800"
                />
              </div>
            )}
          </div>
          <div className="flex justify-end space-x-2 mt-4">
            <Button variant="outline" onClick={() => setShowEditDialog(false)}>Cancel</Button>
            <Button>Done</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Breakdown;
