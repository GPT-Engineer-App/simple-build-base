import React from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-800 text-white p-4">
        <h1 className="text-2xl font-bold">My Application</h1>
      </header>

      <main className="flex-grow p-4">
        <Card className="mb-4">
          <CardHeader>
            <h2 className="text-xl font-semibold">Welcome</h2>
          </CardHeader>
          <CardContent>
            <p>This is a bare-bones application. Start building your content here!</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h2 className="text-xl font-semibold">Sample Content</h2>
          </CardHeader>
          <CardContent>
            <p>Add your components, data, or any other content in this area.</p>
          </CardContent>
        </Card>
      </main>

      <footer className="bg-gray-200 p-4 text-center">
        <p>&copy; 2023 My Application. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;