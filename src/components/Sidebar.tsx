
import React from 'react';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { 
  BarChart3, 
  MessageSquare, 
  Bot, 
  Activity,
  Settings,
  Target,
  Users,
  TrendingUp
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const AppSidebar = () => {
  const menuItems = [
    {
      title: "Dashboard",
      url: "#",
      icon: BarChart3,
      badge: null,
      isActive: true
    },
    {
      title: "Connect Reddit",
      url: "#",
      icon: MessageSquare,
      badge: "Setup",
      isActive: false
    },
    {
      title: "Train AI Bot",
      url: "#",
      icon: Bot,
      badge: null,
      isActive: false
    },
    {
      title: "Live Actions",
      url: "#",
      icon: Activity,
      badge: "12",
      isActive: false
    },
    {
      title: "Performance",
      url: "#",
      icon: TrendingUp,
      badge: null,
      isActive: false
    },
    {
      title: "Audience",
      url: "#",
      icon: Users,
      badge: null,
      isActive: false
    }
  ];

  return (
    <Sidebar className="border-r border-gray-200 bg-white">
      <SidebarHeader className="p-6 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-indigo-600 rounded-lg">
            <Target className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900">SocialAI</h2>
            <p className="text-xs text-gray-500">AI Assistant</p>
          </div>
        </div>
      </SidebarHeader>
      
      <SidebarContent className="p-4">
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-semibold text-gray-500 mb-4 uppercase tracking-wider">
            Navigation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild 
                    className={`h-10 px-3 rounded-lg transition-colors ${
                      item.isActive 
                        ? 'bg-indigo-50 text-indigo-700 border border-indigo-200' 
                        : 'hover:bg-gray-100 text-gray-700 hover:text-gray-900'
                    }`}
                  >
                    <a href={item.url} className="flex items-center gap-3 w-full">
                      <item.icon className="h-4 w-4" />
                      <span className="font-medium text-sm">{item.title}</span>
                      {item.badge && (
                        <Badge 
                          variant="secondary" 
                          className="ml-auto text-xs bg-gray-100 text-gray-600 border-gray-200"
                        >
                          {item.badge}
                        </Badge>
                      )}
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4 border-t border-gray-200">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton 
              asChild 
              className="h-10 px-3 rounded-lg transition-colors hover:bg-gray-100 text-gray-700 hover:text-gray-900"
            >
              <a href="#" className="flex items-center gap-3 w-full">
                <Settings className="h-4 w-4" />
                <span className="font-medium text-sm">Settings</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        
        <div className="mt-4 p-3 bg-green-50 rounded-lg border border-green-200">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-sm font-medium text-green-700">System Status</span>
          </div>
          <p className="text-xs text-green-600">All systems operational</p>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
