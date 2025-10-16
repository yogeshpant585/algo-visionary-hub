import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const LinearSearchVisualizer = () => {
  const [array] = useState([5, 3, 8, 2, 7, 4, 6]);
  const [target, setTarget] = useState<number | "">("");
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const [foundIndex, setFoundIndex] = useState<number | null>(null);

  const step = () => {
    if (currentIndex === null) {
      setCurrentIndex(0);
      if (array[0] === Number(target)) setFoundIndex(0);
      return;
    }

    if (currentIndex < array.length - 1) {
      const nextIndex = currentIndex + 1;
      setCurrentIndex(nextIndex);
      if (array[nextIndex] === Number(target)) setFoundIndex(nextIndex);
    }
  };

  const reset = () => {
    setTarget("");
    setCurrentIndex(null);
    setFoundIndex(null);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8" style={{ background: `hsl(var(--intermediate-bg))` }}>
      <Link to="/levels/intermediate">
        <Button variant="ghost" className="mb-8 text-intermediate-text">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Intermediate
        </Button>
      </Link>

      <h1 className="text-3xl font-bold mb-6 text-intermediate-primary">Linear Search Visualizer</h1>

      <div className="mb-4">
        <input
          type="number"
          placeholder="Enter target"
          value={target}
          onChange={(e) => setTarget(e.target.value ? Number(e.target.value) : "")}
          className="border-2 border-intermediate-primary/30 bg-intermediate-card text-intermediate-text p-2 rounded-md w-32 text-center"
        />
      </div>

      <div className="flex space-x-4 mb-6">
        {array.map((num, idx) => {
          let borderColor = "border-intermediate-primary/20";
          if (idx === currentIndex) borderColor = "border-intermediate-secondary";
          if (idx === foundIndex) borderColor = "border-intermediate-accent";

          return (
            <div
              key={idx}
              className={`w-12 h-12 flex items-center justify-center border-2 ${borderColor} rounded-md bg-intermediate-card text-intermediate-text transition-all`}
            >
              {num}
            </div>
          );
        })}
      </div>

      <div className="flex space-x-4">
        <Button onClick={step} className="bg-intermediate-primary hover:bg-intermediate-primary/90 text-white">
          Next Step
        </Button>
        <Button onClick={reset} className="bg-intermediate-card border-2 border-intermediate-primary/30 text-intermediate-text hover:bg-intermediate-primary/10">
          Reset
        </Button>
      </div>

      {foundIndex !== null && (
        <p className="mt-4 text-intermediate-accent font-medium">✅ Target Found at index {foundIndex}</p>
      )}
      {currentIndex !== null && currentIndex === array.length - 1 && foundIndex === null && (
        <p className="mt-4 text-intermediate-secondary font-medium">❌ Target Not Found</p>
      )}
    </div>
  );
};

export default LinearSearchVisualizer;
