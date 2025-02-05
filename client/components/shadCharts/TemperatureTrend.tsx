"use client"

import * as React from "react"
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
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
    { date: "2024-04-01", waterQuality: 78, shrimpHealth: 82 },
    { date: "2024-04-02", waterQuality: 65, shrimpHealth: 76 },
    { date: "2024-04-03", waterQuality: 70, shrimpHealth: 79 },
    { date: "2024-04-04", waterQuality: 82, shrimpHealth: 88 },
    { date: "2024-04-05", waterQuality: 90, shrimpHealth: 92 },
    { date: "2024-04-06", waterQuality: 85, shrimpHealth: 87 },
    { date: "2024-04-07", waterQuality: 79, shrimpHealth: 80 },
    { date: "2024-04-08", waterQuality: 91, shrimpHealth: 94 },
    { date: "2024-04-09", waterQuality: 60, shrimpHealth: 65 },
    { date: "2024-04-10", waterQuality: 75, shrimpHealth: 78 },
    { date: "2024-04-11", waterQuality: 83, shrimpHealth: 85 },
    { date: "2024-04-12", waterQuality: 80, shrimpHealth: 82 },
    { date: "2024-04-13", waterQuality: 87, shrimpHealth: 89 },
    { date: "2024-04-14", waterQuality: 72, shrimpHealth: 74 },
    { date: "2024-04-15", waterQuality: 68, shrimpHealth: 70 },
    { date: "2024-04-16", waterQuality: 71, shrimpHealth: 75 },
    { date: "2024-04-17", waterQuality: 95, shrimpHealth: 96 },
    { date: "2024-04-18", waterQuality: 88, shrimpHealth: 90 },
    { date: "2024-04-19", waterQuality: 79, shrimpHealth: 81 },
    { date: "2024-04-20", waterQuality: 65, shrimpHealth: 68 },
    { date: "2024-04-21", waterQuality: 72, shrimpHealth: 75 },
    { date: "2024-04-22", waterQuality: 80, shrimpHealth: 82 },
    { date: "2024-04-23", waterQuality: 74, shrimpHealth: 77 },
    { date: "2024-04-24", waterQuality: 89, shrimpHealth: 91 },
    { date: "2024-04-25", waterQuality: 82, shrimpHealth: 85 },
    { date: "2024-04-26", waterQuality: 67, shrimpHealth: 70 },
    { date: "2024-04-27", waterQuality: 90, shrimpHealth: 92 },
    { date: "2024-04-28", waterQuality: 73, shrimpHealth: 76 },
    { date: "2024-04-29", waterQuality: 85, shrimpHealth: 87 },
    { date: "2024-04-30", waterQuality: 92, shrimpHealth: 94 },
    
  ]

const chartConfig = {
  waterQuality: {
    label: "Water Quality",
    color: "#2563EB",
  },
  shrimpHealth: {
    label: "Shrimp Health",
    color: "#00A3A4",
  },
} satisfies ChartConfig

export function TemperatureTrend() {
  const [activeChart, setActiveChart] =
    React.useState<keyof typeof chartConfig>("waterQuality")

  const total = React.useMemo(
    () => ({
      waterQuality:
        chartData.reduce((acc, curr) => acc + curr.waterQuality, 0) /
        chartData.length,
      shrimpHealth:
        chartData.reduce((acc, curr) => acc + curr.shrimpHealth, 0) /
        chartData.length,
    }),
    []
  )

  return (
    <Card>
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
          <CardTitle className="text-blue-900 text-2xl font-bold tracking-tight leading-normal">
            Water Quality & Shrimp Health
          </CardTitle>
          <CardDescription>
            Monitoring the correlation between water quality and shrimp health.
          </CardDescription>
        </div>
        <div className="flex">
          {["waterQuality", "shrimpHealth"].map((key) => {
            const chart = key as keyof typeof chartConfig
            return (
              <button
                key={chart}
                data-active={activeChart === chart}
                className="flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6"
                onClick={() => setActiveChart(chart)}
              >
                <span className="text-xs text-muted-foreground">
                  {chartConfig[chart].label}
                </span>
                <span className="text-lg font-bold leading-none sm:text-3xl">
                  {total[key as keyof typeof total].toFixed(1)}%
                </span>
              </button>
            )
          })}
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value)
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })
              }}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey="views"
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })
                  }}
                />
              }
            />
            <Line
              dataKey={activeChart}
              type="monotone"
              stroke={`var(--color-${activeChart})`}
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
