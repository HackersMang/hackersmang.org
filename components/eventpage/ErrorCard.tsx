import React from "react";
import { AlertTriangle } from "lucide-react";

interface ErrorCardProps {
  message?: string;
  onRetry?: () => void;
}

const ErrorCard: React.FC<ErrorCardProps> = ({
  message = "Something went wrong. Please try again.",
  onRetry,
}) => {
  return (
    <div className="w-full flex flex-col items-center justify-center my-8 lg:my-12 px-4">
      <div
        role="alert"
        className="w-full max-w-lg flex flex-col items-center text-center bg-neutral-white/95 rounded-2xl border border-neutral-200/50 p-6 lg:p-8 shadow-md transition-shadow duration-300 hover:shadow-lg"
      >
        <div
          className="flex items-center justify-center w-14 h-14 rounded-full bg-secondary-red/10 border border-secondary-red/20 mb-5"
          aria-hidden
        >
          <AlertTriangle
            className="w-7 h-7 text-secondary-red"
            strokeWidth={2}
          />
        </div>
        <h2 className="text-xl lg:text-2xl outfit-extra-bold text-neutral-navy mb-3 tracking-tight">
          Unable to load
        </h2>
        <p className="text-base text-neutral-navy outfit-extra-light leading-relaxed mb-6">
          {message}
        </p>
        {onRetry && (
          <button
            type="button"
            onClick={onRetry}
            className="inline-flex items-center justify-center gap-2 py-3 px-8 bg-gradient-to-r from-primary-green to-primary-green/80 text-neutral-white outfit-bold rounded-2xl border border-primary-green/30 transition-all duration-300 hover:from-primary-green/90 hover:to-primary-green/70 hover:scale-[1.02] hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-green focus-visible:ring-offset-2"
          >
            Try again
          </button>
        )}
      </div>
    </div>
  );
};

export default ErrorCard;
