
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
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
  const location = useLocation();
  
  const menuItems = [
    {
      title: "Dashboard",
      url: "/",
      icon: BarChart3,
      badge: null,
    },
    {
      title: "Connect Reddit",
      url: "/connect-reddit",
      icon: MessageSquare,
      badge: "Setup",
    },
    {
      title: "Train AI Bot",
      url: "/train-ai",
      icon: Bot,
      badge: null,
    },
    {
      title: "Live Actions",
      url: "/live-actions",
      icon: Activity,
      badge: "12",
    },
    {
      title: "Performance",
      url: "/performance",
      icon: TrendingUp,
      badge: null,
    },
    {
      title: "Audience",
      url: "/audience",
      icon: Users,
      badge: null,
    }
  ];

  return (
    <Sidebar className="border-r border-gray-200/50 bg-white/80 backdrop-blur-sm">
      <SidebarHeader className="p-6 border-b border-gray-200/50">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-gradient-to-br from-violet-600 to-purple-600 rounded-xl shadow-lg">
            <Target className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">SocialAI</h2>
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
              {menuItems.map((item) => {
                const isActive = location.pathname === item.url;
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton 
                      asChild 
                      className={`h-10 px-3 rounded-xl transition-all duration-200 ${
                        isActive 
                          ? 'bg-gradient-to-r from-violet-50 to-purple-50 text-violet-700 border border-violet-200 shadow-sm' 
                          : 'hover:bg-gray-50 text-gray-700 hover:text-gray-900'
                      }`}
                    >
                      <Link to={item.url} className="flex items-center gap-3 w-full">
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
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4 border-t border-gray-200/50">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton 
              asChild 
              className="h-10 px-3 rounded-xl transition-all duration-200 hover:bg-gray-50 text-gray-700 hover:text-gray-900"
            >
              <Link to="/settings" className="flex items-center gap-3 w-full">
                <Settings className="h-4 w-4" />
                <span className="font-medium text-sm">Settings</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        
        <div className="mt-4 p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-green-700">System Status</span>
          </div>
          <p className="text-xs text-green-600">All systems operational</p>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
