import { Button } from "@/components/ui/button";
import { Copy, Edit2 } from "lucide-react";
import { useState } from "react";

interface SceneCardProps {
  title: string;
  description: string;
  sceneDescription?: string;
  voiceover?: string;
  onEdit: () => void;
  onDuplicate: () => void;
}

export const SceneCard = ({
  title,
  description,
  sceneDescription,
  voiceover,
  onEdit,
  onDuplicate,
}: SceneCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="border-b border-gray-800 pb-6 group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="space-y-4">
        <div className="flex justify-between items-start">
          <h4 className="text-lg font-medium">{title}</h4>
          {isHovered && (
            <div className="flex space-x-2 absolute right-2 top-2">
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0 hover:bg-white/10"
                onClick={onEdit}
              >
                <Edit2 className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0 hover:bg-white/10"
                onClick={onDuplicate}
              >
                <Copy className="h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
        <p className="text-sm text-gray-400 mb-4">{description}</p>
        
        {sceneDescription && (
          <div>
            <h5 className="text-sm font-medium mb-2">SCENE DESCRIPTION</h5>
            <p className="text-sm text-gray-400">{sceneDescription}</p>
          </div>
        )}
        
        {voiceover && (
          <div>
            <h5 className="text-sm font-medium mb-2">VOICEOVER</h5>
            <p className="text-sm text-gray-400">{voiceover}</p>
          </div>
        )}
      </div>
    </div>
  );
};