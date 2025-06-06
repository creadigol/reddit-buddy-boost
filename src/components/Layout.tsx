
import React from 'react';
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from './Sidebar';

interface LayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
}

const Layout = ({ children, title, subtitle }: LayoutProps) => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <AppSidebar />
        <main className="flex-1 flex flex-col">
          <header className="flex items-center gap-4 p-6 bg-white/80 backdrop-blur-sm border-b border-gray-200/50">
            <SidebarTrigger className="text-gray-600 hover:bg-gray-100 p-2 rounded-md transition-colors" />
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">{title}</h1>
                  {subtitle && <p className="text-sm text-gray-600 mt-1">{subtitle}</p>}
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-gray-600 font-medium">Online</span>
                </div>
              </div>
            </div>
          </header>
          <div className="flex-1 overflow-auto">
            {children}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Layout;
