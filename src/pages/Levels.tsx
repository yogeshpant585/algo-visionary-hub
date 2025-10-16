import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Sparkles, Target, Rocket } from "lucide-react";

const Levels = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link to="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>

        <h1 className="text-4xl sm:text-5xl font-bold text-center mb-4">
          Choose Your Learning Path
        </h1>
        <p className="text-xl text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Select your skill level to start visualizing algorithms tailored to your experience
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Beginner Level */}
          <Link to="/levels/beginner" className="group">
            <div className="relative bg-beginner-card border-2 border-beginner-primary/30 rounded-3xl p-8 h-full hover:border-beginner-primary transition-all duration-500 hover:shadow-2xl hover:shadow-beginner-primary/20 hover:-translate-y-3">
              <div className="absolute top-0 right-0 w-32 h-32 bg-beginner-primary/10 rounded-full blur-3xl group-hover:bg-beginner-primary/20 transition-all" />
              
              <div className="relative">
                <div className="bg-gradient-to-br from-beginner-primary to-beginner-secondary w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Sparkles className="h-10 w-10 text-white" />
                </div>

                <div className="mb-4">
                  <h2 className="text-3xl font-bold text-beginner-primary mb-2">Beginner</h2>
                  <p className="text-sm text-beginner-primary/70 font-medium">FOUNDATIONAL CONCEPTS</p>
                </div>

                <p className="text-beginner-text/80 mb-6 leading-relaxed">
                  Start your coding journey with playful animations that bring basic programming concepts to life.
                </p>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center text-beginner-text/70">
                    <div className="w-2 h-2 rounded-full bg-beginner-success mr-3" />
                    <span className="text-sm">Variables & Data Types</span>
                  </div>
                  <div className="flex items-center text-beginner-text/70">
                    <div className="w-2 h-2 rounded-full bg-beginner-success mr-3" />
                    <span className="text-sm">Loops & Conditionals</span>
                  </div>
                  <div className="flex items-center text-beginner-text/70">
                    <div className="w-2 h-2 rounded-full bg-beginner-success mr-3" />
                    <span className="text-sm">Array Basics</span>
                  </div>
                </div>

                <Button className="w-full bg-beginner-primary hover:bg-beginner-primary/90 text-white rounded-xl">
                  Start Learning
                </Button>
              </div>
            </div>
          </Link>

          {/* Intermediate Level */}
          <Link to="/levels/intermediate" className="group">
            <div className="relative bg-intermediate-card border-2 border-intermediate-primary/30 rounded-3xl p-8 h-full hover:border-intermediate-primary transition-all duration-500 hover:shadow-2xl hover:shadow-intermediate-primary/20 hover:-translate-y-3">
              <div className="absolute top-0 right-0 w-32 h-32 bg-intermediate-primary/10 rounded-full blur-3xl group-hover:bg-intermediate-primary/20 transition-all" />
              
              <div className="relative">
                <div className="bg-gradient-to-br from-intermediate-primary to-intermediate-secondary w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Target className="h-10 w-10 text-white" />
                </div>

                <div className="mb-4">
                  <h2 className="text-3xl font-bold text-intermediate-primary mb-2">Intermediate</h2>
                  <p className="text-sm text-intermediate-primary/70 font-medium">CORE DSA TOPICS</p>
                </div>

                <p className="text-intermediate-text/80 mb-6 leading-relaxed">
                  Master essential data structures and algorithms with structured, step-by-step visualizations.
                </p>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center text-intermediate-text/70">
                    <div className="w-2 h-2 rounded-full bg-intermediate-accent mr-3" />
                    <span className="text-sm">Sorting Algorithms</span>
                  </div>
                  <div className="flex items-center text-intermediate-text/70">
                    <div className="w-2 h-2 rounded-full bg-intermediate-accent mr-3" />
                    <span className="text-sm">Searching Techniques</span>
                  </div>
                  <div className="flex items-center text-intermediate-text/70">
                    <div className="w-2 h-2 rounded-full bg-intermediate-accent mr-3" />
                    <span className="text-sm">Linked Lists & Stacks</span>
                  </div>
                </div>

                <Button className="w-full bg-intermediate-primary hover:bg-intermediate-primary/90 text-white rounded-xl">
                  Explore Algorithms
                </Button>
              </div>
            </div>
          </Link>

          {/* Advanced Level */}
          <Link to="/levels/advanced" className="group">
            <div className="relative bg-advanced-card border-2 border-advanced-neon-cyan/30 rounded-3xl p-8 h-full hover:border-advanced-neon-cyan transition-all duration-500 hover:shadow-2xl hover:shadow-advanced-neon-cyan/30 hover:-translate-y-3">
              <div className="absolute top-0 right-0 w-32 h-32 bg-advanced-neon-cyan/10 rounded-full blur-3xl group-hover:bg-advanced-neon-cyan/20 transition-all" />
              
              <div className="relative">
                <div className="bg-gradient-to-br from-advanced-neon-cyan to-advanced-neon-purple w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Rocket className="h-10 w-10 text-white" />
                </div>

                <div className="mb-4">
                  <h2 className="text-3xl font-bold text-advanced-neon-cyan mb-2">Advanced</h2>
                  <p className="text-sm text-advanced-neon-cyan/70 font-medium">COMPLEX ALGORITHMS</p>
                </div>

                <p className="text-advanced-text/80 mb-6 leading-relaxed">
                  Conquer complex algorithms with graph animations, dynamic programming, and real-time complexity analysis.
                </p>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center text-advanced-text/70">
                    <div className="w-2 h-2 rounded-full bg-advanced-neon-purple mr-3" />
                    <span className="text-sm">Graph Algorithms</span>
                  </div>
                  <div className="flex items-center text-advanced-text/70">
                    <div className="w-2 h-2 rounded-full bg-advanced-neon-purple mr-3" />
                    <span className="text-sm">Dynamic Programming</span>
                  </div>
                  <div className="flex items-center text-advanced-text/70">
                    <div className="w-2 h-2 rounded-full bg-advanced-neon-purple mr-3" />
                    <span className="text-sm">MST & Shortest Path</span>
                  </div>
                </div>

                <Button className="w-full bg-advanced-neon-cyan hover:bg-advanced-neon-cyan/90 text-white rounded-xl">
                  Master Algorithms
                </Button>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Levels;
