
import React from 'react';
import Layout from '../components/Layout';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, TrendingUp, MapPin, Clock } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const Audience = () => {
  const demographicsData = [
    { name: '18-24', value: 15, color: '#8884d8' },
    { name: '25-34', value: 45, color: '#82ca9d' },
    { name: '35-44', value: 25, color: '#ffc658' },
    { name: '45+', value: 15, color: '#ff7c7c' },
  ];

  const interestData = [
    { interest: 'Entrepreneurship', percentage: 85 },
    { interest: 'Technology', percentage: 72 },
    { interest: 'Marketing', percentage: 68 },
    { interest: 'Startups', percentage: 63 },
    { interest: 'Business', percentage: 58 },
  ];

  const topFollowers = [
    { username: 'startup_guru', platform: 'reddit', engagement: 'High', location: 'San Francisco' },
    { username: 'tech_entrepreneur', platform: 'reddit', engagement: 'Medium', location: 'New York' },
    { username: 'business_coach', platform: 'instagram', engagement: 'High', location: 'London' },
    { username: 'marketing_pro', platform: 'instagram', engagement: 'Medium', location: 'Toronto' },
  ];

  return (
    <Layout 
      title="Audience Insights" 
      subtitle="Understand your audience demographics and engagement patterns"
    >
      <div className="p-6 max-w-7xl mx-auto">
        {/* Overview Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="p-6 bg-white/80 backdrop-blur-sm border border-gray-200/50 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Followers</p>
                <p className="text-2xl font-bold text-gray-900">2,847</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-white/80 backdrop-blur-sm border border-gray-200/50 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-green-100 rounded-lg">
                <TrendingUp className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Growth Rate</p>
                <p className="text-2xl font-bold text-gray-900">+12%</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-white/80 backdrop-blur-sm border border-gray-200/50 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-purple-100 rounded-lg">
                <Clock className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Avg. Session</p>
                <p className="text-2xl font-bold text-gray-900">4.2m</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-white/80 backdrop-blur-sm border border-gray-200/50 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-orange-100 rounded-lg">
                <MapPin className="h-6 w-6 text-orange-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Top Location</p>
                <p className="text-2xl font-bold text-gray-900">USA</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Charts Row */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <Card className="p-6 bg-white/80 backdrop-blur-sm border border-gray-200/50 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Age Demographics</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={demographicsData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, value }) => `${name}: ${value}%`}
                >
                  {demographicsData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </Card>

          <Card className="p-6 bg-white/80 backdrop-blur-sm border border-gray-200/50 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Interests</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={interestData} layout="horizontal">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis dataKey="interest" type="category" width={100} />
                <Tooltip />
                <Bar dataKey="percentage" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </div>

        {/* Platform Breakdown */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <Card className="p-6 bg-white/80 backdrop-blur-sm border border-gray-200/50 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Reddit Audience</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Active Followers</span>
                <span className="font-semibold">1,647</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Most Active Subreddit</span>
                <Badge className="bg-orange-100 text-orange-800">r/entrepreneur</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Average Karma</span>
                <span className="font-semibold">2,847</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Top Time Zone</span>
                <span className="font-semibold">EST (45%)</span>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-white/80 backdrop-blur-sm border border-gray-200/50 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Instagram Audience</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Followers</span>
                <span className="font-semibold">1,200</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Average Engagement</span>
                <span className="font-semibold">6.8%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Top Hashtag</span>
                <Badge className="bg-pink-100 text-pink-800">#entrepreneur</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Peak Activity</span>
                <span className="font-semibold">7-9 PM EST</span>
              </div>
            </div>
          </Card>
        </div>

        {/* Top Followers */}
        <Card className="bg-white/80 backdrop-blur-sm border border-gray-200/50 shadow-sm">
          <div className="p-6 border-b border-gray-200/50">
            <h3 className="text-lg font-semibold text-gray-900">Top Engaged Followers</h3>
          </div>
          <div className="divide-y divide-gray-200/50">
            {topFollowers.map((follower, index) => (
              <div key={index} className="p-6 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                    {follower.username.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">{follower.username}</h4>
                    <p className="text-sm text-gray-600">{follower.location}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant={follower.platform === 'reddit' ? 'default' : 'secondary'}>
                    {follower.platform}
                  </Badge>
                  <Badge variant={follower.engagement === 'High' ? 'default' : 'secondary'}>
                    {follower.engagement} Engagement
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </Layout>
  );
};

export default Audience;
