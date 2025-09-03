import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, MessageSquare, Sparkles, Zap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Background Gradient Mesh */}
      <div className="fixed inset-0 bg-gradient-mesh opacity-60 pointer-events-none" />
      
      {/* Navigation */}
      <nav className="relative border-b border-border/40 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold gradient-text">AI Student Portal</span>
            </div>
            <div className="flex items-center space-x-3">
              <Link to="/login">
                <Button variant="ghost" size="sm" className="text-foreground/80 hover:text-foreground">
                  Login
                </Button>
              </Link>
              <Link to="/signup">
                <Button variant="default" size="sm" className="bg-primary hover:bg-primary/90">
                  Get Started
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-foreground/80">Powered by Advanced AI</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Your AI-Powered
              <br />
              <span className="gradient-text">Study Assistant</span>
            </h1>
            
            <p className="text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
              Get instant help with homework, explanations, research, and more. 
              Experience the future of learning with our advanced AI companion.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/signup">
                <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-lg px-8 py-6 hero-glow">
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Start Chatting Now
                </Button>
              </Link>
              <Link to="/login">
                <Button variant="outline" size="lg" className="w-full sm:w-auto text-lg px-8 py-6 border-border/40 hover:bg-accent">
                  Sign In
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="relative py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything you need to <span className="gradient-text">excel</span>
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Our AI assistant is designed to help students succeed in their academic journey
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="card-soft border-border/40 hover:shadow-lg transition-smooth">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Instant Answers</CardTitle>
                <CardDescription>
                  Get immediate help with any academic question. From math problems to essay writing.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="card-soft border-border/40 hover:shadow-lg transition-smooth">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Smart Explanations</CardTitle>
                <CardDescription>
                  Understand complex concepts with clear, step-by-step explanations tailored to your level.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="card-soft border-border/40 hover:shadow-lg transition-smooth">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>24/7 Availability</CardTitle>
                <CardDescription>
                  Study anytime, anywhere. Your AI assistant is always ready to help you succeed.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative py-20">
        <div className="container mx-auto px-4">
          <Card className="card-soft border-border/40 max-w-3xl mx-auto text-center">
            <CardContent className="py-12">
              <h3 className="text-3xl font-bold mb-4">
                Ready to boost your learning?
              </h3>
              <p className="text-lg text-foreground/70 mb-8">
                Join thousands of students already using AI to improve their academic performance.
              </p>
              <Link to="/signup">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6 hero-glow">
                  Get Started for Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Landing;