
import React from 'react';
import Tabbar from "./tabbar";

interface PageLayoutProps {
  title: string;
  children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ title, children }) => {
  return (
    <div className="flex flex-col h-screen">
      <header className="w-full py-4 text-center">
        <h1 className="lg:text-3xl text-4xl">{title}</h1>
      </header>
      <main className="flex-1 overflow-y-auto px-4 py-6">
        {children}
       </main>
      <Tabbar className="bg-gray-800 text-white w-full py-4 fixed bottom-0 left-0" />
    </div>
  );
};

export default PageLayout;

