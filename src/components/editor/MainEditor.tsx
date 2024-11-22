import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Play } from "lucide-react";

export const MainEditor = () => {
  const [scenes] = useState([
    {
      id: 1,
      image: "/placeholder.svg",
      prompt: "A wide view of Eldridge, showcasing cobblestone streets lined with dilapidated Victorian houses and overgrown gardens...",
      shotType: "Establishing shot",
      dialogue: "",
      soundEffects: "Gentle breeze, distant church bells"
    },
    // Add more scenes as needed
  ]);

  return (
    <div className="flex-1 overflow-hidden">
      <div className="h-full overflow-x-auto p-6">
        <div className="flex space-x-6">
          {scenes.map((scene) => (
            <div key={scene.id} className="w-96 flex-shrink-0 bg-[#1A1F2C] rounded-lg overflow-hidden">
              <div className="relative aspect-video bg-black">
                <img src={scene.image} alt={`Scene ${scene.id}`} className="w-full h-full object-cover" />
                <Button
                  variant="outline"
                  size="sm"
                  className="absolute bottom-2 right-2 bg-black/50 hover:bg-black/70"
                >
                  <Play className="h-4 w-4 mr-1" /> Shot editor
                </Button>
              </div>
              <div className="p-4 space-y-4">
                <div>
                  <Label>PROMPT</Label>
                  <Input
                    value={scene.prompt}
                    className="mt-1 bg-black/20"
                  />
                </div>
                <div>
                  <Label>SHOT TYPE</Label>
                  <Input
                    value={scene.shotType}
                    className="mt-1 bg-black/20"
                  />
                </div>
                <div>
                  <Label>CHARACTER DIALOGUE</Label>
                  <Input
                    placeholder="Add the character's dialogue here"
                    className="mt-1 bg-black/20"
                  />
                </div>
                <div>
                  <Label>SOUND EFFECTS</Label>
                  <Input
                    value={scene.soundEffects}
                    className="mt-1 bg-black/20"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};