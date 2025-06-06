
import React, { useState } from 'react';
import Layout from '../components/Layout';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { MessageSquare, Shield, Zap } from 'lucide-react';

const ConnectReddit = () => {
  const [clientId, setClientId] = useState('');
  const [clientSecret, setClientSecret] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleConnect = () => {
    console.log('Connecting Reddit account...', { clientId, clientSecret, username });
  };

  return (
    <Layout 
      title="Connect Reddit" 
      subtitle="Link your Reddit account to start automating conversations"
    >
      <div className="p-6 max-w-4xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Connection Form */}
          <Card className="p-6 bg-white/80 backdrop-blur-sm border border-gray-200/50 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-orange-100 rounded-lg">
                <MessageSquare className="h-5 w-5 text-orange-600" />
              </div>
              <h2 className="text-xl font-semibold text-gray-900">Reddit API Configuration</h2>
            </div>
            
            <div className="space-y-4">
              <div>
                <Label htmlFor="clientId" className="text-sm font-medium text-gray-700">Client ID</Label>
                <Input
                  id="clientId"
                  value={clientId}
                  onChange={(e) => setClientId(e.target.value)}
                  placeholder="Enter your Reddit app Client ID"
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="clientSecret" className="text-sm font-medium text-gray-700">Client Secret</Label>
                <Input
                  id="clientSecret"
                  type="password"
                  value={clientSecret}
                  onChange={(e) => setClientSecret(e.target.value)}
                  placeholder="Enter your Reddit app Client Secret"
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="username" className="text-sm font-medium text-gray-700">Reddit Username</Label>
                <Input
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Your Reddit username"
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="password" className="text-sm font-medium text-gray-700">Reddit Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Your Reddit password"
                  className="mt-1"
                />
              </div>
              
              <Button 
                onClick={handleConnect}
                className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-medium py-2.5"
              >
                Connect Reddit Account
              </Button>
            </div>
          </Card>

          {/* Benefits & Tutorial */}
          <div className="space-y-6">
            <Card className="p-6 bg-white/80 backdrop-blur-sm border border-gray-200/50 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Why Connect Reddit?</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-1 bg-blue-100 rounded-lg mt-1">
                    <Zap className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Automated Responses</h4>
                    <p className="text-sm text-gray-600">Let AI respond to relevant questions in your target subreddits</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="p-1 bg-green-100 rounded-lg mt-1">
                    <Shield className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Secure Connection</h4>
                    <p className="text-sm text-gray-600">Your credentials are encrypted and stored securely</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-white/80 backdrop-blur-sm border border-gray-200/50 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Setup Tutorial</h3>
              <div className="bg-gray-100 rounded-lg p-4 text-center">
                <div className="w-full h-32 bg-gray-200 rounded-lg flex items-center justify-center mb-3">
                  <span className="text-gray-500">Tutorial Video Placeholder</span>
                </div>
                <p className="text-sm text-gray-600">Watch our step-by-step guide to create a Reddit app and get your API credentials</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ConnectReddit;
