import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Users, Plus } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";

export const CastPopover = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="sm" className="text-white/70 hover:text-white hover:bg-white/5">
          <Users className="h-4 w-4 mr-2" />
          Cast
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 bg-dark-modal border-white/10 p-4" align="start">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-medium">Cast</h4>
            <Button variant="ghost" size="sm" className="text-primary hover:bg-primary/10">
              <Plus className="h-4 w-4 mr-2" />
              Add character
            </Button>
          </div>

          <div className="space-y-2">
            <div className="flex items-center space-x-3 p-2 hover:bg-white/5 rounded-lg cursor-pointer">
              <Avatar className="h-12 w-12">
                <img src="/lovable-uploads/2be5af86-a21e-4ab7-8a23-e2085d003918.png" alt="Sarah Thompson" />
              </Avatar>
              <div>
                <h5 className="font-medium">Sarah Thompson</h5>
                <p className="text-sm text-white/70">Young woman confronting her past</p>
              </div>
            </div>
          </div>

          <div className="flex justify-end pt-2">
            <Button size="sm">Done</Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};