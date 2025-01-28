import React from 'react';
import { AlertTriangle } from 'lucide-react';

interface ErrorCardProps {
  message?: string;
  onRetry?: () => void;
}

const ErrorCard: React.FC<ErrorCardProps> = ({ 
  message = "Something went wrong. Please try again.", 
  onRetry 
}) => {
  return (
    <div className="flex flex-col items-center justify-center bg-charcoal rounded-lg shadow-md my-4 p-6 max-w-md mx-auto">
      <div className="flex items-center justify-center text-red-600 mb-4">
        <AlertTriangle className="w-12 h-12" />
      </div>
      <h2 className="text-xl font-semibold text-red-700 mb-2">Oops!</h2>
      <p className="text-center text-red-600 mb-4">{message}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
        >
          Retry
        </button>
      )}
    </div>
  );
};

export default ErrorCard;
