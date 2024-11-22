import { Button } from "@/components/ui/button";
import { Copy, Edit2 } from "lucide-react";
import { useState } from "react";

interface SynopsisProps {
  content: string;
  onEdit: () => void;
}

export const Synopsis = ({ content, onEdit }: SynopsisProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="space-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h3 className="text-lg font-semibold mb-4">SYNOPSIS</h3>
      <div className="group relative">
        <p className="text-gray-400">{content}</p>
        {isHovered && (
          <div className="absolute right-2 top-2 opacity-100 transition-opacity flex space-x-2">
            <Button
              variant="ghost"
              size="sm"
              className="h-8 w-8 p-0 hover:bg-white/10"
              onClick={onEdit}
            >
              <Edit2 className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};