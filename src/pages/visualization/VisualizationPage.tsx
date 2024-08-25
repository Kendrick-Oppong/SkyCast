import { DailyVisualizationPage } from "./Daily";
import { MonthlyVisualizationPage } from "./Monthly";
import { WeeklyVisualizationPage } from "./Weekly";

export const VisualizationPage = () => {
  return (
    <div className="mb-8">
      <DailyVisualizationPage />
      <WeeklyVisualizationPage />
      <MonthlyVisualizationPage />
    </div>
  );
};
