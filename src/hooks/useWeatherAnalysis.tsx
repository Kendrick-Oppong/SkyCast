import outputData from "@/data/output.json";
import { CloudHail, Cloudy, Sun } from "lucide-react";

// Helper function to determine weather condition based on PWV
function determineWeatherCondition(pwv: number) {
  if (pwv <= 35) {
    return (
      <>
        <Sun className="mx-auto text-primary" strokeWidth={1} size={90} />
        <p className="text-blue-700">Sunny</p>
      </>
    );
  } else if (pwv <= 50) {
    return (
      <>
        <Cloudy
          className="mx-auto text-gray-600 dark:text-gray-400"
          strokeWidth={1}
          size={90}
        />
        <p className="text-blue-700">Cloudy</p>
      </>
    );
  } else {
    return (
      <>
        <CloudHail
          className="mx-auto text-gray-600 dark:text-gray-400"
          strokeWidth={1}
          size={90}
        />
        <p className="text-blue-700">Rainy</p>
      </>
    );
  }
}

// Function to get the week number in the format "Month-W1", "Month-W2", etc.
function getWeekNumber(date: Date): string {
  const month = date.toLocaleString("en-US", { month: "short" });
  const week = Math.ceil(date.getDate() / 7); // Calculate week number within the month
  return `${month}-W${week}`;
}

// Function to get the month in the format "Month YYYY"
function getMonthName(date: Date): string {
  return date.toLocaleString("en-US", { month: "long", year: "numeric" });
}

// Format the daily data
const formattedDailyData = outputData.map((item) => {
  const date = new Date(item.Date);
  const weatherCondition = determineWeatherCondition(item.PWV);
  const formattedDate = date.toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "short",
  });

  return {
    date: formattedDate,
    weather: weatherCondition,
    pwv: Math.round(item.PWV),
    ztd: Math.round(item.ZTD * 1000),
    week: getWeekNumber(date), // Add the week information
    month: getMonthName(date), // Add the month information
  };
});

// Group data by week for weekly analysis
const weeklyDataMap: Record<
  string,
  { pwvSum: number; ztdSum: number; count: number }
> = {};

formattedDailyData.forEach((item) => {
  const week = item.week;
  if (!weeklyDataMap[week]) {
    weeklyDataMap[week] = { pwvSum: 0, ztdSum: 0, count: 0 };
  }
  weeklyDataMap[week].pwvSum += item.pwv;
  weeklyDataMap[week].ztdSum += item.ztd;
  weeklyDataMap[week].count += 1;
});

// Calculate average PWV and ZTD for each week
const formattedWeeklyData = Object.keys(weeklyDataMap).map((week) => {
  const { pwvSum, ztdSum, count } = weeklyDataMap[week];
  const averagePWV = pwvSum / count;
  const averageZTD = ztdSum / count;
  const weatherCondition = determineWeatherCondition(averagePWV);

  return {
    week,
    weather: weatherCondition,
    pwv: Math.round(averagePWV),
    ztd: Math.round(averageZTD),
  };
});

// Group data by month for monthly analysis
const monthlyDataMap: Record<
  string,
  { pwvSum: number; ztdSum: number; count: number }
> = {};

formattedDailyData.forEach((item) => {
  const month = item.month;
  if (!monthlyDataMap[month]) {
    monthlyDataMap[month] = { pwvSum: 0, ztdSum: 0, count: 0 };
  }
  monthlyDataMap[month].pwvSum += item.pwv;
  monthlyDataMap[month].ztdSum += item.ztd;
  monthlyDataMap[month].count += 1;
});

// Calculate average PWV and ZTD for each month
const formattedMonthlyData = Object.keys(monthlyDataMap).map((month) => {
  const { pwvSum, ztdSum, count } = monthlyDataMap[month];
  const averagePWV = pwvSum / count;
  const averageZTD = ztdSum / count;
  const weatherCondition = determineWeatherCondition(averagePWV);

  return {
    month,
    weather: weatherCondition,
    pwv: Math.round(averagePWV),
    ztd: Math.round(averageZTD),
  };
});

// Export the analyzed data
export const useWeatherAnalysis = () => {
  return {
    daily: formattedDailyData,
    weekly: formattedWeeklyData,
    monthly: formattedMonthlyData,
  };
};
