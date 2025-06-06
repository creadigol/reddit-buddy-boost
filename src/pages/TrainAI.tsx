
import React, { useState } from 'react';
import Layout from '../components/Layout';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Bot, Plus, X } from 'lucide-react';

const TrainAI = () => {
  const [businessName, setBusinessName] = useState('');
  const [category, setCategory] = useState('');
  const [industry, setIndustry] = useState('');
  const [customSubreddits, setCustomSubreddits] = useState<string[]>([]);
  const [customKeywords, setCustomKeywords] = useState<string[]>([]);
  const [newSubreddit, setNewSubreddit] = useState('');
  const [newKeyword, setNewKeyword] = useState('');
  const [aiPrompt, setAiPrompt] = useState('');

  const predefinedSubreddits = ['entrepreneur', 'startups', 'business', 'marketing', 'technology'];
  const predefinedKeywords = ['startup', 'business', 'marketing', 'growth', 'strategy'];

  const addCustomSubreddit = () => {
    if (newSubreddit.trim() && !customSubreddits.includes(newSubreddit.trim())) {
      setCustomSubreddits([...customSubreddits, newSubreddit.trim()]);
      setNewSubreddit('');
    }
  };

  const addCustomKeyword = () => {
    if (newKeyword.trim() && !customKeywords.includes(newKeyword.trim())) {
      setCustomKeywords([...customKeywords, newKeyword.trim()]);
      setNewKeyword('');
    }
  };

  const removeCustomSubreddit = (subreddit: string) => {
    setCustomSubreddits(customSubreddits.filter(s => s !== subreddit));
  };

  const removeCustomKeyword = (keyword: string) => {
    setCustomKeywords(customKeywords.filter(k => k !== keyword));
  };

  const handleTrainBot = () => {
    console.log('Training AI bot...', {
      businessName,
      category,
      industry,
      subreddits: [...predefinedSubreddits, ...customSubreddits],
      keywords: [...predefinedKeywords, ...customKeywords],
      aiPrompt
    });
  };

  return (
    <Layout 
      title="Train AI Bot" 
      subtitle="Configure your AI assistant to represent your business perfectly"
    >
      <div className="p-6 max-w-4xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Training Form */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="p-6 bg-white/80 backdrop-blur-sm border border-gray-200/50 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Bot className="h-5 w-5 text-purple-600" />
                </div>
                <h2 className="text-xl font-semibold text-gray-900">Business Information</h2>
              </div>
              
              <div className="space-y-4">
                <div>
                  <Label htmlFor="businessName" className="text-sm font-medium text-gray-700">Business Name</Label>
                  <Input
                    id="businessName"
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    placeholder="Enter your business name"
                    className="mt-1"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="category" className="text-sm font-medium text-gray-700">Category</Label>
                    <Input
                      id="category"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      placeholder="e.g., SaaS, E-commerce"
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="industry" className="text-sm font-medium text-gray-700">Industry</Label>
                    <Input
                      id="industry"
                      value={industry}
                      onChange={(e) => setIndustry(e.target.value)}
                      placeholder="e.g., Technology, Retail"
                      className="mt-1"
                    />
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-white/80 backdrop-blur-sm border border-gray-200/50 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Target Subreddits</h3>
              
              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-700 mb-2">Recommended Subreddits</h4>
                <div className="flex flex-wrap gap-2">
                  {predefinedSubreddits.map(subreddit => (
                    <Badge key={subreddit} variant="secondary" className="bg-blue-50 text-blue-700 border-blue-200">
                      r/{subreddit}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-2">Add Custom Subreddits</h4>
                <div className="flex gap-2 mb-2">
                  <Input
                    value={newSubreddit}
                    onChange={(e) => setNewSubreddit(e.target.value)}
                    placeholder="Enter subreddit name"
                    onKeyPress={(e) => e.key === 'Enter' && addCustomSubreddit()}
                  />
                  <Button onClick={addCustomSubreddit} size="sm">
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                
                {customSubreddits.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {customSubreddits.map(subreddit => (
                      <Badge key={subreddit} variant="outline" className="bg-green-50 text-green-700 border-green-200">
                        r/{subreddit}
                        <button
                          onClick={() => removeCustomSubreddit(subreddit)}
                          className="ml-1 hover:text-red-600"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
            </Card>

            <Card className="p-6 bg-white/80 backdrop-blur-sm border border-gray-200/50 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Target Keywords</h3>
              
              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-700 mb-2">Recommended Keywords</h4>
                <div className="flex flex-wrap gap-2">
                  {predefinedKeywords.map(keyword => (
                    <Badge key={keyword} variant="secondary" className="bg-orange-50 text-orange-700 border-orange-200">
                      {keyword}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-2">Add Custom Keywords</h4>
                <div className="flex gap-2 mb-2">
                  <Input
                    value={newKeyword}
                    onChange={(e) => setNewKeyword(e.target.value)}
                    placeholder="Enter keyword"
                    onKeyPress={(e) => e.key === 'Enter' && addCustomKeyword()}
                  />
                  <Button onClick={addCustomKeyword} size="sm">
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                
                {customKeywords.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {customKeywords.map(keyword => (
                      <Badge key={keyword} variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
                        {keyword}
                        <button
                          onClick={() => removeCustomKeyword(keyword)}
                          className="ml-1 hover:text-red-600"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
            </Card>

            <Card className="p-6 bg-white/80 backdrop-blur-sm border border-gray-200/50 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">AI Personality & Instructions</h3>
              <div>
                <Label htmlFor="aiPrompt" className="text-sm font-medium text-gray-700">
                  How should your AI assistant respond?
                </Label>
                <Textarea
                  id="aiPrompt"
                  value={aiPrompt}
                  onChange={(e) => setAiPrompt(e.target.value)}
                  placeholder="Describe how you want your AI to communicate. For example: 'Be helpful and professional, provide practical advice, and always mention our experience in the industry when relevant.'"
                  className="mt-1 min-h-[120px]"
                />
              </div>
            </Card>
          </div>

          {/* Progress & Actions */}
          <div className="space-y-6">
            <Card className="p-6 bg-white/80 backdrop-blur-sm border border-gray-200/50 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Training Progress</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Business Info</span>
                  <Badge variant={businessName && category && industry ? "default" : "secondary"}>
                    {businessName && category && industry ? "Complete" : "Pending"}
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Subreddits</span>
                  <Badge variant="default">Ready</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Keywords</span>
                  <Badge variant="default">Ready</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">AI Instructions</span>
                  <Badge variant={aiPrompt ? "default" : "secondary"}>
                    {aiPrompt ? "Complete" : "Pending"}
                  </Badge>
                </div>
              </div>
            </Card>

            <Button 
              onClick={handleTrainBot}
              className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-medium py-3"
              disabled={!businessName || !category || !industry || !aiPrompt}
            >
              Train AI Assistant
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TrainAI;
