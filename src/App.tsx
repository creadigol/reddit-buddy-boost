
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ConnectReddit from "./pages/ConnectReddit";
import TrainAI from "./pages/TrainAI";
import LiveActions from "./pages/LiveActions";
import Performance from "./pages/Performance";
import Audience from "./pages/Audience";
import Settings from "./pages/Settings";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/connect-reddit" element={<ConnectReddit />} />
          <Route path="/train-ai" element={<TrainAI />} />
          <Route path="/live-actions" element={<LiveActions />} />
          <Route path="/performance" element={<Performance />} />
          <Route path="/audience" element={<Audience />} />
          <Route path="/settings" element={<Settings />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
