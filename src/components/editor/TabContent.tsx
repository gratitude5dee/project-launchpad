import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";
import { Upload, Plus } from "lucide-react";

interface TabContentProps {
  activeTab: string;
}

export const TabContent = ({ activeTab }: TabContentProps) => {
  const [showDialog, setShowDialog] = useState(false);

  if (!activeTab) return null;

  const renderContent = () => {
    switch (activeTab) {
      case "style":
        return (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50">
            <div className="container mx-auto px-4 py-8">
              <div className="bg-[#1A1F2C] rounded-lg p-6 max-w-2xl mx-auto">
                <h2 className="text-xl font-semibold mb-6">Style</h2>
                <div className="space-y-6">
                  <div>
                    <Label>VIDEO STYLE</Label>
                    <div className="grid grid-cols-4 gap-4 mt-2">
                      <div className="aspect-video bg-black rounded-lg p-2 border-2 border-primary">
                        <div className="h-full flex items-center justify-center text-sm">Standard</div>
                      </div>
                      <div className="aspect-video bg-black rounded-lg p-2 border-2 border-transparent">
                        <div className="h-full flex items-center justify-center text-sm">Cinematic</div>
                      </div>
                      <div className="aspect-video bg-black rounded-lg p-2 border-2 border-transparent">
                        <div className="h-full flex items-center justify-center text-sm">Film Noir</div>
                      </div>
                      <div className="aspect-video bg-black rounded-lg p-2 border-2 border-transparent">
                        <div className="h-full flex items-center justify-center text-sm">Anime</div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <Label>STYLE REFERENCE</Label>
                    <div className="mt-2 border-2 border-dashed border-gray-700 rounded-lg p-8">
                      <div className="text-center">
                        <Upload className="mx-auto h-8 w-8 text-gray-400 mb-2" />
                        <p>Drag image here</p>
                        <p className="text-sm text-gray-500">Or click here to upload a file</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <Label>REFERENCE STRENGTH</Label>
                    <Slider
                      defaultValue={[50]}
                      max={100}
                      step={1}
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label>CINEMATIC INSPIRATION</Label>
                    <Input 
                      placeholder="E.g., 'Retro, gritty, eclectic, stylish, noir...'"
                      className="mt-1 bg-black/20"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      
      case "cast":
        return (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50">
            <div className="container mx-auto px-4 py-8">
              <div className="bg-[#1A1F2C] rounded-lg p-6 max-w-4xl mx-auto">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold">Cast</h2>
                  <Button onClick={() => setShowDialog(true)}>
                    <Plus className="h-4 w-4 mr-2" /> Add character
                  </Button>
                </div>
                <div className="grid grid-cols-3 gap-6">
                  <div className="bg-black/20 rounded-lg p-4">
                    <img
                      src="/placeholder.svg"
                      alt="Sarah Thompson"
                      className="w-full aspect-square object-cover rounded-lg mb-4"
                    />
                    <h3 className="font-medium mb-1">Sarah Thompson</h3>
                    <p className="text-sm text-gray-400">Young woman confronting her past</p>
                  </div>
                  {/* Add more character cards as needed */}
                </div>
              </div>
            </div>
          </div>
        );
      
      // Add more cases for other tabs
      
      default:
        return null;
    }
  };

  return (
    <>
      {renderContent()}
      
      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="bg-[#1A1F2C] text-white border-gray-800">
          <DialogHeader>
            <DialogTitle>Add New Character</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label>CHARACTER NAME</Label>
              <Input className="mt-1 bg-black/20" />
            </div>
            <div>
              <Label>DESCRIPTION</Label>
              <Input className="mt-1 bg-black/20" />
            </div>
            <div>
              <Label>REFERENCE IMAGE</Label>
              <div className="mt-2 border-2 border-dashed border-gray-700 rounded-lg p-8">
                <div className="text-center">
                  <Upload className="mx-auto h-8 w-8 text-gray-400 mb-2" />
                  <p>Drag image here</p>
                  <p className="text-sm text-gray-500">Or click here to upload a file</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end space-x-2 mt-4">
            <Button variant="outline" onClick={() => setShowDialog(false)}>Cancel</Button>
            <Button>Add Character</Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};