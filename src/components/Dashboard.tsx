
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  MessageCircle, 
  Users, 
  TrendingUp, 
  TrendingDown,
  ArrowUpRight,
  Activity,
  BarChart3,
  MessageSquare
} from 'lucide-react';

const Dashboard = () => {
  // Enhanced mock data for statistics
  const platformStats = {
    reddit: {
      totalConversations: 847,
      totalDMs: 156,
      conversionRate: 18.4, // percentage of conversations that led to DMs
      growthRate: 12.5,
      weeklyGrowth: '+89 conversations',
      avgResponseTime: '2.3 min',
      engagement: 78
    },
    instagram: {
      totalConversations: 623,
      totalDMs: 234,
      conversionRate: 37.6,
      growthRate: 8.2,
      weeklyGrowth: '+52 conversations',
      avgResponseTime: '1.8 min',
      engagement: 85
    }
  };

  const totalStats = {
    conversations: platformStats.reddit.totalConversations + platformStats.instagram.totalConversations,
    dms: platformStats.reddit.totalDMs + platformStats.instagram.totalDMs,
    avgConversionRate: ((platformStats.reddit.conversionRate + platformStats.instagram.conversionRate) / 2).toFixed(1)
  };

  const MetricCard = ({ title, value, subtitle, change, trend, icon: Icon, platform }: any) => (
    <Card className="metric-card">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className={`p-2 rounded-lg ${platform === 'reddit' ? 'bg-orange-50' : platform === 'instagram' ? 'bg-pink-50' : 'bg-indigo-50'}`}>
            <Icon className={`h-5 w-5 ${platform === 'reddit' ? 'text-orange-600' : platform === 'instagram' ? 'text-pink-600' : 'text-indigo-600'}`} />
          </div>
          {platform && (
            <Badge className={`platform-badge ${platform}`}>
              {platform === 'reddit' ? 'Reddit' : 'Instagram'}
            </Badge>
          )}
        </div>
        <div className="space-y-2">
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <div className="flex items-baseline gap-2">
            <p className="text-3xl font-bold text-gray-900">{value}</p>
            {change && (
              <div className={`flex items-center text-sm ${trend === 'up' ? 'text-green-600' : 'text-red-500'}`}>
                {trend === 'up' ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
                {change}%
              </div>
            )}
          </div>
          {subtitle && <p className="text-xs text-gray-500">{subtitle}</p>}
        </div>
      </CardContent>
    </Card>
  );

  const ActivityItem = ({ platform, action, time, metric }: any) => (
    <div className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg bg-white hover:bg-gray-50 transition-colors">
      <div className={`p-2 rounded-lg ${platform === 'Reddit' ? 'bg-orange-50' : 'bg-pink-50'}`}>
        {platform === 'Reddit' ? 
          <MessageSquare className="h-4 w-4 text-orange-600" /> : 
          <MessageCircle className="h-4 w-4 text-pink-600" />
        }
      </div>
      <div className="flex-1">
        <p className="text-sm font-medium text-gray-900">{action}</p>
        <p className="text-xs text-gray-500">{time}</p>
      </div>
      {metric && (
        <div className="text-right">
          <p className="text-sm font-semibold text-gray-900">{metric}</p>
          <p className="text-xs text-gray-500">Engagement</p>
        </div>
      )}
    </div>
  );

  return (
    <div className="space-y-8 p-6 bg-gray-50">
      {/* Overview Stats */}
      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Overview</h2>
          <p className="text-sm text-gray-600">Total performance across all platforms</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <MetricCard
            icon={MessageCircle}
            title="Total Conversations"
            value={totalStats.conversations.toLocaleString()}
            subtitle="Across all platforms"
            change={10.2}
            trend="up"
          />
          <MetricCard
            icon={Users}
            title="Total DMs Generated"
            value={totalStats.dms.toLocaleString()}
            subtitle="Private conversations"
            change={15.8}
            trend="up"
          />
          <MetricCard
            icon={TrendingUp}
            title="Avg Conversion Rate"
            value={`${totalStats.avgConversionRate}%`}
            subtitle="Conversations to DMs"
            change={2.3}
            trend="up"
          />
        </div>
      </div>

      {/* Platform Performance */}
      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Platform Performance</h2>
          <p className="text-sm text-gray-600">Detailed breakdown by platform</p>
        </div>

        {/* Reddit Stats */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-gray-900 flex items-center gap-2">
            <div className="p-1 bg-orange-50 rounded">
              <MessageSquare className="h-4 w-4 text-orange-600" />
            </div>
            Reddit Analytics
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <MetricCard
              icon={MessageCircle}
              title="Conversations"
              value={platformStats.reddit.totalConversations.toLocaleString()}
              subtitle={platformStats.reddit.weeklyGrowth}
              change={platformStats.reddit.growthRate}
              trend="up"
              platform="reddit"
            />
            <MetricCard
              icon={Users}
              title="DMs Generated"
              value={platformStats.reddit.totalDMs}
              subtitle={`${platformStats.reddit.conversionRate}% conversion rate`}
              change={8.2}
              trend="up"
              platform="reddit"
            />
            <MetricCard
              icon={Activity}
              title="Avg Response Time"
              value={platformStats.reddit.avgResponseTime}
              subtitle="Getting faster"
              change={5.1}
              trend="up"
              platform="reddit"
            />
            <MetricCard
              icon={BarChart3}
              title="Engagement Rate"
              value={`${platformStats.reddit.engagement}%`}
              subtitle="Monthly average"
              change={3.4}
              trend="up"
              platform="reddit"
            />
          </div>
        </div>

        {/* Instagram Stats */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-gray-900 flex items-center gap-2">
            <div className="p-1 bg-pink-50 rounded">
              <MessageCircle className="h-4 w-4 text-pink-600" />
            </div>
            Instagram Analytics
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <MetricCard
              icon={MessageCircle}
              title="Conversations"
              value={platformStats.instagram.totalConversations.toLocaleString()}
              subtitle={platformStats.instagram.weeklyGrowth}
              change={platformStats.instagram.growthRate}
              trend="up"
              platform="instagram"
            />
            <MetricCard
              icon={Users}
              title="DMs Generated"
              value={platformStats.instagram.totalDMs}
              subtitle={`${platformStats.instagram.conversionRate}% conversion rate`}
              change={12.7}
              trend="up"
              platform="instagram"
            />
            <MetricCard
              icon={Activity}
              title="Avg Response Time"
              value={platformStats.instagram.avgResponseTime}
              subtitle="Excellent performance"
              change={7.3}
              trend="up"
              platform="instagram"
            />
            <MetricCard
              icon={BarChart3}
              title="Engagement Rate"
              value={`${platformStats.instagram.engagement}%`}
              subtitle="Monthly average"
              change={4.1}
              trend="up"
              platform="instagram"
            />
          </div>
        </div>
      </div>

      {/* Conversion Funnel */}
      <Card className="bg-white border border-gray-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-gray-900">
            <TrendingUp className="h-5 w-5 text-indigo-600" />
            Conversion Funnel
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="font-medium text-gray-900">Reddit Performance</h4>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Conversations Started</span>
                  <span className="font-medium">{platformStats.reddit.totalConversations}</span>
                </div>
                <Progress value={100} className="h-2 bg-gray-200" />
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Led to DMs</span>
                  <span className="font-medium">{platformStats.reddit.totalDMs}</span>
                </div>
                <Progress value={platformStats.reddit.conversionRate} className="h-2 bg-gray-200" />
                <p className="text-xs text-gray-500">{platformStats.reddit.conversionRate}% conversion rate</p>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-medium text-gray-900">Instagram Performance</h4>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Conversations Started</span>
                  <span className="font-medium">{platformStats.instagram.totalConversations}</span>
                </div>
                <Progress value={100} className="h-2 bg-gray-200" />
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Led to DMs</span>
                  <span className="font-medium">{platformStats.instagram.totalDMs}</span>
                </div>
                <Progress value={platformStats.instagram.conversionRate} className="h-2 bg-gray-200" />
                <p className="text-xs text-gray-500">{platformStats.instagram.conversionRate}% conversion rate</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Recent Activity */}
      <Card className="bg-white border border-gray-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-gray-900">
            <Activity className="h-5 w-5 text-indigo-600" />
            Recent Activity
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <ActivityItem
              platform="Reddit"
              action="Generated 3 new DMs from pricing discussion"
              time="2 minutes ago"
              metric="94%"
            />
            <ActivityItem
              platform="Instagram"
              action="Engaged with 5 stories, 2 led to conversations"
              time="8 minutes ago"
              metric="87%"
            />
            <ActivityItem
              platform="Reddit"
              action="Replied to 12 comments in targeted subreddits"
              time="15 minutes ago"
              metric="91%"
            />
            <ActivityItem
              platform="Instagram"
              action="Responded to 4 DMs about product features"
              time="23 minutes ago"
              metric="89%"
            />
            <ActivityItem
              platform="Reddit"
              action="Shared helpful resources in 3 communities"
              time="31 minutes ago"
              metric="85%"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
