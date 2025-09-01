import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Brain, MessageSquare, BookOpen, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    // Initialize Flowise chatbot
    const script = document.createElement('script');
    script.type = 'module';
    script.textContent = `
      import Chatbot from "https://cdn.jsdelivr.net/npm/flowise-embed/dist/web.js"
      Chatbot.init({
          chatflowid: "cceeebb6-1e2f-45dd-9c3c-dc5bc2da0cf2",
          apiHost: "http://localhost:3000",
      })
    `;
    document.head.appendChild(script);

    // Apply custom styling to flowise chatbot
    const style = document.createElement('style');
    style.textContent = `
      .flowise-chatbot iframe {
        border-radius: 12px !important;
        box-shadow: 0 10px 40px -10px rgba(124, 58, 237, 0.2) !important;
      }
      
      .flowise-chatbot button {
        background: linear-gradient(135deg, hsl(263, 85%, 62%), hsl(263, 85%, 75%)) !important;
        border-radius: 50% !important;
        box-shadow: 0 4px 20px -2px rgba(124, 58, 237, 0.3) !important;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
      }
      
      .flowise-chatbot button:hover {
        transform: scale(1.05) !important;
        box-shadow: 0 8px 30px -5px rgba(124, 58, 237, 0.4) !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(script);
      document.head.removeChild(style);
    };
  }, []);

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Learning",
      description: "Get personalized study assistance powered by advanced AI technology"
    },
    {
      icon: MessageSquare,
      title: "24/7 Support",
      description: "Ask questions anytime and get instant, intelligent responses"
    },
    {
      icon: BookOpen,
      title: "Study Resources",
      description: "Access curated learning materials and study guides"
    },
    {
      icon: Users,
      title: "Collaborative Learning",
      description: "Connect with peers and share knowledge effectively"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold gradient-text">AI Student Portal</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/login">
                <Button variant="ghost">Login</Button>
              </Link>
              <Link to="/signup">
                <Button variant="hero">Sign Up</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 text-center">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
            AI-powered Student Assistant Portal
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Enhance your learning experience with our intelligent AI assistant. Get instant help, 
            personalized study plans, and 24/7 academic support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup">
              <Button size="lg" variant="hero" className="hero-glow">
                Get Started Free
              </Button>
            </Link>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Our AI Assistant?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 text-center card-soft transition-smooth hover:scale-105">
                <feature.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 text-center">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Learning?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join thousands of students who are already using our AI assistant to excel in their studies.
          </p>
          <Link to="/signup">
            <Button size="lg" variant="hero" className="hero-glow">
              Start Learning Today
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 px-4 text-center text-muted-foreground">
        <div className="container mx-auto">
          <p>&copy; 2024 AI-powered Student Assistant Portal. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;