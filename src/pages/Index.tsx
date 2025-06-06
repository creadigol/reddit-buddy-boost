
import React from 'react';
import Layout from '../components/Layout';
import Dashboard from '../components/Dashboard';

const Index = () => {
  return (
    <Layout 
      title="Dashboard" 
      subtitle="Monitor your AI assistant's performance across platforms"
    >
      <Dashboard />
    </Layout>
  );
};

export default Index;
