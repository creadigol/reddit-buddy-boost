
import React, { useState } from 'react';
import Layout from '../components/Layout';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Settings as SettingsIcon, User, Bell, Shield, Database, Trash2 } from 'lucide-react';

const Settings = () => {
  const [notifications, setNotifications] = useState({
    emailAlerts: true,
    pushNotifications: false,
    weeklyReports: true,
    systemUpdates: true
  });

  const [autoResponse, setAutoResponse] = useState(true);
  const [responseDelay, setResponseDelay] = useState('5');

  return (
    <Layout 
      title="Settings" 
      subtitle="Manage your account preferences and AI configuration"
    >
      <div className="p-6 max-w-4xl mx-auto">
        <div className="space-y-8">
          {/* Account Settings */}
          <Card className="p-6 bg-white/80 backdrop-blur-sm border border-gray-200/50 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-100 rounded-lg">
                <User className="h-5 w-5 text-blue-600" />
              </div>
              <h2 className="text-xl font-semibold text-gray-900">Account Settings</h2>
            </div>
            
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName" className="text-sm font-medium text-gray-700">First Name</Label>
                  <Input id="firstName" defaultValue="John" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="lastName" className="text-sm font-medium text-gray-700">Last Name</Label>
                  <Input id="lastName" defaultValue="Doe" className="mt-1" />
                </div>
              </div>
              
              <div>
                <Label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address</Label>
                <Input id="email" type="email" defaultValue="john@example.com" className="mt-1" />
              </div>
              
              <div>
                <Label htmlFor="company" className="text-sm font-medium text-gray-700">Company Name</Label>
                <Input id="company" defaultValue="TechStartup Inc." className="mt-1" />
              </div>
              
              <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white">
                Update Account
              </Button>
            </div>
          </Card>

          {/* Notification Settings */}
          <Card className="p-6 bg-white/80 backdrop-blur-sm border border-gray-200/50 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-green-100 rounded-lg">
                <Bell className="h-5 w-5 text-green-600" />
              </div>
              <h2 className="text-xl font-semibold text-gray-900">Notification Preferences</h2>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900">Email Alerts</p>
                  <p className="text-sm text-gray-600">Receive notifications about AI activity</p>
                </div>
                <Switch 
                  checked={notifications.emailAlerts}
                  onCheckedChange={(checked) => setNotifications({...notifications, emailAlerts: checked})}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900">Push Notifications</p>
                  <p className="text-sm text-gray-600">Real-time browser notifications</p>
                </div>
                <Switch 
                  checked={notifications.pushNotifications}
                  onCheckedChange={(checked) => setNotifications({...notifications, pushNotifications: checked})}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900">Weekly Reports</p>
                  <p className="text-sm text-gray-600">Performance summary every Monday</p>
                </div>
                <Switch 
                  checked={notifications.weeklyReports}
                  onCheckedChange={(checked) => setNotifications({...notifications, weeklyReports: checked})}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900">System Updates</p>
                  <p className="text-sm text-gray-600">New features and maintenance notices</p>
                </div>
                <Switch 
                  checked={notifications.systemUpdates}
                  onCheckedChange={(checked) => setNotifications({...notifications, systemUpdates: checked})}
                />
              </div>
            </div>
          </Card>

          {/* AI Configuration */}
          <Card className="p-6 bg-white/80 backdrop-blur-sm border border-gray-200/50 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-purple-100 rounded-lg">
                <SettingsIcon className="h-5 w-5 text-purple-600" />
              </div>
              <h2 className="text-xl font-semibold text-gray-900">AI Configuration</h2>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900">Auto Response</p>
                  <p className="text-sm text-gray-600">Automatically respond to relevant questions</p>
                </div>
                <Switch 
                  checked={autoResponse}
                  onCheckedChange={setAutoResponse}
                />
              </div>
              
              <div>
                <Label htmlFor="responseDelay" className="text-sm font-medium text-gray-700">Response Delay (minutes)</Label>
                <Input 
                  id="responseDelay" 
                  type="number" 
                  value={responseDelay}
                  onChange={(e) => setResponseDelay(e.target.value)}
                  className="mt-1 w-32" 
                />
                <p className="text-sm text-gray-600 mt-1">Minimum time to wait before responding</p>
              </div>
              
              <div>
                <Label htmlFor="customInstructions" className="text-sm font-medium text-gray-700">Custom Instructions</Label>
                <Textarea 
                  id="customInstructions"
                  placeholder="Add any specific instructions for your AI assistant..."
                  className="mt-1 min-h-[100px]"
                />
              </div>
            </div>
          </Card>

          {/* Connected Accounts */}
          <Card className="p-6 bg-white/80 backdrop-blur-sm border border-gray-200/50 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-orange-100 rounded-lg">
                <Shield className="h-5 w-5 text-orange-600" />
              </div>
              <h2 className="text-xl font-semibold text-gray-900">Connected Accounts</h2>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center text-white text-sm font-bold">R</div>
                  <div>
                    <p className="font-medium text-gray-900">Reddit</p>
                    <p className="text-sm text-gray-600">Connected as u/your_username</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge className="bg-green-100 text-green-800">Connected</Badge>
                  <Button variant="outline" size="sm">Disconnect</Button>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-pink-500 rounded-lg flex items-center justify-center text-white text-sm font-bold">I</div>
                  <div>
                    <p className="font-medium text-gray-900">Instagram</p>
                    <p className="text-sm text-gray-600">Not connected</p>
                  </div>
                </div>
                <Button variant="outline" size="sm">Connect</Button>
              </div>
            </div>
          </Card>

          {/* Data & Privacy */}
          <Card className="p-6 bg-white/80 backdrop-blur-sm border border-gray-200/50 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-red-100 rounded-lg">
                <Database className="h-5 w-5 text-red-600" />
              </div>
              <h2 className="text-xl font-semibold text-gray-900">Data & Privacy</h2>
            </div>
            
            <div className="space-y-4">
              <Button variant="outline" className="justify-start">
                Download Your Data
              </Button>
              
              <Button variant="outline" className="justify-start">
                Privacy Policy
              </Button>
              
              <Button variant="outline" className="justify-start">
                Terms of Service
              </Button>
              
              <div className="border-t pt-4 mt-6">
                <Button variant="destructive" className="bg-red-600 hover:bg-red-700 text-white">
                  <Trash2 className="h-4 w-4 mr-2" />
                  Delete Account
                </Button>
                <p className="text-sm text-gray-600 mt-2">This action cannot be undone. All your data will be permanently deleted.</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Settings;
