import React from "react";
import { MobileHome } from "../Mobile/MobileHome";
import { MobileServices } from "../Mobile/MobileServices";
import { MobileGallery } from "../Mobile/MobileGallery";
import { MobileContact } from "../Mobile/MobileContact";
import { DesktopHome } from "../Desktop/DesktopHome";
import { DesktopServices } from "../Desktop/DesktopServices";
import { DesktopGallery } from "../Desktop/DesktopGallery";
import { DesktopContact } from "../Desktop/DesktopContact";

export const DesktopAndMobile = (): JSX.Element => {
  return (
    <div
      className="inline-flex items-start gap-[180px] relative w-full min-w-[8460px] min-h-[9379px]"
      data-model-id="2129:4246"
    >
      {/* Mobile Screens */}
      <MobileHome />
      <MobileServices />
      <MobileGallery />
      <MobileContact />

      {/* Desktop Screens */}
      <DesktopHome />
      <DesktopServices />
      <DesktopGallery />
      <DesktopContact />
    </div>
  );
};
