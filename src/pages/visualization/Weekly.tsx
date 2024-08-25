// import {
//   CartesianGrid,
//   Line,
//   LineChart,
//   XAxis,
//   YAxis,
//   Tooltip,
//   Legend,
// } from "recharts";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";

// import {
//   ChartConfig,
//   ChartContainer,
//   ChartTooltipContent,
// } from "@/components/ui/chart";

// import outputData from "@/data/output.json";
// import { Badge } from "@/components/ui/badge";

// // Helper function to group data by week
// const getWeekNumber = (date) => {
//   const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
//   const pastDaysOfYear = (date - firstDayOfYear) / 86400000;
//   return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
// };

// // Format the weekly data for Recharts
// const weeklyChartData = Object.values(
//   outputData.reduce((acc, item) => {
//     const date = new Date(item.Date);
//     const week = `${date.getFullYear()}-W${getWeekNumber(date)}`;
//     if (!acc[week]) {
//       acc[week] = { week, ZTD: 0, PWV: 0, count: 0 };
//     }
//     acc[week].ZTD += item.ZTD * 1000; // Convert ZTD to mm
//     acc[week].PWV += item.PWV;
//     acc[week].count += 1;
//     return acc;
//   }, {})
// ).map((item) => ({
//   week: item.week,
//   ZTD: Math.round(item.ZTD / item.count), // Average ZTD
//   PWV: Math.round(item.PWV / item.count), // Average PWV
// }));

// const chartConfig = {
//   ZTD: {
//     label: "ZTD (mm)",
//     color: "hsl(var(--chart-1))",
//   },
//   PWV: {
//     label: "PWV (mm)",
//     color: "hsl(var(--chart-2))",
//   },
// } satisfies ChartConfig;

// export function WeeklyVisualizationPage() {
//   return (
//     <>
//       <div className="my-4 text-center">
//         <Badge className="px-3 py-2">November 2023 - June 2024 (Weekly)</Badge>
//       </div>
//       <section className="px-4">
//         <Card>
//           <CardHeader className="text-center">
//             <CardTitle>Weekly Analysis - ZTD and PWV</CardTitle>
//             <CardDescription>
//               Data aggregated by weeks from November 2023 - June 2024
//             </CardDescription>
//           </CardHeader>
//           <CardContent>
//             <ChartContainer
//               className="min-h-[300px] h-[200px] w-full"
//               config={chartConfig}
//             >
//               <LineChart
//                 data={weeklyChartData}
//                 margin={{
//                   top: 20,
//                   right: 50,
//                   left: 20,
//                   bottom: 5,
//                 }}
//               >
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis
//                   dataKey="week"
//                   tickLine={false}
//                   axisLine={false}
//                   tickMargin={8}
//                 />
//                 {/* Left Y-Axis for ZTD */}
//                 <YAxis
//                   yAxisId="left"
//                   domain={["dataMin - 5", "dataMax + 5"]} // Covers approximately 70 units spread
//                   tickCount={8} // Ensures intervals are consistent with 70 units range
//                   tickLine={false}
//                   axisLine={false}
//                   tickMargin={8}
//                   label={{
//                     value: "ZTD (mm)",
//                     angle: -90,
//                     position: "insideLeft",
//                   }}
//                   stroke="blue"
//                 />
//                 {/* Right Y-Axis for PWV */}
//                 <YAxis
//                   yAxisId="right"
//                   domain={[40, 60]} // Fixed range for PWV values
//                   tickCount={3} // Adjust to 15 units interval (40, 55, 60)
//                   orientation="right"
//                   tickLine={false}
//                   axisLine={false}
//                   tickMargin={8}
//                   label={{
//                     value: "PWV (mm)",
//                     angle: -90,
//                     position: "insideRight",
//                   }}
//                   stroke="red"
//                 />
//                 <Tooltip content={<ChartTooltipContent />} />
//                 <Legend
//                   verticalAlign="top"
//                   wrapperStyle={{ lineHeight: "40px" }}
//                 />
//                 <Line
//                   yAxisId="left"
//                   dataKey="ZTD"
//                   type="monotone"
//                   stroke="blue"
//                   strokeWidth={2}
//                   dot={false}
//                   name="ZTD (mm)"
//                 />
//                 <Line
//                   yAxisId="right"
//                   dataKey="PWV"
//                   type="monotone"
//                   stroke="red"
//                   strokeWidth={2}
//                   dot={false}
//                   name="PWV (mm)"
//                 />
//               </LineChart>
//             </ChartContainer>
//           </CardContent>
//         </Card>
//       </section>
//     </>
//   );
// }

