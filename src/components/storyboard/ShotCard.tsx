import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

interface ShotCardProps {
  shotNumber: number;
}

export const ShotCard = ({ shotNumber }: ShotCardProps) => {
  return (
    <Card className="bg-[#1A1F2C] border-none p-4">
      <div className="aspect-video bg-black/40 rounded-lg mb-4 relative">
        <div className="absolute top-2 left-2">
          <span className="text-sm text-white/70">#{shotNumber}</span>
        </div>
        <div className="absolute bottom-2 right-2">
          <Button size="sm" variant="outline" className="bg-black/50 hover:bg-black/70">
            Shot editor
          </Button>
        </div>
      </div>
      <div className="space-y-4">
        <div>
          <Label>PROMPT</Label>
          <Input 
            placeholder="Describe your shot..."
            className="mt-1 bg-black/20"
          />
        </div>
        <div>
          <Label>SHOT TYPE</Label>
          <Input 
            placeholder="E.g., Wide shot, Close-up..."
            className="mt-1 bg-black/20"
          />
        </div>
        <div>
          <Label>CHARACTER DIALOGUE</Label>
          <Input 
            placeholder="Add character dialogue..."
            className="mt-1 bg-black/20"
          />
        </div>
        <div>
          <Label>SOUND EFFECTS</Label>
          <Input 
            placeholder="E.g., 'Ocean waves...'"
            className="mt-1 bg-black/20"
          />
        </div>
      </div>
    </Card>
  );
};