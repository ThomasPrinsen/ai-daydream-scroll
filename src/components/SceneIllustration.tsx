
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
          <div className="flex flex-col items-center justify-center h-full w-full bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-xl">
            <Clock className="w-16 h-16 text-brabant-primary mb-4" />
            <div className="bg-white rounded-lg p-4 shadow-md border border-brabant-accent/30">
              <div className="flex flex-col gap-2">
                <div className="h-3 w-32 bg-brabant-accent/20 rounded"></div>
                <div className="h-3 w-24 bg-brabant-accent/20 rounded"></div>
                <div className="h-3 w-28 bg-brabant-accent/20 rounded"></div>
              </div>
            </div>
            <div className="absolute bottom-2 right-2 w-12 h-12 bg-brabant-accent/10 rounded-full flex items-center justify-center">
              <div className="w-8 h-8 bg-brabant-accent/20 rounded-full"></div>
            </div>
          </div>
        );
      case "calendar":
        return (
          <div className="flex flex-col items-center justify-center h-full w-full bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-xl">
            <Calendar className="w-16 h-16 text-brabant-primary mb-4" />
            <div className="bg-white rounded-lg p-4 shadow-md border border-brabant-accent/30 grid grid-cols-3 gap-2">
              {[...Array(9)].map((_, i) => (
                <div key={i} className="h-6 bg-brabant-accent/20 rounded"></div>
              ))}
            </div>
            <div className="absolute top-2 left-2 w-6 h-6 bg-brabant-accent/10 rounded-md"></div>
          </div>
        );
      case "commuting":
        return (
          <div className="flex flex-col items-center justify-center h-full w-full bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-xl">
            <Navigation className="w-16 h-16 text-brabant-primary mb-4" />
            <div className="bg-white rounded-lg p-4 shadow-md border border-brabant-accent/30 w-full">
              <div className="h-3 w-full bg-brabant-accent/20 rounded mb-2"></div>
              <div className="flex justify-between">
                <div className="h-6 w-6 rounded-full bg-brabant-primary"></div>
                <div className="h-6 w-6 rounded-full bg-brabant-accent"></div>
              </div>
            </div>
            <div className="absolute bottom-3 right-3 w-16 h-3 bg-green-800/20 rounded"></div>
            <div className="absolute bottom-7 right-6 w-8 h-10 bg-green-700/30 rounded"></div>
          </div>
        );
      case "reading":
        return (
          <div className="flex flex-col items-center justify-center h-full w-full bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-xl">
            <FileText className="w-16 h-16 text-brabant-primary mb-4" />
            <div className="bg-white rounded-lg p-4 shadow-md border border-brabant-accent/30">
              <div className="flex flex-col gap-2">
                <div className="h-3 w-32 bg-brabant-accent/20 rounded"></div>
                <div className="h-3 w-full bg-brabant-accent/20 rounded"></div>
                <div className="h-3 w-full bg-brabant-accent/20 rounded"></div>
                <div className="h-3 w-28 bg-brabant-accent/20 rounded"></div>
              </div>
            </div>
            <div className="absolute top-3 left-3 w-10 h-10 bg-green-700/20 rounded-sm"></div>
          </div>
        );
      case "lunch":
        return (
          <div className="flex flex-col items-center justify-center h-full w-full bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-xl">
            <Salad className="w-16 h-16 text-brabant-primary mb-4" />
            <div className="bg-white rounded-lg p-4 shadow-md border border-brabant-accent/30 flex gap-2">
              <div className="h-12 w-12 rounded-full bg-green-200 border border-green-300"></div>
              <div className="h-12 w-12 rounded-full bg-amber-200 border border-amber-300"></div>
              <div className="h-12 w-12 rounded-full bg-red-200 border border-red-300"></div>
            </div>
            <div className="absolute top-5 right-5 w-8 h-8 bg-amber-700/20 rounded-md"></div>
          </div>
        );
      case "meeting":
        return (
          <div className="flex flex-col items-center justify-center h-full w-full bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-xl">
            <Users className="w-16 h-16 text-brabant-primary mb-4" />
            <div className="bg-white rounded-lg p-4 shadow-md border border-brabant-accent/30">
              <div className="flex flex-col gap-2">
                <div className="h-3 w-32 bg-brabant-accent/20 rounded"></div>
                <div className="h-3 w-full bg-brabant-accent/20 rounded"></div>
                <div className="h-3 w-24 bg-brabant-accent/20 rounded"></div>
              </div>
            </div>
            <div className="absolute top-2 right-2 w-14 h-14 bg-brabant-accent/10 rounded-lg flex items-center justify-center">
              <div className="w-10 h-10 bg-brabant-accent/20 rounded-md"></div>
            </div>
          </div>
        );
      case "dinner":
        return (
          <div className="flex flex-col items-center justify-center h-full w-full bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-xl">
            <ChefHat className="w-16 h-16 text-brabant-primary mb-4" />
            <div className="bg-white rounded-lg p-4 shadow-md border border-brabant-accent/30 grid grid-cols-2 gap-2">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-8 bg-brabant-accent/20 rounded"></div>
              ))}
            </div>
            <div className="absolute bottom-2 left-2 w-12 h-12 bg-amber-700/20 rounded-full"></div>
          </div>
        );
      case "reflection":
        return (
          <div className="flex flex-col items-center justify-center h-full w-full bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-xl">
            <LineChart className="w-16 h-16 text-brabant-primary mb-4" />
            <div className="bg-white rounded-lg p-4 shadow-md border border-brabant-accent/30">
              <div className="h-16 w-full bg-gradient-to-r from-brabant-accent/20 to-brabant-primary/30 rounded"></div>
            </div>
            <div className="absolute top-3 right-3 w-14 h-3 bg-brabant-accent/20 rounded"></div>
            <div className="absolute top-7 right-3 w-10 h-3 bg-brabant-accent/20 rounded"></div>
          </div>
        );
      default:
        return <div className="text-brabant-primary">Scene illustration</div>;
    }
  };

  return (
    <div className="scene-illustration">
      {renderScene()}
    </div>
  );
};

export default SceneIllustration;
