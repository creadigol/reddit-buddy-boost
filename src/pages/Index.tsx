
import React from 'react';
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from '../components/Sidebar';
import Dashboard from '../components/Dashboard';

const Index = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
        <AppSidebar />
        <main className="flex-1 flex flex-col">
          <header className="flex items-center gap-4 p-6 border-b border-white/10 bg-black/20 backdrop-blur-xl">
            <SidebarTrigger className="text-white hover:bg-white/10 p-2 rounded-lg transition-colors" />
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-xl font-semibold">Welcome back!</h1>
                  <p className="text-sm text-muted-foreground">Here's what your AI assistant has been up to</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm text-green-400 font-medium">Live</span>
                </div>
              </div>
            </div>
          </header>
          <div className="flex-1 overflow-auto">
            <Dashboard />
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Index;
