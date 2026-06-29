import React from "react";

const Logo = ({ size = 70, variant = "primary" }) => (
  <img
    src={"/images/logo/main-logo.png"}
    alt="Indori Sarafa Logo"
    width={size}
    height={size}
    className="object-contain"
    style={{ height: size, width: size }}
    data-testid="brand-logo"
  />
);

export default Logo;