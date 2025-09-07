import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Brain, MessageSquare, BookOpen, Users, LogOut } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const AIChat = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    const email = localStorage.getItem("userEmail") || "";
    setIsLoggedIn(loggedIn);
    setUserEmail(email);
    
    // Redirect to landing if not logged in
    if (!loggedIn) {
      navigate("/");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userEmail");
    setIsLoggedIn(false);
    setUserEmail("");
    navigate("/");
  };

  useEffect(() => {
    // Initialize Flowise chatbot (full version)
    const script = document.createElement('script');
    script.type = 'module';
    script.textContent = `
       import Chatbot from "https://cdn.jsdelivr.net/npm/flowise-embed/dist/web.js"
    Chatbot.initFull({
        chatflowid: "c1c5856f-db84-41bc-b90f-7940c24e423e",
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
        background: hsl(var(--background)) !important;
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
      <nav className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Brain className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold gradient-text">AI Student Portal</span>
            </div>
            <div className="flex items-center space-x-3">
              {isLoggedIn ? (
                <div className="flex items-center space-x-3">
                  <span className="text-sm text-muted-foreground">Welcome, {userEmail}</span>
                  <Button variant="ghost" size="sm" onClick={handleLogout}>
                    <LogOut className="h-4 w-4 mr-2" />
                    Logout
                  </Button>
                </div>
              ) : (
                <>
                  <Link to="/login">
                    <Button variant="ghost" size="sm">Login</Button>
                  </Link>
                  <Link to="/signup">
                    <Button variant="hero" size="sm">Sign Up</Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Main AI Chat Interface */}
      <div className="flex-1 overflow-hidden">
        <div className="h-full">
          <flowise-fullchatbot className="flowise-fullchatbot"></flowise-fullchatbot>
        </div>
      </div>
    </div>
  );
};

export default AIChat;
