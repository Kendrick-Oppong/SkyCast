import { DailyVisualizationPage } from "./Daily";
import { MonthlyVisualizationPage } from "./Monthly";
import { WeeklyVisualizationPage } from "./Weekly";
import { PWVRange } from "./PWVRange";

export const VisualizationPage = () => {
  return (
    <div className="mb-8">
      <DailyVisualizationPage />
      <WeeklyVisualizationPage />
      <MonthlyVisualizationPage />
      <PWVRange />
    </div>
  );
};
