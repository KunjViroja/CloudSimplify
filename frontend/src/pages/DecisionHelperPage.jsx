import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Cpu, Database, Users, ArrowRight, Lightbulb } from 'lucide-react';

const options = [
  {
    id: 'website',
    label: 'Host a website',
    icon: <Cpu className="w-8 h-8 mb-2 text-blue-500" />,
  },
  {
    id: 'files',
    label: 'Store files',
    icon: <Database className="w-8 h-8 mb-2 text-purple-500" />,
  },
  {
    id: 'users',
    label: 'Manage users',
    icon: <Users className="w-8 h-8 mb-2 text-orange-500" />,
  }
];

const results = {
  website: {
    service: 'Amazon EC2 or Amazon S3',
    description: 'If you are hosting a dynamic website with a backend server (Node.js, Python, Java), use EC2. If it is a simple static site (HTML/CSS/JS or React/Vue), S3 is much cheaper and easier.',
    linkParams: '?category=Compute'
  },
  files: {
    service: 'Amazon S3',
    description: 'S3 is the perfect place to store files, images, videos, and backups. It is highly durable and allows you to fetch files via a simple URL.',
    linkParams: '?category=Storage'
  },
  users: {
    service: 'AWS IAM',
    description: 'Instead of building your own user management system for AWS control, use IAM to securely control access to AWS services. (Note: For application end-user logins, look into Amazon Cognito).',
    linkParams: '?category=Security'
  }
};

const DecisionHelperPage = () => {
  const [selected, setSelected] = useState(null);

  const result = selected ? results[selected] : null;

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
            Decision Helper
          </h1>
          <p className="text-lg text-gray-500">
            Tell us what you want to achieve, and we'll point you to the right AWS service.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
            What do you want to build?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {options.map((option) => (
              <button
                key={option.id}
                onClick={() => setSelected(option.id)}
                className={`p-6 rounded-xl border-2 flex flex-col items-center justify-center text-center transition-all duration-200 hover:shadow-md ${
                  selected === option.id 
                    ? 'border-blue-500 bg-blue-50 text-blue-700 pointer-events-none' 
                    : 'border-gray-200 bg-white text-gray-700 hover:border-blue-300'
                }`}
              >
                {option.icon}
                <span className="font-semibold">{option.label}</span>
              </button>
            ))}
          </div>

          {result && (
            <div className="bg-blue-50 rounded-xl p-8 border border-blue-100 animate-fade-in">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-white p-2 text-blue-600 rounded-lg shadow-sm">
                  <Lightbulb className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Recommended: <span className="text-blue-700">{result.service}</span>
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">
                {result.description}
              </p>
              <Link
                to={`/learn`}
                className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
                title="Go to Learn page (Filter manually for now)"
              >
                Learn more about this service <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default DecisionHelperPage;
