
import React from 'react';
import Tabbar from "./tabbar";
import { Logout } from '@mui/icons-material';

interface PageLayoutProps {
  title: string;
  children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ title, children }) => {
  return (
    <div className="flex flex-col h-screen">
      <header className="items-center flex justify-between py-4 text-center mx-5">
        <img src="/Images/DKlogo2.svg" alt="DIPS Kontor logo" 
          width="75"
          height="75"
         />      
        <h1 className="lg:text-3xl text-4xl">{title}</h1>
        <Logout/>
      </header>
      <main className="flex-1 overflow-y-auto px-4 py-6">
        {children}
       </main>
      <Tabbar className="bg-gray-800 text-white w-full py-4 fixed bottom-0 left-0" />
    </div>
  );
};

export default PageLayout;

