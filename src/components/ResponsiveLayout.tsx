import React from "react";
import { useMediaQuery } from "react-responsive";
import { MobileHome } from "../screens/Mobile/MobileHome";
import { DesktopHome } from "../screens/Desktop/DesktopHome";

interface ResponsiveLayoutProps {
  mobileComponent?: React.ReactNode;
  desktopComponent?: React.ReactNode;
}

export const ResponsiveLayout: React.FC<ResponsiveLayoutProps> = ({ 
  mobileComponent, 
  desktopComponent 
}) => {
  const isDesktop = useMediaQuery({ minWidth: 768 });

  // If specific components are provided, use them
  if (mobileComponent && desktopComponent) {
    return isDesktop ? <>{desktopComponent}</> : <>{mobileComponent}</>;
  }

  // Otherwise, default to home components
  return isDesktop ? <DesktopHome /> : <MobileHome />;
};
