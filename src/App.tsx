import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { DesktopAndMobile } from "./screens/DesktopAndMobile/DesktopAndMobile";
import { ResponsiveLayout } from "./components/ResponsiveLayout";
import { MobileServices } from "./screens/Mobile/MobileServices";
import { MobileGallery } from "./screens/Mobile/MobileGallery";
import { MobileContact } from "./screens/Mobile/MobileContact";
import { DesktopServices } from "./screens/Desktop/DesktopServices";
import { DesktopGallery } from "./screens/Desktop/DesktopGallery";
import { DesktopContact } from "./screens/Desktop/DesktopContact";

export const App: React.FC = () => {
  const location = useLocation();
  const isFigmaRoute = location.pathname === "/figma";

  // If we're on the /figma route, just show the original DesktopAndMobile component
  if (isFigmaRoute) {
    return <DesktopAndMobile />;
  }

  // Otherwise, show the new responsive layout with routing
  return (
    <div className="min-h-screen w-full">
      <Routes>
        <Route path="/" element={<ResponsiveLayout />} />
        <Route 
          path="/services" 
          element={
            <ResponsiveLayout 
              mobileComponent={<MobileServices />} 
              desktopComponent={<DesktopServices />} 
            />
          } 
        />
        <Route 
          path="/gallery" 
          element={
            <ResponsiveLayout 
              mobileComponent={<MobileGallery />} 
              desktopComponent={<DesktopGallery />} 
            />
          } 
        />
        <Route 
          path="/contact" 
          element={
            <ResponsiveLayout 
              mobileComponent={<MobileContact />} 
              desktopComponent={<DesktopContact />} 
            />
          } 
        />
      </Routes>
    </div>
  );
};
