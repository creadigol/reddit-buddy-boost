
import React from 'react';
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from '../components/Sidebar';
import Dashboard from '../components/Dashboard';

const Index = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50">
        <AppSidebar />
        <main className="flex-1 flex flex-col">
          <header className="flex items-center gap-4 p-6 bg-white border-b border-gray-200">
            <SidebarTrigger className="text-gray-600 hover:bg-gray-100 p-2 rounded-md transition-colors" />
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
                  <p className="text-sm text-gray-600 mt-1">Monitor your AI assistant's performance across platforms</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-600 font-medium">Online</span>
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
