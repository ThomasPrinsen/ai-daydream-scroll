
import React from "react";
import { Clock, Calendar, Navigation, FileText, Salad, Users, ChefHat, LineChart } from "lucide-react";

interface SceneIllustrationProps {
  scene: string;
}

const SceneIllustration: React.FC<SceneIllustrationProps> = ({ scene }) => {
  const renderScene = () => {
    switch (scene) {
      case "wake-up":
        return (
          <div className="flex flex-col items-center justify-center h-full w-full bg-gradient-to-r from-blue-50 to-indigo-50 p-6">
            <Clock className="w-16 h-16 text-blue-500 mb-4" />
            <div className="bg-white rounded-lg p-4 shadow-md">
              <div className="flex flex-col gap-2">
                <div className="h-3 w-32 bg-blue-100 rounded"></div>
                <div className="h-3 w-24 bg-blue-100 rounded"></div>
                <div className="h-3 w-28 bg-blue-100 rounded"></div>
              </div>
            </div>
          </div>
        );
      case "calendar":
        return (
          <div className="flex flex-col items-center justify-center h-full w-full bg-gradient-to-r from-blue-50 to-indigo-50 p-6">
            <Calendar className="w-16 h-16 text-blue-500 mb-4" />
            <div className="bg-white rounded-lg p-4 shadow-md grid grid-cols-3 gap-2">
              {[...Array(9)].map((_, i) => (
                <div key={i} className="h-6 bg-blue-100 rounded"></div>
              ))}
            </div>
          </div>
        );
      case "commuting":
        return (
          <div className="flex flex-col items-center justify-center h-full w-full bg-gradient-to-r from-blue-50 to-indigo-50 p-6">
            <Navigation className="w-16 h-16 text-blue-500 mb-4" />
            <div className="bg-white rounded-lg p-4 shadow-md w-full">
              <div className="h-3 w-full bg-blue-100 rounded mb-2"></div>
              <div className="flex justify-between">
                <div className="h-6 w-6 rounded-full bg-blue-500"></div>
                <div className="h-6 w-6 rounded-full bg-blue-300"></div>
              </div>
            </div>
          </div>
        );
      case "reading":
        return (
          <div className="flex flex-col items-center justify-center h-full w-full bg-gradient-to-r from-blue-50 to-indigo-50 p-6">
            <FileText className="w-16 h-16 text-blue-500 mb-4" />
            <div className="bg-white rounded-lg p-4 shadow-md">
              <div className="flex flex-col gap-2">
                <div className="h-3 w-32 bg-blue-100 rounded"></div>
                <div className="h-3 w-full bg-blue-100 rounded"></div>
                <div className="h-3 w-full bg-blue-100 rounded"></div>
                <div className="h-3 w-28 bg-blue-100 rounded"></div>
              </div>
            </div>
          </div>
        );
      case "lunch":
        return (
          <div className="flex flex-col items-center justify-center h-full w-full bg-gradient-to-r from-blue-50 to-indigo-50 p-6">
            <Salad className="w-16 h-16 text-blue-500 mb-4" />
            <div className="bg-white rounded-lg p-4 shadow-md flex gap-2">
              <div className="h-12 w-12 rounded-full bg-blue-200"></div>
              <div className="h-12 w-12 rounded-full bg-green-200"></div>
              <div className="h-12 w-12 rounded-full bg-yellow-200"></div>
            </div>
          </div>
        );
      case "meeting":
        return (
          <div className="flex flex-col items-center justify-center h-full w-full bg-gradient-to-r from-blue-50 to-indigo-50 p-6">
            <Users className="w-16 h-16 text-blue-500 mb-4" />
            <div className="bg-white rounded-lg p-4 shadow-md">
              <div className="flex flex-col gap-2">
                <div className="h-3 w-32 bg-blue-100 rounded"></div>
                <div className="h-3 w-full bg-blue-100 rounded"></div>
                <div className="h-3 w-24 bg-blue-100 rounded"></div>
              </div>
            </div>
          </div>
        );
      case "dinner":
        return (
          <div className="flex flex-col items-center justify-center h-full w-full bg-gradient-to-r from-blue-50 to-indigo-50 p-6">
            <ChefHat className="w-16 h-16 text-blue-500 mb-4" />
            <div className="bg-white rounded-lg p-4 shadow-md grid grid-cols-2 gap-2">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-8 bg-blue-100 rounded"></div>
              ))}
            </div>
          </div>
        );
      case "reflection":
        return (
          <div className="flex flex-col items-center justify-center h-full w-full bg-gradient-to-r from-blue-50 to-indigo-50 p-6">
            <LineChart className="w-16 h-16 text-blue-500 mb-4" />
            <div className="bg-white rounded-lg p-4 shadow-md">
              <div className="h-16 w-full bg-gradient-to-r from-blue-100 to-blue-300 rounded"></div>
            </div>
          </div>
        );
      default:
        return <div className="text-blue-500">Scene illustration</div>;
    }
  };

  return (
    <div className="scene-illustration">
      {renderScene()}
    </div>
  );
};

export default SceneIllustration;
