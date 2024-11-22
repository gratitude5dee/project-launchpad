import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Settings, FileCode, Music, Mic2, Upload, Shirt, Play, Trash2 } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export const StoryboardSidebar = () => {
  return (
    <ScrollArea className="h-full bg-dark-lighter/80 backdrop-blur-xl">
      <div className="p-4 space-y-6">
        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-2"
          >
            <h2 className="text-lg font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Return to Eldridge
            </h2>
            <p className="text-sm text-white/60">
              Sarah Thompson returns to Eldridge, evoking nostalgia as she steps into her childhood town.
            </p>
          </motion.div>

          <Collapsible defaultOpen>
            <CollapsibleTrigger className="flex items-center justify-between w-full p-2.5 hover:bg-white/5 rounded-md transition-colors">
              <div className="flex items-center space-x-2 text-white/80">
                <Settings size={16} />
                <span>Location</span>
              </div>
            </CollapsibleTrigger>
            <CollapsibleContent className="p-2 space-y-4">
              <div className="space-y-2">
                <Label className="text-xs text-white/50">DESCRIPTION</Label>
                <Input 
                  placeholder="Describe the location..."
                  className="bg-dark-modal border-white/10 focus-visible:ring-primary/50"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-xs text-white/50">LIGHTING</Label>
                <Input 
                  placeholder="Describe the lighting..."
                  className="bg-dark-modal border-white/10 focus-visible:ring-primary/50"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-xs text-white/50">WEATHER</Label>
                <Input 
                  placeholder="Describe the weather..."
                  className="bg-dark-modal border-white/10 focus-visible:ring-primary/50"
                />
              </div>
            </CollapsibleContent>
          </Collapsible>

          <Collapsible>
            <CollapsibleTrigger className="flex items-center justify-between w-full p-2.5 hover:bg-white/5 rounded-md transition-colors">
              <div className="flex items-center space-x-2 text-white/80">
                <FileCode size={16} />
                <span>Style</span>
              </div>
            </CollapsibleTrigger>
            <CollapsibleContent className="p-2 space-y-4">
              <div className="space-y-2">
                <Label className="text-xs text-white/50">VIDEO STYLE</Label>
                <div className="grid grid-cols-2 gap-2">
                  <Button variant="outline" size="sm" className="bg-dark-modal border-white/10 hover:bg-white/10">
                    Standard
                  </Button>
                  <Button variant="outline" size="sm" className="bg-dark-modal border-white/10 hover:bg-white/10">
                    Cinematic
                  </Button>
                  <Button variant="outline" size="sm" className="bg-dark-modal border-white/10 hover:bg-white/10">
                    Film Noir
                  </Button>
                  <Button variant="outline" size="sm" className="bg-dark-modal border-white/10 hover:bg-white/10">
                    Anime
                  </Button>
                </div>
              </div>
            </CollapsibleContent>
          </Collapsible>

          <Dialog>
            <DialogTrigger asChild>
              <Button 
                variant="ghost" 
                className="w-full justify-start p-2.5 hover:bg-white/5 rounded-md transition-colors text-white/80 font-normal"
              >
                <Shirt size={16} className="mr-2" />
                Clothing
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] bg-dark-modal/95 backdrop-blur-xl border-white/10">
              <DialogHeader>
                <DialogTitle className="text-lg font-semibold">
                  Clothing • Return to Eldridge
                </DialogTitle>
              </DialogHeader>
              <div className="space-y-4 mt-4">
                <div className="aspect-[3/4] bg-dark-modal rounded-lg overflow-hidden">
                  <img 
                    src="/lovable-uploads/9978d324-102e-44a1-a9b5-86b5c746a9ac.png" 
                    alt="Character Preview"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium mb-2">Sarah Thompson</h4>
                  <div className="p-3 bg-primary/10 rounded-lg border border-primary/20">
                    <p className="text-sm text-white/70">
                      Fitted, soft gray cotton sweater with a round neckline, high-waisted dark blue jeans
                    </p>
                  </div>
                </div>
                <div className="flex justify-end space-x-2 pt-2">
                  <Button variant="ghost" className="text-white/70 hover:bg-white/10">
                    Cancel
                  </Button>
                  <Button>Apply</Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>

          <div className="pt-4 border-t border-white/10">
            <Label className="text-sm font-medium mb-2 text-white/80">Sound</Label>
            <div className="space-y-2">
              <Collapsible>
                <CollapsibleTrigger className="flex items-center justify-between w-full p-2.5 hover:bg-white/5 rounded-md transition-colors">
                  <div className="flex items-center space-x-2 text-white/80">
                    <Mic2 size={16} />
                    <span className="text-sm">VOICEOVER</span>
                  </div>
                </CollapsibleTrigger>
                <CollapsibleContent className="p-2 space-y-4">
                  <div className="bg-[#1A1F2C] rounded-lg p-3 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Play className="h-4 w-4 text-white/70" />
                        <span className="text-sm text-white/70">Returning to Eldridge feels...</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button variant="ghost" size="icon" className="h-6 w-6 text-white/40 hover:text-white/60">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 rounded bg-primary/20 flex items-center justify-center">
                        <img 
                          src="/lovable-uploads/9978d324-102e-44a1-a9b5-86b5c746a9ac.png"
                          alt="Sarah"
                          className="w-6 h-6 rounded object-cover"
                        />
                      </div>
                      <span className="text-sm text-white/60">Sarah Thompson</span>
                    </div>
                  </div>
                </CollapsibleContent>
              </Collapsible>

              <Collapsible>
                <CollapsibleTrigger className="flex items-center justify-between w-full p-2.5 hover:bg-white/5 rounded-md transition-colors">
                  <div className="flex items-center space-x-2 text-white/80">
                    <Music size={16} />
                    <span className="text-sm">SCENE SOUND</span>
                  </div>
                </CollapsibleTrigger>
                <CollapsibleContent className="p-2 space-y-4">
                  <div className="bg-[#1A1F2C] rounded-lg p-3">
                    <Input 
                      placeholder="E.g. 'Ocean waves...'" 
                      className="bg-black/20 border-0 text-sm text-white/70 focus-visible:ring-1 focus-visible:ring-primary/50"
                    />
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </div>
          </div>
        </div>
      </div>
    </ScrollArea>
  );
};
