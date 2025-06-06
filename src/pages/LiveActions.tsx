
import React from 'react';
import Layout from '../components/Layout';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Activity, MessageSquare, ThumbsUp, Clock } from 'lucide-react';

const LiveActions = () => {
  const actions = [
    {
      id: 1,
      type: 'reply',
      platform: 'reddit',
      subreddit: 'entrepreneur',
      question: 'How do I validate my startup idea before building a product?',
      botReply: 'Great question! Here are some proven methods to validate your startup idea: 1) Conduct customer interviews with potential users 2) Create a landing page to gauge interest 3) Run small-scale surveys...',
      timestamp: '2 minutes ago',
      upvotes: 5,
      comments: 2
    },
    {
      id: 2,
      type: 'reply',
      platform: 'reddit',
      subreddit: 'startups',
      question: 'What are the best marketing strategies for early-stage startups?',
      botReply: 'For early-stage startups, focus on these cost-effective strategies: 1) Content marketing to establish thought leadership 2) Social media engagement with your target audience 3) Networking at industry events...',
      timestamp: '15 minutes ago',
      upvotes: 12,
      comments: 4
    },
    {
      id: 3,
      type: 'reply',
      platform: 'reddit',
      subreddit: 'business',
      question: 'How to handle difficult customers in a small business?',
      botReply: 'Dealing with difficult customers requires patience and strategy: 1) Listen actively to understand their concerns 2) Stay calm and professional 3) Offer solutions rather than excuses...',
      timestamp: '45 minutes ago',
      upvotes: 8,
      comments: 6
    }
  ];

  return (
    <Layout 
      title="Live Actions" 
      subtitle="Real-time activity from your AI assistant across platforms"
    >
      <div className="p-6 max-w-6xl mx-auto">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card className="p-4 bg-white/80 backdrop-blur-sm border border-gray-200/50 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Activity className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Actions Today</p>
                <p className="text-xl font-bold text-gray-900">12</p>
              </div>
            </div>
          </Card>

          <Card className="p-4 bg-white/80 backdrop-blur-sm border border-gray-200/50 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-100 rounded-lg">
                <MessageSquare className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Replies Sent</p>
                <p className="text-xl font-bold text-gray-900">8</p>
              </div>
            </div>
          </Card>

          <Card className="p-4 bg-white/80 backdrop-blur-sm border border-gray-200/50 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-orange-100 rounded-lg">
                <ThumbsUp className="h-5 w-5 text-orange-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Upvotes</p>
                <p className="text-xl font-bold text-gray-900">47</p>
              </div>
            </div>
          </Card>

          <Card className="p-4 bg-white/80 backdrop-blur-sm border border-gray-200/50 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Clock className="h-5 w-5 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Avg Response</p>
                <p className="text-xl font-bold text-gray-900">3.2m</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Activity Feed */}
        <Card className="bg-white/80 backdrop-blur-sm border border-gray-200/50 shadow-sm">
          <div className="p-6 border-b border-gray-200/50">
            <h2 className="text-lg font-semibold text-gray-900">Recent Activity</h2>
          </div>
          
          <div className="divide-y divide-gray-200/50">
            {actions.map((action) => (
              <div key={action.id} className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-orange-100 rounded-lg flex-shrink-0">
                    <MessageSquare className="h-5 w-5 text-orange-600" />
                  </div>
                  
                  <div className="flex-1 space-y-3">
                    <div className="flex items-center gap-2 flex-wrap">
                      <Badge className="bg-orange-100 text-orange-800 border-orange-200">
                        r/{action.subreddit}
                      </Badge>
                      <span className="text-sm text-gray-500">{action.timestamp}</span>
                    </div>
                    
                    <div>
                      <h3 className="font-medium text-gray-900 mb-2">Original Question:</h3>
                      <p className="text-gray-700 bg-gray-50 p-3 rounded-lg text-sm">{action.question}</p>
                    </div>
                    
                    <div>
                      <h3 className="font-medium text-gray-900 mb-2">AI Response:</h3>
                      <p className="text-gray-700 bg-blue-50 p-3 rounded-lg text-sm">{action.botReply}</p>
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <ThumbsUp className="h-4 w-4" />
                        <span>{action.upvotes} upvotes</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageSquare className="h-4 w-4" />
                        <span>{action.comments} comments</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </Layout>
  );
};

export default LiveActions;
