import { DailyVisualizationPage } from "./Daily";
import { WeeklyVisualizationPage } from "./Weekly";

export const VisualizationPage = () => {
  return (
    <div className="mb-8">
      <DailyVisualizationPage />
      <WeeklyVisualizationPage />
    </div>
  );
};
