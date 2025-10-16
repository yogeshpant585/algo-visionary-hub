import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Play, BookOpen } from "lucide-react";

const algorithms = [
  {
    id: "array-basics",
    title: "Array Basics",
    description: "Learn how arrays store and access elements in memory",
    difficulty: "Easy",
    time: "5 min",
    color: "beginner-primary",
  },
  {
    id: "swap-numbers",
    title: "Swapping Numbers",
    description: "Understand the fundamental swap operation with visual animations",
    difficulty: "Easy",
    time: "3 min",
    color: "beginner-secondary",
  },
  {
    id: "loops",
    title: "Loops & Iteration",
    description: "See how loops work with step-by-step visualization",
    difficulty: "Easy",
    time: "7 min",
    color: "beginner-accent",
  },
  {
    id: "conditionals",
    title: "If-Else Logic",
    description: "Visualize decision-making in code with branching paths",
    difficulty: "Easy",
    time: "6 min",
    color: "beginner-success",
  },
];

const resources = [
  { title: "Understanding Arrays", url: "https://www.geeksforgeeks.org/arrays-in-c-cpp/" },
  { title: "Variables & Data Types", url: "https://www.programiz.com/c-programming/c-variables-constants" },
  { title: "Loops Explained", url: "https://www.tutorialspoint.com/cprogramming/c_loops.htm" },
  { title: "Logic Building Guide", url: "https://www.freecodecamp.org/news/how-to-think-like-a-programmer/" },
];

const Beginner = () => {
  return (
    <div className="min-h-screen" style={{ background: `hsl(var(--beginner-bg))` }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link to="/levels">
          <Button variant="ghost" className="mb-8 text-beginner-text">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Levels
          </Button>
        </Link>

        <div className="mb-12 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-beginner-primary">
            🌱 Beginner Level
          </h1>
          <p className="text-xl text-beginner-text/80 max-w-2xl mx-auto">
            Start your coding adventure with playful visualizations of fundamental programming concepts
          </p>
        </div>

        {/* Algorithms Grid */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-beginner-text">Available Visualizations</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {algorithms.map((algo) => (
              <Card 
                key={algo.id}
                className="bg-beginner-card border-2 hover:border-beginner-primary transition-all duration-300 hover:shadow-lg hover:-translate-y-1 overflow-hidden group"
              >
                <div className={`h-2 bg-${algo.color}`} />
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-beginner-text">{algo.title}</h3>
                    <span className="text-xs px-3 py-1 rounded-full bg-beginner-success/20 text-beginner-success font-medium">
                      {algo.difficulty}
                    </span>
                  </div>
                  
                  <p className="text-beginner-text/70 mb-4">{algo.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-beginner-text/60">⏱️ {algo.time}</span>
                    <Link to={`/visualize/beginner/${algo.id}`}>
                      <Button size="sm" className="bg-beginner-primary hover:bg-beginner-primary/90 text-white rounded-lg">
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
        <div className="bg-beginner-card rounded-2xl p-8 border-2 border-beginner-primary/20">
          <div className="flex items-center mb-6">
            <BookOpen className="h-6 w-6 text-beginner-primary mr-3" />
            <h2 className="text-2xl font-bold text-beginner-text">Read More</h2>
          </div>
          
          <p className="text-beginner-text/70 mb-6">
            Strengthen your fundamentals with these beginner-friendly resources:
          </p>
          
          <div className="grid sm:grid-cols-2 gap-4">
            {resources.map((resource, index) => (
              <a
                key={index}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-beginner-primary/5 rounded-xl hover:bg-beginner-primary/10 transition-colors border border-beginner-primary/20 group"
              >
                <span className="text-2xl mr-3">📚</span>
                <span className="text-beginner-text group-hover:text-beginner-primary transition-colors">
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

export default Beginner;
