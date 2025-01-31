"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
  { month: "January", harvest: 150 },
  { month: "February", harvest: 200 },
  { month: "March", harvest: 180 },
  { month: "April", harvest: 220 },
  { month: "May", harvest: 250 },
  { month: "June", harvest: 300 },
]

const chartConfig = {
  harvest: {
    label: "Harvest (kg)",
    color: "hsl(215, 100%, 40%)", // Blue color for bars
  },
} satisfies ChartConfig

export function ShrimpHarvest() {
  return (
    <Card className="flex flex-col bg-white shadow-lg border border-blue-200">
      <CardHeader className="items-center pb-0">
        <CardTitle className="text-blue-900">Monthly Shrimp Harvest</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer config={chartConfig}>
          <BarChart
            data={chartData}
            margin={{
              top: 20,
            }}
          >
            <CartesianGrid vertical={false} stroke="hsl(215, 100%, 90%)" />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="harvest" fill="hsl(215, 100%, 40%)" radius={8}>
              <LabelList
                position="top"
                offset={12}
                className="fill-foreground"
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium text-blue-900 leading-none mt-3">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4 text-green-500" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total shrimp harvest for the last 6 months
        </div>
      </CardFooter>
    </Card>
  )
}