import {
  CartesianGrid,
  Line,
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltipContent,
} from "@/components/ui/chart";

import outputData from "@/data/output.json";
import { Badge } from "@/components/ui/badge";

// Helper function to determine the week number of a date within a month
function getWeekOfMonth(date: Date) {
  const day = date.getDate();
  return Math.ceil(day / 7); // Week 1: 1-7, Week 2: 8-14, etc.
}

// Format the data to group by week
type WeekData = {
  ZTD: number;
  PWV: number;
  count: number;
};

const weeklyData: Record<string, WeekData> = {}; // Define the shape of weeklyData

outputData.forEach((item) => {
  const date = new Date(item.Date);
  const month = date.toLocaleDateString("en-US", { month: "short" });
  const week = getWeekOfMonth(date);
  const weekLabel = `${month}-W${week}`;

  if (!weeklyData[weekLabel]) {
    weeklyData[weekLabel] = { ZTD: 0, PWV: 0, count: 0 };
  }

  weeklyData[weekLabel].ZTD += item.ZTD;
  weeklyData[weekLabel].PWV += item.PWV;
  weeklyData[weekLabel].count += 1;
});

// Calculate the average for each week
const chartData = Object.entries(weeklyData).map(([weekLabel, data]) => ({
  date: weekLabel,
  ZTD: Math.round((data.ZTD / data.count) * 1000), // Convert ZTD to mm and round it
  PWV: Math.round(data.PWV / data.count),
}));

const chartConfig = {
  ZTD: {
    label: "ZTD (mm)",
    color: "hsl(var(--chart-1))",
  },
  PWV: {
    label: "PWV (mm)",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export function WeeklyVisualizationPage() {
  return (
    <>
      <div className="my-4 text-center">
        <Badge className="px-3 py-2">
          November 2023 - June 2024 (Weekly Average)
        </Badge>
      </div>
      <section className="px-4">
        <Card>
          <CardHeader className="text-center">
            <CardTitle>Time Series - ZTD and PWV</CardTitle>
            <CardDescription>
              Data from November 2023 - June 2024 (Weekly Averages)
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              className="min-h-[300px] h-[200px] w-full"
              config={chartConfig}
            >
              <LineChart
                data={chartData}
                margin={{
                  top: 20,
                  right: 50,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="date"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                />
                {/* Left Y-Axis for ZTD */}
                <YAxis
                  yAxisId="left"
                  domain={["dataMin - 5", "dataMax + 5"]} // Covers approximately 70 units spread
                  tickCount={8} // Ensures intervals are consistent with 70 units range
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  label={{
                    value: "ZTD (mm)",
                    angle: -90,
                    position: "insideLeft",
                  }}
                  stroke="blue"
                />
                {/* Right Y-Axis for PWV */}
                <YAxis
                  yAxisId="right"
                  domain={[40, 60]} // Fixed range for PWV values
                  tickCount={3} // Adjust to 15 units interval (40, 55, 60)
                  orientation="right"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  label={{
                    value: "PWV (mm)",
                    angle: -90,
                    position: "insideRight",
                  }}
                  stroke="red"
                />
                <Tooltip content={<ChartTooltipContent />} />
                <Legend
                  verticalAlign="top"
                  wrapperStyle={{ lineHeight: "40px" }}
                />
                <Line
                  yAxisId="left"
                  dataKey="ZTD"
                  type="monotone"
                  stroke="blue"
                  strokeWidth={2}
                  dot={false}
                  name="ZTD (mm)"
                />
                <Line
                  yAxisId="right"
                  dataKey="PWV"
                  type="monotone"
                  stroke="red"
                  strokeWidth={2}
                  dot={false}
                  name="PWV (mm)"
                />
              </LineChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </section>
    </>
  );
}
