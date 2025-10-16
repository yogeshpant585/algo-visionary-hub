import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Levels from "./pages/Levels";
import Beginner from "./pages/Beginner";
import Intermediate from "./pages/Intermediate";
import Advanced from "./pages/Advanced";
import BubbleSortVisualizer from "./pages/BubbleSortVisualizer";
import LinearSearchVisualizer from "./pages/LinearSearchVisualizer";
import BinarySearchVisualizer from "./pages/BinarySearchVisualizer";
import LinkedListVisualizer from "./pages/LinkedListVisualizer";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/levels" element={<Levels />} />
          <Route path="/levels/beginner" element={<Beginner />} />
          <Route path="/levels/intermediate" element={<Intermediate />} />
          <Route path="/levels/advanced" element={<Advanced />} />
          <Route path="/visualize/intermediate/bubble-sort" element={<BubbleSortVisualizer />} />
          <Route path="/visualize/intermediate/linear-search" element={<LinearSearchVisualizer />} />
          <Route path="/visualize/intermediate/binary-search" element={<BinarySearchVisualizer />} />
          <Route path="/visualize/intermediate/linked-list" element={<LinkedListVisualizer />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
