import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Storyboard = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-[#0A0F1C] text-white">
      <nav className="border-b border-primary/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <button 
                onClick={() => navigate("/")}
                className="text-primary hover:text-primary/90"
              >
                LTX Studio
              </button>
              <div className="flex items-center space-x-1">
                <button className="px-4 py-2 text-gray-400 hover:text-white">CONCEPT</button>
                <button className="px-4 py-2 text-primary bg-primary/10 rounded-md">STORYLINE</button>
                <button className="px-4 py-2 text-gray-400 hover:text-white">SETTINGS & CAST</button>
                <button className="px-4 py-2 text-gray-400 hover:text-white">BREAKDOWN</button>
              </div>
            </div>
            <Button variant="outline" className="border-primary/20 bg-[#1E293B] text-white hover:bg-[#1E293B]/80">
              Upgrade
            </Button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-semibold">Storyboard</h1>
          <p className="text-gray-400 mt-2">This is where the storyboard interface will be implemented.</p>
        </div>
      </div>
    </div>
  );
};

export default Storyboard;