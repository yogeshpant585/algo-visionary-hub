import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

interface Node {
  value: number;
  id: number;
}

let nodeId = 0;

const LinkedListVisualizer = () => {
  const [list, setList] = useState<Node[]>([]);
  const [inputValue, setInputValue] = useState<number | "">("");
  const [highlightIndex, setHighlightIndex] = useState<number | null>(null);

  const insertNode = () => {
    if (inputValue === "") return;
    const newNode: Node = { value: Number(inputValue), id: nodeId++ };
    setList([...list, newNode]);
    setInputValue("");
  };

  const deleteNode = () => {
    if (list.length === 0) return;
    setHighlightIndex(list.length - 1);
    setTimeout(() => {
      setList(list.slice(0, -1));
      setHighlightIndex(null);
    }, 500);
  };

  const traverse = async () => {
    for (let i = 0; i < list.length; i++) {
      setHighlightIndex(i);
      await new Promise((resolve) => setTimeout(resolve, 600));
    }
    setHighlightIndex(null);
  };

  const resetList = () => {
    setList([]);
    setInputValue("");
    setHighlightIndex(null);
  };

  return (
    <div className="min-h-screen flex flex-col items-center p-8" style={{ background: `hsl(var(--intermediate-bg))` }}>
      <Link to="/levels/intermediate">
        <Button variant="ghost" className="mb-8 text-intermediate-text">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Intermediate
        </Button>
      </Link>

      <h1 className="text-3xl font-bold mb-6 text-intermediate-primary">Linked List Operations Visualizer</h1>

      <div className="flex mb-6 gap-4">
        <input
          type="number"
          placeholder="Node value"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value ? Number(e.target.value) : "")}
          className="border-2 border-intermediate-primary/30 bg-intermediate-card text-intermediate-text p-2 rounded-md w-32 text-center"
        />
        <Button onClick={insertNode} className="bg-intermediate-primary hover:bg-intermediate-primary/90 text-white">
          Insert
        </Button>
        <Button onClick={deleteNode} className="bg-intermediate-secondary hover:bg-intermediate-secondary/90 text-white">
          Delete
        </Button>
        <Button onClick={traverse} className="bg-intermediate-accent hover:bg-intermediate-accent/90 text-white">
          Traverse
        </Button>
        <Button onClick={resetList} className="bg-intermediate-card border-2 border-intermediate-primary/30 text-intermediate-text hover:bg-intermediate-primary/10">
          Reset
        </Button>
      </div>

      <div className="flex items-center gap-4">
        {list.map((node, idx) => {
          const isHighlighted = highlightIndex === idx;
          return (
            <div key={node.id} className="flex items-center">
              <div
                className={`w-16 h-16 flex items-center justify-center border-2 rounded-md transition-all ${
                  isHighlighted ? "bg-intermediate-accent border-intermediate-accent text-white" : "bg-intermediate-card border-intermediate-primary/30 text-intermediate-text"
                }`}
              >
                {node.value}
              </div>
              {idx < list.length - 1 && <span className="text-2xl mx-2 text-intermediate-primary">→</span>}
            </div>
          );
        })}
      </div>

      {list.length === 0 && <p className="mt-6 text-intermediate-text/60">Linked list is empty</p>}
    </div>
  );
};

export default LinkedListVisualizer;
