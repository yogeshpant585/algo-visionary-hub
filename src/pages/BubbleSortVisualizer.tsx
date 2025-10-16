import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Play, Pause, RotateCcw, BookOpen } from "lucide-react";

interface ArrayBar {
  value: number;
  color: string;
}

const BubbleSortVisualizer = () => {
  const [array, setArray] = useState<ArrayBar[]>([]);
  const [isSorting, setIsSorting] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [comparisons, setComparisons] = useState(0);
  const [swaps, setSwaps] = useState(0);
  const [speed, setSpeed] = useState(500);

  useEffect(() => {
    generateArray();
  }, []);

  const generateArray = () => {
    const newArray: ArrayBar[] = [];
    for (let i = 0; i < 10; i++) {
      newArray.push({
        value: Math.floor(Math.random() * 100) + 10,
        color: "hsl(var(--intermediate-primary))",
      });
    }
    setArray(newArray);
    setCurrentStep(0);
    setComparisons(0);
    setSwaps(0);
    setIsSorting(false);
  };

  const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

  const bubbleSort = async () => {
    setIsSorting(true);
    const arr = [...array];
    const n = arr.length;
    let totalComparisons = 0;
    let totalSwaps = 0;

    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        // Highlight comparing elements
        arr[j].color = "hsl(var(--intermediate-accent))";
        arr[j + 1].color = "hsl(var(--intermediate-accent))";
        setArray([...arr]);
        await sleep(speed);

        totalComparisons++;
        setComparisons(totalComparisons);

        if (arr[j].value > arr[j + 1].value) {
          // Swap
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          totalSwaps++;
          setSwaps(totalSwaps);
          
          // Highlight swapped elements
          arr[j].color = "hsl(var(--intermediate-secondary))";
          arr[j + 1].color = "hsl(var(--intermediate-secondary))";
          setArray([...arr]);
          await sleep(speed);
        }

        // Reset colors
        arr[j].color = "hsl(var(--intermediate-primary))";
        arr[j + 1].color = "hsl(var(--intermediate-primary))";
      }
      // Mark sorted element
      arr[n - i - 1].color = "hsl(var(--intermediate-accent))";
      setArray([...arr]);
    }

    // Mark first element as sorted
    arr[0].color = "hsl(var(--intermediate-accent))";
    setArray([...arr]);
    setIsSorting(false);
  };

  return (
    <div className="min-h-screen" style={{ background: `hsl(var(--intermediate-bg))` }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link to="/levels/intermediate">
          <Button variant="ghost" className="mb-8 text-intermediate-text">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Intermediate
          </Button>
        </Link>

        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-3 text-intermediate-primary">Bubble Sort</h1>
          <p className="text-lg text-intermediate-text/70">
            Watch elements "bubble" to their correct positions through repeated comparisons
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Visualization Area */}
          <div className="lg:col-span-2 space-y-6">
            {/* Array Visualization */}
            <Card className="bg-intermediate-card border-2 border-intermediate-primary/20 p-8">
              <div className="flex items-end justify-center h-80 gap-2">
                {array.map((bar, idx) => (
                  <div key={idx} className="flex flex-col items-center gap-2 flex-1">
                    <div
                      className="w-full rounded-t-lg transition-all duration-300 shadow-lg"
                      style={{
                        height: `${bar.value * 2.5}px`,
                        backgroundColor: bar.color,
                      }}
                    />
                    <span className="text-xs font-mono text-intermediate-text/70">{bar.value}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Controls */}
            <Card className="bg-intermediate-card border-2 border-intermediate-primary/20 p-6">
              <div className="flex flex-wrap gap-4 items-center justify-between">
                <div className="flex gap-3">
                  <Button
                    onClick={bubbleSort}
                    disabled={isSorting}
                    className="bg-intermediate-primary hover:bg-intermediate-primary/90 text-white"
                  >
                    {isSorting ? <Pause className="mr-2 h-4 w-4" /> : <Play className="mr-2 h-4 w-4" />}
                    {isSorting ? "Running..." : "Start"}
                  </Button>
                  <Button
                    onClick={generateArray}
                    disabled={isSorting}
                    variant="outline"
                    className="border-intermediate-primary text-intermediate-primary hover:bg-intermediate-primary/10"
                  >
                    <RotateCcw className="mr-2 h-4 w-4" />
                    New Array
                  </Button>
                </div>

                <div className="flex items-center gap-4">
                  <label className="text-sm text-intermediate-text/70">Speed:</label>
                  <input
                    type="range"
                    min="100"
                    max="1000"
                    step="100"
                    value={speed}
                    onChange={(e) => setSpeed(Number(e.target.value))}
                    disabled={isSorting}
                    className="w-32"
                  />
                  <span className="text-sm text-intermediate-text/70">{speed}ms</span>
                </div>
              </div>
            </Card>

            {/* Pseudocode */}
            <Card className="bg-intermediate-card border-2 border-intermediate-primary/20 p-6">
              <h3 className="text-lg font-bold mb-4 text-intermediate-text">Pseudocode</h3>
              <pre className="text-sm text-intermediate-text/80 font-mono bg-intermediate-primary/5 p-4 rounded-lg overflow-x-auto">
{`function bubbleSort(arr):
  n = length(arr)
  for i from 0 to n-1:
    for j from 0 to n-i-1:
      if arr[j] > arr[j+1]:
        swap(arr[j], arr[j+1])
  return arr`}
              </pre>
            </Card>
          </div>

          {/* Info Panel */}
          <div className="space-y-6">
            {/* Stats */}
            <Card className="bg-intermediate-card border-2 border-intermediate-primary/20 p-6">
              <h3 className="text-lg font-bold mb-4 text-intermediate-text">Statistics</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-intermediate-text/70">Comparisons</span>
                    <span className="text-lg font-bold text-intermediate-primary">{comparisons}</span>
                  </div>
                  <div className="h-2 bg-intermediate-primary/20 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-intermediate-primary transition-all duration-300"
                      style={{ width: `${Math.min((comparisons / 45) * 100, 100)}%` }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-intermediate-text/70">Swaps</span>
                    <span className="text-lg font-bold text-intermediate-secondary">{swaps}</span>
                  </div>
                  <div className="h-2 bg-intermediate-secondary/20 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-intermediate-secondary transition-all duration-300"
                      style={{ width: `${Math.min((swaps / 45) * 100, 100)}%` }}
                    />
                  </div>
                </div>
              </div>
            </Card>

            {/* Complexity */}
            <Card className="bg-intermediate-card border-2 border-intermediate-primary/20 p-6">
              <h3 className="text-lg font-bold mb-4 text-intermediate-text">Complexity Analysis</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-intermediate-text/70">Time (Best)</span>
                  <code className="text-sm font-mono text-intermediate-accent">O(n)</code>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-intermediate-text/70">Time (Average)</span>
                  <code className="text-sm font-mono text-intermediate-primary">O(n²)</code>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-intermediate-text/70">Time (Worst)</span>
                  <code className="text-sm font-mono text-intermediate-secondary">O(n²)</code>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-intermediate-text/70">Space</span>
                  <code className="text-sm font-mono text-intermediate-accent">O(1)</code>
                </div>
              </div>
            </Card>

            {/* Color Legend */}
            <Card className="bg-intermediate-card border-2 border-intermediate-primary/20 p-6">
              <h3 className="text-lg font-bold mb-4 text-intermediate-text">Legend</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded" style={{ backgroundColor: "hsl(var(--intermediate-primary))" }} />
                  <span className="text-sm text-intermediate-text/70">Unsorted</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded" style={{ backgroundColor: "hsl(var(--intermediate-accent))" }} />
                  <span className="text-sm text-intermediate-text/70">Comparing / Sorted</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded" style={{ backgroundColor: "hsl(var(--intermediate-secondary))" }} />
                  <span className="text-sm text-intermediate-text/70">Swapping</span>
                </div>
              </div>
            </Card>

            {/* Resources */}
            <Card className="bg-intermediate-card border-2 border-intermediate-primary/20 p-6">
              <div className="flex items-center mb-4">
                <BookOpen className="h-5 w-5 text-intermediate-primary mr-2" />
                <h3 className="text-lg font-bold text-intermediate-text">Learn More</h3>
              </div>
              <div className="space-y-2">
                <a
                  href="https://www.youtube.com/watch?v=xli_FI7CuzA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-intermediate-primary hover:underline"
                >
                  📹 Bubble Sort Explained
                </a>
                <a
                  href="https://www.geeksforgeeks.org/bubble-sort/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-intermediate-primary hover:underline"
                >
                  📚 GeeksforGeeks Guide
                </a>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BubbleSortVisualizer;
