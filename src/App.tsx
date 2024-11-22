import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Concept from "./pages/Concept";
import Storyline from "./pages/Storyline";
import Settings from "./pages/Settings";
import Breakdown from "./pages/Breakdown";
import LoadingPage from "./pages/LoadingPage";
import Storyboard from "./pages/Storyboard";
import ShotEditor from "./pages/ShotEditor";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <TooltipProvider>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/concept" element={<Concept />} />
            <Route path="/storyline" element={<Storyline />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/breakdown" element={<Breakdown />} />
            <Route path="/loading" element={<LoadingPage />} />
            <Route path="/storyboard" element={<Storyboard />} />
            <Route path="/shot-editor" element={<ShotEditor />} />
          </Routes>
          <Toaster />
          <Sonner />
        </TooltipProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;