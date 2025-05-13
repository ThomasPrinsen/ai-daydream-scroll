import React from "react";
import { Clock, Calendar, Navigation, FileText, Salad, Users, ChefHat, LineChart } from "lucide-react";

interface SceneIllustrationProps {
  scene: string;
  time: string;
}

const SceneIllustration: React.FC<SceneIllustrationProps> = ({ scene, time }) => {
  const renderScene = () => {
    switch (scene) {
      case "wake-up":
        return (
          <div className="flex flex-col items-center justify-center h-full w-full bg-gradient-to-r from-red-50 to-red-100 p-6 rounded-xl">
            <Clock className="w-16 h-16 text-red-600 mb-4" />
            <div className="bg-white rounded-lg p-4 shadow-md border border-red-400/30">
              <div className="flex flex-col gap-2">
                <div className="h-3 w-32 bg-red-400/20 rounded"></div>
                <div className="h-3 w-24 bg-red-400/20 rounded"></div>
                <div className="h-3 w-28 bg-red-400/20 rounded"></div>
              </div>
            </div>
          </div>
        );
      case "calendar":
        return (
          <div className="flex flex-col items-center justify-center h-full w-full bg-gradient-to-r from-red-50 to-red-100 p-6 rounded-xl">
            <Calendar className="w-16 h-16 text-red-600 mb-4" />
            <div className="bg-white rounded-lg p-4 shadow-md border border-red-400/30 grid grid-cols-3 gap-2">
              {[...Array(9)].map((_, i) => (
                <div key={i} className="h-6 bg-red-400/20 rounded"></div>
              ))}
            </div>
          </div>
        );
      case "commuting":
        return (
          <div className="flex flex-col items-center justify-center h-full w-full bg-gradient-to-r from-red-50 to-red-100 p-6 rounded-xl">
            <Navigation className="w-16 h-16 text-red-600 mb-4" />
            <div className="bg-white rounded-lg p-4 shadow-md border border-red-400/30 w-full">
              <div className="h-3 w-full bg-red-400/20 rounded mb-2"></div>
              <div className="flex justify-between">
                <div className="h-6 w-6 rounded-full bg-red-600"></div>
                <div className="h-6 w-6 rounded-full bg-red-400"></div>
              </div>
            </div>
          </div>
        );
      case "reading":
        return (
          <div className="flex flex-col items-center justify-center h-full w-full bg-gradient-to-r from-red-50 to-red-100 p-6 rounded-xl">
            <FileText className="w-16 h-16 text-red-600 mb-4" />
            <div className="bg-white rounded-lg p-4 shadow-md border border-red-400/30">
              <div className="flex flex-col gap-2">
                <div className="h-3 w-32 bg-red-400/20 rounded"></div>
                <div className="h-3 w-full bg-red-400/20 rounded"></div>
                <div className="h-3 w-full bg-red-400/20 rounded"></div>
                <div className="h-3 w-28 bg-red-400/20 rounded"></div>
              </div>
            </div>
          </div>
        );
      case "lunch":
        return (
          <div className="flex flex-col items-center justify-center h-full w-full bg-gradient-to-r from-red-50 to-red-100 p-6 rounded-xl">
            <Salad className="w-16 h-16 text-red-600 mb-4" />
            <div className="bg-white rounded-lg p-4 shadow-md border border-red-400/30 flex gap-2">
              <div className="h-12 w-12 rounded-full bg-red-200 border border-red-300"></div>
              <div className="h-12 w-12 rounded-full bg-red-100 border border-red-200"></div>
              <div className="h-12 w-12 rounded-full bg-red-300 border border-red-400"></div>
            </div>
          </div>
        );
      case "meeting":
        return (
          <div className="flex flex-col items-center justify-center h-full w-full bg-gradient-to-r from-red-50 to-red-100 p-6 rounded-xl">
            <Users className="w-16 h-16 text-red-600 mb-4" />
            <div className="bg-white rounded-lg p-4 shadow-md border border-red-400/30">
              <div className="flex flex-col gap-2">
                <div className="h-3 w-32 bg-red-400/20 rounded"></div>
                <div className="h-3 w-full bg-red-400/20 rounded"></div>
                <div className="h-3 w-24 bg-red-400/20 rounded"></div>
              </div>
            </div>
          </div>
        );
      case "dinner":
        return (
          <div className="flex flex-col items-center justify-center h-full w-full bg-gradient-to-r from-red-50 to-red-100 p-6 rounded-xl">
            <ChefHat className="w-16 h-16 text-red-600 mb-4" />
            <div className="bg-white rounded-lg p-4 shadow-md border border-red-400/30 grid grid-cols-2 gap-2">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-8 bg-red-400/20 rounded"></div>
              ))}
            </div>
          </div>
        );
      case "reflection":
        if (scene === "reflection" && time === "21:30") {
          return (
            <div className="flex flex-col items-center justify-center h-full w-full bg-gradient-to-r from-red-50 to-red-100 p-6 rounded-xl">
              <img
                src="/image.png"
                alt="Meisje in bed"
                style={{ width: '320px', maxWidth: '90vw', margin: '0 auto 2rem auto', display: 'block' }}
              />
            </div>
          );
        }
        return (
          <div className="flex flex-col items-center justify-center h-full w-full bg-gradient-to-r from-red-50 to-red-100 p-6 rounded-xl">
            <LineChart className="w-16 h-16 text-red-600 mb-4" />
            <div className="bg-white rounded-lg p-4 shadow-md border border-red-400/30">
              <div className="h-16 w-full bg-gradient-to-r from-red-400/20 to-red-600/30 rounded"></div>
            </div>
          </div>
        );
      default:
        return <div className="text-red-600">Scene illustration</div>;
    }
  };

  return (
    <div className="scene-illustration">
      {renderScene()}
    </div>
  );
};

export default SceneIllustration;
