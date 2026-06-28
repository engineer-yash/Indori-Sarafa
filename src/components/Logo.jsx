import React from "react";

const Logo = ({ size = 56, variant = "primary" }) => {
  const isDark = variant === "dark";
  return (
    <img
      src={isDark ? "/images/logo/logo-dark.svg" : "/images/logo/logo.svg"}
      alt="Indori Sarafa Logo"
      width={size}
      height={size}
      className="object-contain"
      style={{ height: size, width: size }}
      data-testid="brand-logo"
    />
  );
};

export default Logo;