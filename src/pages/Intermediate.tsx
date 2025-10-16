import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Play, BookOpen, Clock } from "lucide-react";

const algorithms = [
  {
    id: "bubble-sort",
    title: "Bubble Sort",
    description: "Watch elements bubble to their correct positions through comparisons",
    complexity: "O(n²)",
    difficulty: "Medium",
    time: "10 min",
  },
  {
    id: "binary-search",
    title: "Binary Search",
    description: "Efficiently find elements by dividing the search space in half",
    complexity: "O(log n)",
    difficulty: "Medium",
    time: "8 min",
  },
  {
    id: "linear-search",
    title: "Linear Search",
    description: "Search through elements one by one to find your target",
    complexity: "O(n)",
    difficulty: "Easy",
    time: "6 min",
  },
  {
    id: "linked-list",
    title: "Linked List Operations",
    description: "Visualize insertion, deletion, and traversal in linked lists",
    complexity: "O(n)",
    difficulty: "Medium",
    time: "12 min",
  },
];

const resources = [
  { title: "Striver's CP Sheet", url: "https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/" },
  { title: "LeetCode Blind 75", url: "https://leetcode.com/discuss/general-discussion/460599/blind-75-leetcode-questions" },
  { title: "Big O Notation Guide", url: "https://www.freecodecamp.org/news/big-o-notation-why-it-matters-and-why-it-doesnt-1674cfa8a23c/" },
  { title: "DSA Problem-Solving Tips", url: "https://www.geeksforgeeks.org/how-to-start-learning-dsa/" },
];

const Intermediate = () => {
  return (
    <div className="min-h-screen" style={{ background: `hsl(var(--intermediate-bg))` }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link to="/levels">
          <Button variant="ghost" className="mb-8 text-intermediate-text">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Levels
          </Button>
        </Link>

        <div className="mb-12 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-intermediate-primary">
            🎯 Intermediate Level
          </h1>
          <p className="text-xl text-intermediate-text/80 max-w-2xl mx-auto">
            Master core DSA concepts with structured, step-by-step algorithm visualizations
          </p>
        </div>

        {/* Algorithms Grid */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-intermediate-text">Core Algorithms</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {algorithms.map((algo, index) => (
              <Card 
                key={algo.id}
                className="bg-intermediate-card border-2 border-intermediate-primary/20 hover:border-intermediate-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-2 overflow-hidden group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-gradient-to-r from-intermediate-primary to-intermediate-secondary h-1" />
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-intermediate-text mb-1">{algo.title}</h3>
                      <span className="text-sm font-mono text-intermediate-secondary">{algo.complexity}</span>
                    </div>
                    <span className={`text-xs px-3 py-1 rounded-full font-medium ${
                      algo.difficulty === 'Easy' 
                        ? 'bg-intermediate-accent/20 text-intermediate-accent' 
                        : 'bg-intermediate-primary/20 text-intermediate-primary'
                    }`}>
                      {algo.difficulty}
                    </span>
                  </div>
                  
                  <p className="text-intermediate-text/70 mb-4">{algo.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-intermediate-text/60">
                      <Clock className="h-4 w-4 mr-1" />
                      {algo.time}
                    </div>
                    <Link to={`/visualize/intermediate/${algo.id}`}>
                      <Button size="sm" className="bg-intermediate-primary hover:bg-intermediate-primary/90 text-white rounded-lg">
                        <Play className="mr-2 h-4 w-4" />
                        Visualize
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Learning Resources */}
        <div className="bg-intermediate-card rounded-2xl p-8 border-2 border-intermediate-primary/20 shadow-lg">
          <div className="flex items-center mb-6">
            <BookOpen className="h-6 w-6 text-intermediate-primary mr-3" />
            <h2 className="text-2xl font-bold text-intermediate-text">Enhance Your Skills</h2>
          </div>
          
          <p className="text-intermediate-text/70 mb-6">
            Curated resources to level up your problem-solving abilities:
          </p>
          
          <div className="grid sm:grid-cols-2 gap-4">
            {resources.map((resource, index) => (
              <a
                key={index}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-gradient-to-r from-intermediate-primary/5 to-intermediate-secondary/5 rounded-xl hover:from-intermediate-primary/10 hover:to-intermediate-secondary/10 transition-all border border-intermediate-primary/20 group"
              >
                <span className="text-2xl mr-3">📖</span>
                <span className="text-intermediate-text group-hover:text-intermediate-primary transition-colors font-medium">
                  {resource.title}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intermediate;
