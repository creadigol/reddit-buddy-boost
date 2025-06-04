
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
  Instagram, 
  Bot, 
  Heart,
  Activity,
  Settings,
  Zap,
  Target,
  Users
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
      title: "Preferred Questions",
      url: "#",
      icon: Heart,
      badge: "42",
      isActive: false
    },
    {
      title: "Live Actions",
      url: "#",
      icon: Activity,
      badge: "New",
      isActive: false
    },
    {
      title: "Instagram Posts",
      url: "#",
      icon: Instagram,
      badge: null,
      isActive: false
    }
  ];

  const analyticsItems = [
    {
      title: "Performance",
      url: "#",
      icon: Target,
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
    <Sidebar className="border-r border-white/10">
      <SidebarHeader className="p-6 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl">
            <Zap className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-bold gradient-text">SocialAI</h2>
            <p className="text-xs text-muted-foreground">AI Assistant Hub</p>
          </div>
        </div>
      </SidebarHeader>
      
      <SidebarContent className="p-4">
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-semibold text-muted-foreground mb-4">
            MAIN NAVIGATION
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild 
                    className={`h-12 px-4 rounded-xl transition-all duration-200 ${
                      item.isActive 
                        ? 'bg-gradient-to-r from-purple-500/20 to-purple-600/20 text-purple-400 border border-purple-500/30' 
                        : 'hover:bg-white/10 text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    <a href={item.url} className="flex items-center gap-3 w-full">
                      <item.icon className="h-5 w-5" />
                      <span className="font-medium">{item.title}</span>
                      {item.badge && (
                        <Badge 
                          variant="secondary" 
                          className="ml-auto text-xs bg-purple-500/20 text-purple-400 border-purple-500/30"
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

        <SidebarGroup className="mt-8">
          <SidebarGroupLabel className="text-xs font-semibold text-muted-foreground mb-4">
            ANALYTICS
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
              {analyticsItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild 
                    className="h-12 px-4 rounded-xl transition-all duration-200 hover:bg-white/10 text-muted-foreground hover:text-foreground"
                  >
                    <a href={item.url} className="flex items-center gap-3 w-full">
                      <item.icon className="h-5 w-5" />
                      <span className="font-medium">{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4 border-t border-white/10">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton 
              asChild 
              className="h-12 px-4 rounded-xl transition-all duration-200 hover:bg-white/10 text-muted-foreground hover:text-foreground"
            >
              <a href="#" className="flex items-center gap-3 w-full">
                <Settings className="h-5 w-5" />
                <span className="font-medium">Settings</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        
        <div className="mt-4 p-4 bg-gradient-to-br from-purple-500/10 to-purple-600/10 rounded-xl border border-purple-500/20">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-green-400">AI Status</span>
          </div>
          <p className="text-xs text-muted-foreground">All systems operational</p>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
