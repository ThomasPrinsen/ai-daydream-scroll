
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
            
            {/* Brabant reference - small house icon */}
            <div className="absolute bottom-2 right-2 w-12 h-12 bg-brabant-accent/10 rounded-md flex items-center justify-center">
              <div className="w-6 h-6 border-t-4 border-brabant-accent/40 relative">
                <div className="absolute w-0 h-0 border-l-6 border-l-transparent border-r-6 border-r-transparent border-b-6 border-brabant-accent/40 -top-6 left-0"></div>
              </div>
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
            
            {/* Brabant reference - table */}
            <div className="absolute top-2 left-2 w-12 h-6 bg-brabant-accent/20 rounded-sm flex items-end justify-center">
              <div className="w-8 h-1 bg-brabant-accent/40"></div>
              <div className="absolute h-4 w-1 bg-brabant-accent/40 bottom-0 left-3"></div>
              <div className="absolute h-4 w-1 bg-brabant-accent/40 bottom-0 right-3"></div>
            </div>
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
            
            {/* Brabant reference - bicycle path */}
            <div className="absolute bottom-3 right-3 w-16 h-3 bg-green-800/20 rounded">
              <div className="absolute -top-6 right-2 w-4 h-4">
                <div className="w-4 h-4 rounded-full border-2 border-green-800/40 relative">
                  <div className="absolute w-0.5 h-6 bg-green-800/40 -bottom-4 left-1/2 transform -translate-x-1/2"></div>
                </div>
              </div>
            </div>
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
            
            {/* Brabant reference - community document */}
            <div className="absolute top-3 left-3 w-10 h-10 bg-green-700/10 rounded-sm flex flex-col items-center justify-center">
              <div className="h-1 w-8 bg-green-700/20 mb-1"></div>
              <div className="h-1 w-6 bg-green-700/20"></div>
              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-brabant-accent/20 rounded-sm"></div>
            </div>
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
            
            {/* Brabant reference - local café */}
            <div className="absolute top-5 right-5 w-8 h-8 bg-amber-700/10 rounded-md flex items-center justify-center">
              <div className="w-6 h-4 border border-amber-700/20 flex items-center justify-center">
                <div className="w-3 h-2 bg-amber-700/20"></div>
              </div>
            </div>
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
            
            {/* Brabant reference - community center table */}
            <div className="absolute top-2 right-2 w-14 h-14 bg-brabant-accent/10 rounded-lg flex items-center justify-center">
              <div className="w-10 h-6 bg-brabant-accent/20 rounded-md relative">
                <div className="absolute w-6 h-2 bg-brabant-accent/30 rounded-full -bottom-1 left-1/2 transform -translate-x-1/2"></div>
              </div>
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
            
            {/* Brabant reference - local cuisine */}
            <div className="absolute bottom-2 left-2 w-12 h-12 bg-amber-700/10 rounded-full flex items-center justify-center">
              <div className="w-8 h-8 bg-amber-700/15 rounded-sm relative rotate-45">
                <div className="absolute w-4 h-4 bg-amber-700/20 rounded-sm top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
              </div>
            </div>
          </div>
        );
      case "reflection":
        return (
          <div className="flex flex-col items-center justify-center h-full w-full bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-xl">
            <LineChart className="w-16 h-16 text-brabant-primary mb-4" />
            <div className="bg-white rounded-lg p-4 shadow-md border border-brabant-accent/30">
              <div className="h-16 w-full bg-gradient-to-r from-brabant-accent/20 to-brabant-primary/30 rounded"></div>
            </div>
            
            {/* Brabant reference - statistics */}
            <div className="absolute top-3 right-3 w-14 h-3 bg-brabant-accent/20 rounded"></div>
            <div className="absolute top-7 right-3 w-10 h-3 bg-brabant-accent/20 rounded"></div>
            <div className="absolute top-11 right-3 w-7 h-3 bg-brabant-accent/20 rounded"></div>
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
