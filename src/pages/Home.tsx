import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Brain, MessageSquare, BookOpen, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    // Initialize Flowise chatbot (full version)
    const script = document.createElement('script');
    script.type = 'module';
    script.textContent = `
      import Chatbot from "https://cdn.jsdelivr.net/npm/flowise-embed/dist/web.js"
      Chatbot.initFull({
          chatflowid: "cceeebb6-1e2f-45dd-9c3c-dc5bc2da0cf2",
          apiHost: "http://localhost:3000",
      })
    `;
    document.head.appendChild(script);

    // Apply custom styling to flowise chatbot
    const style = document.createElement('style');
    style.textContent = `
      .flowise-fullchatbot {
        height: 100vh !important;
        width: 100% !important;
        border: none !important;
        border-radius: 0 !important;
      }
      
      .flowise-fullchatbot iframe {
        height: 100% !important;
        width: 100% !important;
        border: none !important;
        border-radius: 0 !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(script);
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="h-screen bg-background flex flex-col">
      {/* Navigation */}
      <nav className="border-b bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Brain className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold gradient-text">AI Student Portal</span>
            </div>
            <div className="flex items-center space-x-3">
              <Link to="/login">
                <Button variant="ghost" size="sm">Login</Button>
              </Link>
              <Link to="/signup">
                <Button variant="hero" size="sm">Sign Up</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main AI Chat Interface */}
      <div className="flex-1 overflow-hidden">
        <div className="h-full">
          {/* The Flowise full chatbot will be injected here */}
        </div>
      </div>
    </div>
  );
};

export default Home;