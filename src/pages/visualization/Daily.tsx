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

// Format the data for Recharts
const chartData = outputData.map((item) => ({
  date: new Date(item.Date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  }),
  ZTD: Math.round(item.ZTD * 1000), // Convert ZTD to mm
  PWV: Math.round(item.PWV),
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

export function DailyVisualizationPage() {
  return (
    <>
      <div className="my-4 text-center">
        <Badge className="px-3 py-2">November 2023 - June 2024 (Daily)</Badge>
      </div>
      <section className="px-4">
        <Card>
          <CardHeader className="text-center">
            <CardTitle>Time Series - ZTD and PWV</CardTitle>
            <CardDescription>
              Data from November 2023 - June 2024
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
