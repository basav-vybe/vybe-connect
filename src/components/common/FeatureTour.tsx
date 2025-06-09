import React, { useState, useEffect } from 'react';
import { X, ChevronRight, ChevronLeft } from 'lucide-react';

interface TourStep {
  target: string;
  title: string;
  content: string;
  position: 'top' | 'right' | 'bottom' | 'left';
}

interface FeatureTourProps {
  steps: TourStep[];
  onComplete: () => void;
}

const FeatureTour: React.FC<FeatureTourProps> = ({ steps, onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const hasSeenTour = localStorage.getItem('hasSeenTour');
    if (hasSeenTour) {
      setIsVisible(false);
    }
  }, []);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      handleComplete();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleComplete = () => {
    localStorage.setItem('hasSeenTour', 'true');
    setIsVisible(false);
    onComplete();
  };

  if (!isVisible) return null;

  const currentStepData = steps[currentStep];
  const targetElement = document.querySelector(currentStepData.target);

  if (!targetElement) return null;

  const rect = targetElement.getBoundingClientRect();
  const position = currentStepData.position;

  const getPositionStyles = () => {
    switch (position) {
      case 'top':
        return {
          top: rect.top - 10,
          left: rect.left + rect.width / 2,
          transform: 'translate(-50%, -100%)'
        };
      case 'right':
        return {
          top: rect.top + rect.height / 2,
          left: rect.right + 10,
          transform: 'translateY(-50%)'
        };
      case 'bottom':
        return {
          top: rect.bottom + 10,
          left: rect.left + rect.width / 2,
          transform: 'translate(-50%, 0)'
        };
      case 'left':
        return {
          top: rect.top + rect.height / 2,
          left: rect.left - 10,
          transform: 'translate(-100%, -50%)'
        };
      default:
        return {};
    }
  };

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black bg-opacity-50 z-40" />

      {/* Tour Tooltip */}
      <div
        className="fixed z-50 bg-white rounded-lg shadow-xl p-4 w-80"
        style={getPositionStyles()}
      >
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-900">{currentStepData.title}</h3>
          <button
            onClick={handleComplete}
            className="text-gray-400 hover:text-gray-600"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <p className="text-gray-600 mb-4">{currentStepData.content}</p>
        <div className="flex justify-between items-center">
          <div className="flex space-x-1">
            {steps.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full ${
                  index === currentStep ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
          <div className="flex space-x-2">
            {currentStep > 0 && (
              <button
                onClick={handlePrevious}
                className="px-3 py-1 text-sm text-gray-600 hover:text-gray-900"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
            )}
            <button
              onClick={handleNext}
              className="px-4 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm"
            >
              {currentStep === steps.length - 1 ? 'Finish' : 'Next'}
              <ChevronRight className="h-4 w-4 inline-block ml-1" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureTour; 