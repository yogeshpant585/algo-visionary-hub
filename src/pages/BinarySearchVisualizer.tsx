import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const BinarySearchVisualizer = () => {
  const [array] = useState([1, 3, 5, 7, 9, 11, 13, 15]);
  const [target, setTarget] = useState<number | "">("");
  const [low, setLow] = useState(0);
  const [high, setHigh] = useState(array.length - 1);
  const [mid, setMid] = useState<number | null>(null);
  const [found, setFound] = useState(false);

  const step = () => {
    if (low > high || target === "") return;

    const middle = Math.floor((low + high) / 2);
    setMid(middle);

    if (array[middle] === Number(target)) {
      setFound(true);
    } else if (array[middle] < Number(target)) {
      setLow(middle + 1);
    } else {
      setHigh(middle - 1);
    }
  };

  const reset = () => {
    setLow(0);
    setHigh(array.length - 1);
    setMid(null);
    setFound(false);
    setTarget("");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8" style={{ background: `hsl(var(--intermediate-bg))` }}>
      <Link to="/levels/intermediate">
        <Button variant="ghost" className="mb-8 text-intermediate-text">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Intermediate
        </Button>
      </Link>

      <h1 className="text-3xl font-bold mb-6 text-intermediate-primary">Binary Search Visualizer</h1>

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
          if (idx === mid) borderColor = "border-intermediate-secondary";
          else if (idx >= low && idx <= high) borderColor = "border-intermediate-primary";

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

      {found && <p className="mt-4 text-intermediate-accent font-medium">✅ Target Found at index {mid}</p>}
      {!found && mid !== null && low > high && <p className="mt-4 text-intermediate-secondary font-medium">❌ Target Not Found</p>}
    </div>
  );
};

export default BinarySearchVisualizer;
