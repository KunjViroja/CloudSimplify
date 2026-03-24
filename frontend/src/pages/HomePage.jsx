import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Server, Shield, Workflow, Zap } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      
      {/* Hero Section */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-6">
            Learn AWS &amp; DevOps <br className="hidden sm:block" />
            <span className="text-blue-600">the Smart Way</span>
          </h1>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto mb-10">
            A beginner-friendly platform to understand cloud services, when to use them, and how real companies build modern architecture.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="/learn"
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-xl text-white bg-blue-600 hover:bg-blue-700 shadow-sm transition-colors"
            >
              Start Learning <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/decide"
              className="inline-flex items-center justify-center px-8 py-4 border border-gray-200 text-lg font-medium rounded-xl text-gray-700 bg-white hover:bg-gray-50 shadow-sm transition-colors"
            >
              Decision Helper
            </Link>
          </div>
        </div>
      </section>

      {/* What is AWS/DevOps Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center mb-6">
                <Server className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">What is AWS?</h2>
              <p className="text-gray-600 leading-relaxed">
                Amazon Web Services (AWS) is a cloud provider. Instead of buying your own physical servers, you rent computing power, storage, and databases from Amazon over the internet, paying only for what you use.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                <Workflow className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">What is DevOps?</h2>
              <p className="text-gray-600 leading-relaxed">
                DevOps is a set of practices that combines software development (Dev) and IT operations (Ops). It aims to shorten the development life cycle and provide continuous delivery with high software quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works visual flow */}
      <section className="py-20 bg-white border-t border-gray-100 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">How Companies use Cloud + CI/CD</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="relative">
              <div className="bg-blue-50 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 z-10 relative border-4 border-white shadow-sm">
                <span className="text-blue-600 font-bold text-xl">1</span>
              </div>
              <h3 className="font-semibold text-lg text-gray-900 mb-2">Plan &amp; Code</h3>
              <p className="text-sm text-gray-500">Developers write application code and push it to a repository like GitHub.</p>
              {/* Connector line for desktop */}
              <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-gray-200 -z-10"></div>
            </div>
            
            <div className="relative">
              <div className="bg-blue-50 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 z-10 relative border-4 border-white shadow-sm">
                <span className="text-blue-600 font-bold text-xl">2</span>
              </div>
              <h3 className="font-semibold text-lg text-gray-900 mb-2">Build &amp; Test</h3>
              <p className="text-sm text-gray-500">A CI tool automatically builds the code and runs tests to ensure quality.</p>
              <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-gray-200 -z-10"></div>
            </div>
            
            <div className="relative">
              <div className="bg-blue-50 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 z-10 relative border-4 border-white shadow-sm">
                <span className="text-blue-600 font-bold text-xl">3</span>
              </div>
              <h3 className="font-semibold text-lg text-gray-900 mb-2">Deploy</h3>
              <p className="text-sm text-gray-500">The CD tool deploys the application flawlessly to AWS (e.g., EC2 or S3).</p>
              <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-gray-200 -z-10"></div>
            </div>
            
            <div className="relative">
              <div className="bg-blue-50 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 z-10 relative border-4 border-white shadow-sm">
                <span className="text-blue-600 font-bold text-xl">4</span>
              </div>
              <h3 className="font-semibold text-lg text-gray-900 mb-2">Monitor</h3>
              <p className="text-sm text-gray-500">The app runs in the cloud while tools track performance and errors.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default HomePage;
