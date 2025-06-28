import React from "react";

interface HeaderProps {
  isMobile?: boolean;
}

const Footer = ({}: HeaderProps) => {
  return (
    <footer className=" border-t py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="gradientText">Six Teal</h3>
            <p className="text-muted-foreground">
              Your futuristic shopping destination for the latest in tech,
              fashion, and knowledge.
            </p>
          </div>
          <div>
            <h4 className="text-foreground font-semibold mb-4">Categories</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Clothing</li>
              <li>Electronics</li>
              <li>Books</li>
            </ul>
          </div>
          <div>
            <h4 className="text-foreground font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Help Center</li>
              <li>Returns</li>
              <li>Shipping Info</li>
            </ul>
          </div>
          <div>
            <h4 className="text-foreground font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Twitter</li>
              <li>Instagram</li>
              <li>Discord</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-purple-500/20 mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 NeonShop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
