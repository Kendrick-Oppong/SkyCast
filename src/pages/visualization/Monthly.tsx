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

// Helper function to determine the month of a date
function getMonthLabel(date: Date) {
  return date.toLocaleDateString("en-US", { year: "numeric", month: "short" });
}

// Format the data to group by month
type MonthData = {
  ZTD: number;
  PWV: number;
  count: number;
};

const monthlyData: Record<string, MonthData> = {}; // Define the shape of monthlyData

outputData.forEach((item) => {
  const date = new Date(item.Date);
  const monthLabel = getMonthLabel(date);

  if (!monthlyData[monthLabel]) {
    monthlyData[monthLabel] = { ZTD: 0, PWV: 0, count: 0 };
  }

  monthlyData[monthLabel].ZTD += item.ZTD;
  monthlyData[monthLabel].PWV += item.PWV;
  monthlyData[monthLabel].count += 1;
});

// Calculate the average for each month
const chartData = Object.entries(monthlyData).map(([monthLabel, data]) => ({
  date: monthLabel,
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

export function MonthlyVisualizationPage() {
  return (
    <>
      <div className="my-4 text-center">
        <Badge className="px-3 py-2">
          November 2023 - June 2024 (Monthly Average)
        </Badge>
      </div>
      <section className="px-4">
        <Card>
          <CardHeader className="text-center">
            <CardTitle>Time Series - ZTD and PWV</CardTitle>
            <CardDescription>
              Data from November 2023 - June 2024 (Monthly Averages)
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
                  domain={[2420, 2581]} // Set range to match weekly data
                  tickCount={4} // Adjust to match intervals of 60 (e.g., 2420, 2480, 2540, 2580)
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

// // Helper function to format month and year
// function getMonthYear(date: Date) {
//   return date.toLocaleDateString("en-US", { year: "numeric", month: "short" });
// }

// // Format the data to group by month
// type MonthData = {
//   ZTD: number;
//   PWV: number;
//   count: number;
// };

// const monthlyData: Record<string, MonthData> = {}; // Define the shape of monthlyData

// outputData.forEach((item) => {
//   const date = new Date(item.Date);
//   const monthYear = getMonthYear(date);

//   if (!monthlyData[monthYear]) {
//     monthlyData[monthYear] = { ZTD: 0, PWV: 0, count: 0 };
//   }

//   monthlyData[monthYear].ZTD += item.ZTD;
//   monthlyData[monthYear].PWV += item.PWV;
//   monthlyData[monthYear].count += 1;
// });

// // Calculate the average for each month
// const chartData = Object.entries(monthlyData).map(([monthYear, data]) => ({
//   date: monthYear,
//   ZTD: Math.round((data.ZTD / data.count) * 1000), // Convert ZTD to mm and round it
//   PWV: Math.round(data.PWV / data.count),
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

// export function MonthlyVisualizationPage() {
//   return (
//     <>
//       <div className="my-4 text-center">
//         <Badge className="px-3 py-2">
//           November 2023 - June 2024 (Monthly Average)
//         </Badge>
//       </div>
//       <section className="px-4">
//         <Card>
//           <CardHeader className="text-center">
//             <CardTitle>Time Series - ZTD and PWV</CardTitle>
//             <CardDescription>
//               Data from November 2023 - June 2024 (Monthly Averages)
//             </CardDescription>
//           </CardHeader>
//           <CardContent>
//             <ChartContainer
//               className="min-h-[300px] h-[200px] w-full"
//               config={chartConfig}
//             >
//               <LineChart
//                 data={chartData}
//                 margin={{
//                   top: 20,
//                   right: 50,
//                   left: 20,
//                   bottom: 5,
//                 }}
//               >
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis
//                   dataKey="date"
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
