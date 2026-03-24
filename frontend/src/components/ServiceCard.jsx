import React from 'react';
import { CheckCircle2, XCircle, Lightbulb } from 'lucide-react';

const ServiceCard = ({ name, icon, description, category, useCases, notUseCases, example }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-300 flex flex-col h-full">
      
      {/* Header */}
      <div className="p-5 border-b border-gray-100 bg-gray-50/50 flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="text-3xl bg-white p-2 rounded-lg shadow-sm">{icon}</div>
          <div>
            <h3 className="text-xl font-bold text-gray-900">{name}</h3>
            <span className="inline-block px-2 py-1 text-xs font-semibold text-blue-700 bg-blue-100 rounded-full mt-1">
              {category}
            </span>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="p-5 flex-grow flex flex-col gap-4">
        <p className="text-gray-600 text-sm">{description}</p>

        <div className="space-y-4 mt-auto">
          {/* Use Cases */}
          <div>
            <h4 className="text-sm font-semibold text-green-700 flex items-center gap-1.5 mb-2">
              <CheckCircle2 className="w-4 h-4" /> When to use
            </h4>
            <ul className="space-y-1">
              {useCases.map((useCase, idx) => (
                <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">•</span>
                  {useCase}
                </li>
              ))}
            </ul>
          </div>

          {/* Not Use Cases */}
          <div>
            <h4 className="text-sm font-semibold text-red-700 flex items-center gap-1.5 mb-2">
              <XCircle className="w-4 h-4" /> When NOT to use
            </h4>
            <ul className="space-y-1">
              {notUseCases.map((notUseCase, idx) => (
                <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">•</span>
                  {notUseCase}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Footer / Example */}
      <div className="bg-blue-50/50 p-4 border-t border-blue-100 mt-auto">
        <h4 className="text-xs font-bold text-blue-800 uppercase tracking-wider flex items-center gap-1 mb-1">
          <Lightbulb className="w-3 h-3" /> Real-world Example
        </h4>
        <p className="text-sm text-blue-900 leading-relaxed italic">"{example}"</p>
      </div>

    </div>
  );
};

export default ServiceCard;
