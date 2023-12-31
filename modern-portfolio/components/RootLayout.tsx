import React from "react";
import Header from "./Header"; // Import your header component

const RootLayout: React.FC<any> = ({ children }) => {
  return (
    <div>
      <main>{children}</main>
    </div>
  );
};

export default RootLayout;