import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-border/50">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-muted-foreground flex items-center justify-center gap-2">
          Made with <Heart className="h-4 w-4 text-primary fill-primary" /> by Madhav Singhal
        </p>
        <p className="text-sm text-muted-foreground/70 mt-2">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
