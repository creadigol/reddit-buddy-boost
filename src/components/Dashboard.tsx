
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  MessageCircle, 
  Users, 
  TrendingUp, 
  Instagram, 
  MessageSquare,
  ArrowUpRight,
  Activity,
  Target,
  Zap,
  BarChart3
} from 'lucide-react';

const Dashboard = () => {
  // Mock data for statistics
  const stats = {
    reddit: {
      conversations: 142,
      dms: 23,
      engagement: 78,
      growth: 12
    },
    instagram: {
      conversations: 89,
      dms: 45,
      engagement: 85,
      growth: 18
    }
  };

  const StatCard = ({ icon: Icon, title, value, change, platform, color }: any) => (
    <div className="stat-card group">
      <div className="flex items-center justify-between mb-4">
        <div className={`p-3 rounded-xl ${color} group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="h-6 w-6 text-white" />
        </div>
        <Badge variant="secondary" className="text-xs">
          {platform}
        </Badge>
      </div>
      <div className="space-y-2">
        <p className="text-sm font-medium text-muted-foreground">{title}</p>
        <div className="flex items-center gap-2">
          <p className="text-3xl font-bold">{value}</p>
          <div className="flex items-center text-green-400 text-sm">
            <ArrowUpRight className="h-4 w-4" />
            {change}%
          </div>
        </div>
      </div>
    </div>
  );

  const ActivityItem = ({ platform, action, time, user }: any) => (
    <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
      <div className={`p-2 rounded-lg ${platform === 'Reddit' ? 'bg-orange-500/20' : 'bg-pink-500/20'}`}>
        {platform === 'Reddit' ? 
          <MessageSquare className="h-5 w-5 text-orange-400" /> : 
          <Instagram className="h-5 w-5 text-pink-400" />
        }
      </div>
      <div className="flex-1">
        <p className="text-sm font-medium">{action}</p>
        <p className="text-xs text-muted-foreground">@{user}</p>
      </div>
      <p className="text-xs text-muted-foreground">{time}</p>
    </div>
  );

  return (
    <div className="space-y-8 p-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 bg-clip-text text-transparent">
            Dashboard
          </h1>
          <p className="text-muted-foreground mt-2">Monitor your AI assistant's performance across all platforms</p>
        </div>
        <div className="flex items-center gap-3">
          <Badge variant="outline" className="bg-green-500/10 text-green-400 border-green-500/20">
            <Activity className="h-3 w-3 mr-1" />
            All Systems Active
          </Badge>
        </div>
      </div>

      {/* Statistics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          icon={MessageCircle}
          title="Reddit Conversations"
          value={stats.reddit.conversations}
          change={stats.reddit.growth}
          platform="Reddit"
          color="bg-gradient-to-br from-orange-500 to-red-500"
        />
        <StatCard
          icon={Users}
          title="Reddit DMs"
          value={stats.reddit.dms}
          change={stats.reddit.growth}
          platform="Reddit"
          color="bg-gradient-to-br from-orange-500 to-red-500"
        />
        <StatCard
          icon={MessageCircle}
          title="Instagram Conversations"
          value={stats.instagram.conversations}
          change={stats.instagram.growth}
          platform="Instagram"
          color="bg-gradient-to-br from-pink-500 to-purple-500"
        />
        <StatCard
          icon={Users}
          title="Instagram DMs"
          value={stats.instagram.dms}
          change={stats.instagram.growth}
          platform="Instagram"
          color="bg-gradient-to-br from-pink-500 to-purple-500"
        />
      </div>

      {/* Platform Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Reddit Analytics */}
        <Card className="glass-card border-orange-500/20">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-xl font-semibold flex items-center gap-2">
              <div className="p-2 bg-orange-500/20 rounded-lg">
                <MessageSquare className="h-5 w-5 text-orange-400" />
              </div>
              Reddit Performance
            </CardTitle>
            <TrendingUp className="h-5 w-5 text-orange-400" />
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span>Engagement Rate</span>
                <span className="font-medium">{stats.reddit.engagement}%</span>
              </div>
              <Progress value={stats.reddit.engagement} className="h-2" />
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="text-center p-3 bg-orange-500/10 rounded-lg">
                <p className="text-2xl font-bold text-orange-400">{stats.reddit.conversations}</p>
                <p className="text-xs text-muted-foreground">Total Conversations</p>
              </div>
              <div className="text-center p-3 bg-orange-500/10 rounded-lg">
                <p className="text-2xl font-bold text-orange-400">{stats.reddit.dms}</p>
                <p className="text-xs text-muted-foreground">DMs Received</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Instagram Analytics */}
        <Card className="glass-card border-pink-500/20">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-xl font-semibold flex items-center gap-2">
              <div className="p-2 bg-pink-500/20 rounded-lg">
                <Instagram className="h-5 w-5 text-pink-400" />
              </div>
              Instagram Performance
            </CardTitle>
            <TrendingUp className="h-5 w-5 text-pink-400" />
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span>Engagement Rate</span>
                <span className="font-medium">{stats.instagram.engagement}%</span>
              </div>
              <Progress value={stats.instagram.engagement} className="h-2" />
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="text-center p-3 bg-pink-500/10 rounded-lg">
                <p className="text-2xl font-bold text-pink-400">{stats.instagram.conversations}</p>
                <p className="text-xs text-muted-foreground">Total Conversations</p>
              </div>
              <div className="text-center p-3 bg-pink-500/10 rounded-lg">
                <p className="text-2xl font-bold text-pink-400">{stats.instagram.dms}</p>
                <p className="text-xs text-muted-foreground">DMs Received</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-purple-400" />
            Recent Activity
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <ActivityItem
              platform="Reddit"
              action="Replied to comment about pricing questions"
              user="techentusiast23"
              time="2 min ago"
            />
            <ActivityItem
              platform="Instagram"
              action="Engaged with story mention"
              user="designlover"
              time="5 min ago"
            />
            <ActivityItem
              platform="Reddit"
              action="Started DM conversation"
              user="startup_founder"
              time="12 min ago"
            />
            <ActivityItem
              platform="Instagram"
              action="Responded to product inquiry"
              user="creativemind"
              time="18 min ago"
            />
            <ActivityItem
              platform="Reddit"
              action="Shared helpful resource"
              user="businessowner"
              time="23 min ago"
            />
          </div>
        </CardContent>
      </Card>

      {/* Performance Overview */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5 text-purple-400" />
            Performance Overview
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center space-y-2">
              <div className="p-4 bg-blue-500/20 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                <Target className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="font-semibold">Conversion Rate</h3>
              <p className="text-3xl font-bold text-blue-400">24%</p>
              <p className="text-sm text-muted-foreground">From conversations to DMs</p>
            </div>
            <div className="text-center space-y-2">
              <div className="p-4 bg-green-500/20 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                <TrendingUp className="h-8 w-8 text-green-400" />
              </div>
              <h3 className="font-semibold">Growth Rate</h3>
              <p className="text-3xl font-bold text-green-400">+15%</p>
              <p className="text-sm text-muted-foreground">Week over week</p>
            </div>
            <div className="text-center space-y-2">
              <div className="p-4 bg-purple-500/20 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                <Activity className="h-8 w-8 text-purple-400" />
              </div>
              <h3 className="font-semibold">Response Time</h3>
              <p className="text-3xl font-bold text-purple-400">1.2s</p>
              <p className="text-sm text-muted-foreground">Average response</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
