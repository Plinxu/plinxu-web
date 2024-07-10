
import React, { ReactNode } from "react";

function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen min-w-full bg-background max-h-screen">
      <main className="flex w-full flex-grow h-full items-center justify-center">{children}</main>
    </div>
  );
}

export default Layout;
