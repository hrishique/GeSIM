import React from "react";
import GlobalNav from "./GlobalNav";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { ShieldCheck, Wallet, User } from "lucide-react";
import TopMenu from "./TopMenu";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const isLandingPage = location.pathname === "/";
  const showGlobalNav =
    !isLandingPage && location.pathname !== "/connect-wallet";

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <div className="fixed top-0 left-0 w-full h-full bg-gradient-to-br from-background via-background to-background/80 -z-10" />


      <main
        className={`flex-grow container mx-auto ${
          showGlobalNav ? "pb-20" : "pb-0"
        } pt-1 relative z-0`}
      >
        {/* {children} */}
        <Outlet />
      </main>

     
    </div>
  );
};

export default Layout;
