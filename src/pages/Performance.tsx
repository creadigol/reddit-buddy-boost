
import React from 'react';
import Layout from '../components/Layout';
import { Card } from '@/components/ui/card';
import { TrendingUp, TrendingDown, Users, MessageSquare, Heart, Target } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

const Performance = () => {
  const engagementData = [
    { name: 'Mon', reddit: 12, instagram: 8 },
    { name: 'Tue', reddit: 15, instagram: 12 },
    { name: 'Wed', reddit: 8, instagram: 15 },
    { name: 'Thu', reddit: 18, instagram: 10 },
    { name: 'Fri', reddit: 22, instagram: 18 },
    { name: 'Sat', reddit: 16, instagram: 22 },
    { name: 'Sun', reddit: 14, instagram: 14 },
  ];

  const platformData = [
    { platform: 'Reddit', conversations: 45, upvotes: 234, comments: 67 },
    { platform: 'Instagram', conversations: 32, likes: 156, comments: 43 },
  ];

  return (
    <Layout 
      title="Performance Analytics" 
      subtitle="Track your AI assistant's performance and engagement metrics"
    >
      <div className="p-6 max-w-7xl mx-auto">
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="p-6 bg-white/80 backdrop-blur-sm border border-gray-200/50 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Conversations</p>
                <p className="text-2xl font-bold text-gray-900">77</p>
                <div className="flex items-center gap-1 mt-1">
                  <TrendingUp className="h-4 w-4 text-green-600" />
                  <span className="text-sm text-green-600">+12% from last week</span>
                </div>
              </div>
              <div className="p-3 bg-blue-100 rounded-lg">
                <MessageSquare className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-white/80 backdrop-blur-sm border border-gray-200/50 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Engagement Rate</p>
                <p className="text-2xl font-bold text-gray-900">8.4%</p>
                <div className="flex items-center gap-1 mt-1">
                  <TrendingUp className="h-4 w-4 text-green-600" />
                  <span className="text-sm text-green-600">+2.1% improvement</span>
                </div>
              </div>
              <div className="p-3 bg-green-100 rounded-lg">
                <Target className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-white/80 backdrop-blur-sm border border-gray-200/50 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Upvotes/Likes</p>
                <p className="text-2xl font-bold text-gray-900">390</p>
                <div className="flex items-center gap-1 mt-1">
                  <TrendingDown className="h-4 w-4 text-red-600" />
                  <span className="text-sm text-red-600">-5% from last week</span>
                </div>
              </div>
              <div className="p-3 bg-red-100 rounded-lg">
                <Heart className="h-6 w-6 text-red-600" />
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-white/80 backdrop-blur-sm border border-gray-200/50 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Reach</p>
                <p className="text-2xl font-bold text-gray-900">2.1K</p>
                <div className="flex items-center gap-1 mt-1">
                  <TrendingUp className="h-4 w-4 text-green-600" />
                  <span className="text-sm text-green-600">+18% growth</span>
                </div>
              </div>
              <div className="p-3 bg-purple-100 rounded-lg">
                <Users className="h-6 w-6 text-purple-600" />
              </div>
            </div>
          </Card>
        </div>

        {/* Charts */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <Card className="p-6 bg-white/80 backdrop-blur-sm border border-gray-200/50 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Weekly Engagement Trends</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={engagementData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="reddit" stroke="#ff6b35" strokeWidth={2} />
                <Line type="monotone" dataKey="instagram" stroke="#e91e63" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </Card>

          <Card className="p-6 bg-white/80 backdrop-blur-sm border border-gray-200/50 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Platform Comparison</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={platformData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="platform" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="conversations" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </div>

        {/* Platform Breakdown */}
        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="p-6 bg-white/80 backdrop-blur-sm border border-gray-200/50 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Reddit Performance</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Total Conversations</span>
                <span className="font-semibold">45</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Upvotes Received</span>
                <span className="font-semibold">234</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Comments Generated</span>
                <span className="font-semibold">67</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Average Response Time</span>
                <span className="font-semibold">3.2 minutes</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Most Active Subreddit</span>
                <span className="font-semibold">r/entrepreneur</span>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-white/80 backdrop-blur-sm border border-gray-200/50 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Instagram Performance</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Total Posts</span>
                <span className="font-semibold">32</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Likes Received</span>
                <span className="font-semibold">156</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Comments Received</span>
                <span className="font-semibold">43</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Average Engagement</span>
                <span className="font-semibold">6.2%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Best Performing Post</span>
                <span className="font-semibold">Startup Tips #3</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Performance;
