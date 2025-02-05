"use client"

import * as React from "react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

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
  { date: "2024-04-01", shrimpHealth: 75, waterQuality: 85 },
  { date: "2024-04-02", shrimpHealth: 78, waterQuality: 82 },
  { date: "2024-04-03", shrimpHealth: 80, waterQuality: 79 },
  { date: "2024-04-04", shrimpHealth: 82, waterQuality: 90 },
  { date: "2024-04-05", shrimpHealth: 88, waterQuality: 88 },
  { date: "2024-04-06", shrimpHealth: 85, waterQuality: 85 },
  { date: "2024-04-01", shrimpHealth: 75, waterQuality: 85 },
  { date: "2024-04-02", shrimpHealth: 78, waterQuality: 82 },
  { date: "2024-04-03", shrimpHealth: 80, waterQuality: 79 },
  { date: "2024-04-04", shrimpHealth: 82, waterQuality: 90 },
  { date: "2024-04-05", shrimpHealth: 88, waterQuality: 88 },
  { date: "2024-04-01", shrimpHealth: 75, waterQuality: 85 },
  { date: "2024-04-02", shrimpHealth: 78, waterQuality: 82 },
  { date: "2024-04-03", shrimpHealth: 80, waterQuality: 79 },
  { date: "2024-04-04", shrimpHealth: 82, waterQuality: 90 },
  { date: "2024-04-05", shrimpHealth: 88, waterQuality: 88 },
  { date: "2024-04-01", shrimpHealth: 75, waterQuality: 85 },
  { date: "2024-04-02", shrimpHealth: 78, waterQuality: 82 },
  { date: "2024-04-03", shrimpHealth: 80, waterQuality: 79 },
  { date: "2024-04-04", shrimpHealth: 82, waterQuality: 90 },
  { date: "2024-04-05", shrimpHealth: 88, waterQuality: 88 },
  { date: "2024-04-07", shrimpHealth: 90, waterQuality: 92 },
  { date: "2024-04-08", shrimpHealth: 92, waterQuality: 95 },
  { date: "2024-04-09", shrimpHealth: 93, waterQuality: 97 },
  { date: "2024-04-10", shrimpHealth: 95, waterQuality: 98 },
  { date: "2024-04-11", shrimpHealth: 96, waterQuality: 95 },
  { date: "2024-04-12", shrimpHealth: 98, waterQuality: 98 },
  { date: "2024-04-13", shrimpHealth: 94, waterQuality: 90 },
  { date: "2024-04-14", shrimpHealth: 92, waterQuality: 85 },
  { date: "2024-04-15", shrimpHealth: 91, waterQuality: 92 },
  { date: "2024-04-16", shrimpHealth: 90, waterQuality: 90 },
  { date: "2024-04-17", shrimpHealth: 85, waterQuality: 80 },
  { date: "2024-04-18", shrimpHealth: 80, waterQuality: 75 },
  { date: "2024-04-19", shrimpHealth: 79, waterQuality: 77 },
  { date: "2024-04-20", shrimpHealth: 76, waterQuality: 80 },
  { date: "2024-04-21", shrimpHealth: 78, waterQuality: 78 },
  { date: "2024-04-22", shrimpHealth: 77, waterQuality: 75 },
  { date: "2024-04-23", shrimpHealth: 76, waterQuality: 73 },
  { date: "2024-04-24", shrimpHealth: 78, waterQuality: 74 },
  { date: "2024-04-25", shrimpHealth: 80, waterQuality: 77 },
  { date: "2024-04-26", shrimpHealth: 83, waterQuality: 80 },
  { date: "2024-04-27", shrimpHealth: 85, waterQuality: 83 },
  { date: "2024-04-28", shrimpHealth: 87, waterQuality: 85 },
  { date: "2024-04-29", shrimpHealth: 88, waterQuality: 89 },
  { date: "2024-04-30", shrimpHealth: 90, waterQuality: 92 },
  { date: "2024-05-01", shrimpHealth: 92, waterQuality: 93 },
  { date: "2024-05-02", shrimpHealth: 90, waterQuality: 89 },
  { date: "2024-05-03", shrimpHealth: 93, waterQuality: 92 },
  { date: "2024-05-04", shrimpHealth: 95, waterQuality: 94 },
  { date: "2024-04-02", shrimpHealth: 78, waterQuality: 82 },
  { date: "2024-04-03", shrimpHealth: 80, waterQuality: 79 },
  { date: "2024-04-04", shrimpHealth: 82, waterQuality: 90 },
  { date: "2024-04-05", shrimpHealth: 88, waterQuality: 88 },
  { date: "2024-04-06", shrimpHealth: 85, waterQuality: 85 },
  { date: "2024-04-07", shrimpHealth: 90, waterQuality: 92 },
  { date: "2024-04-08", shrimpHealth: 92, waterQuality: 95 },
  { date: "2024-04-09", shrimpHealth: 93, waterQuality: 97 },
  { date: "2024-04-10", shrimpHealth: 95, waterQuality: 98 },
  { date: "2024-04-11", shrimpHealth: 96, waterQuality: 95 },
  { date: "2024-04-12", shrimpHealth: 98, waterQuality: 98 },
  { date: "2024-04-13", shrimpHealth: 94, waterQuality: 90 },
  { date: "2024-04-14", shrimpHealth: 92, waterQuality: 85 },
  { date: "2024-04-15", shrimpHealth: 91, waterQuality: 92 },
  { date: "2024-04-16", shrimpHealth: 90, waterQuality: 90 },
  { date: "2024-04-17", shrimpHealth: 85, waterQuality: 80 },
  { date: "2024-04-18", shrimpHealth: 80, waterQuality: 75 },
  { date: "2024-04-19", shrimpHealth: 79, waterQuality: 77 },
  { date: "2024-04-20", shrimpHealth: 76, waterQuality: 80 },
  { date: "2024-04-21", shrimpHealth: 78, waterQuality: 78 },
  { date: "2024-04-22", shrimpHealth: 77, waterQuality: 75 },
  { date: "2024-04-23", shrimpHealth: 76, waterQuality: 73 },
  { date: "2024-04-24", shrimpHealth: 78, waterQuality: 74 },
  { date: "2024-04-25", shrimpHealth: 80, waterQuality: 77 },
  { date: "2024-04-26", shrimpHealth: 83, waterQuality: 80 },
  { date: "2024-04-27", shrimpHealth: 85, waterQuality: 83 },
  { date: "2024-04-28", shrimpHealth: 87, waterQuality: 85 },
  { date: "2024-04-29", shrimpHealth: 88, waterQuality: 89 },
  { date: "2024-04-30", shrimpHealth: 90, waterQuality: 92 },
  { date: "2024-05-01", shrimpHealth: 92, waterQuality: 93 },
  { date: "2024-05-02", shrimpHealth: 90, waterQuality: 89 },
  { date: "2024-05-03", shrimpHealth: 93, waterQuality: 92 },
  { date: "2024-05-04", shrimpHealth: 95, waterQuality: 94 },
  { date: "2024-05-05", shrimpHealth: 98, waterQuality: 98 },
  { date: "2024-05-06", shrimpHealth: 100, waterQuality: 100 },
  { date: "2024-05-07", shrimpHealth: 102, waterQuality: 102 },
  { date: "2024-05-08", shrimpHealth: 104, waterQuality: 105 },
  { date: "2024-05-09", shrimpHealth: 106, waterQuality: 107 },
  { date: "2024-05-10", shrimpHealth: 108, waterQuality: 109 },
  { date: "2024-05-11", shrimpHealth: 110, waterQuality: 110 },
  { date: "2024-05-12", shrimpHealth: 115, waterQuality: 113 },
  { date: "2024-05-13", shrimpHealth: 113, waterQuality: 110 },
  { date: "2024-05-14", shrimpHealth: 111, waterQuality: 108 },
  { date: "2024-05-15", shrimpHealth: 109, waterQuality: 107 },
  { date: "2024-05-16", shrimpHealth: 106, waterQuality: 105 },
  { date: "2024-05-17", shrimpHealth: 105, waterQuality: 102 },
  { date: "2024-05-18", shrimpHealth: 108, waterQuality: 104 },
  { date: "2024-05-19", shrimpHealth: 110, waterQuality: 107 },
  { date: "2024-05-20", shrimpHealth: 111, waterQuality: 109 },
  { date: "2024-05-21", shrimpHealth: 113, waterQuality: 112 },
  { date: "2024-05-22", shrimpHealth: 115, waterQuality: 114 },
  { date: "2024-05-23", shrimpHealth: 116, waterQuality: 116 },
  { date: "2024-05-24", shrimpHealth: 118, waterQuality: 119 },
  { date: "2024-05-25", shrimpHealth: 120, waterQuality: 121 },
  { date: "2024-05-26", shrimpHealth: 121, waterQuality: 122 },
  { date: "2024-05-27", shrimpHealth: 124, waterQuality: 124 },
  { date: "2024-05-28", shrimpHealth: 125, waterQuality: 126 },
  { date: "2024-05-29", shrimpHealth: 128, waterQuality: 128 },
  { date: "2024-05-30", shrimpHealth: 130, waterQuality: 130 },
  { date: "2024-05-31", shrimpHealth: 132, waterQuality: 132 },
  { date: "2024-06-01", shrimpHealth: 131, waterQuality: 130 },
  { date: "2024-06-02", shrimpHealth: 134, waterQuality: 133 },
  { date: "2024-06-03", shrimpHealth: 136, waterQuality: 135 },
  { date: "2024-06-04", shrimpHealth: 138, waterQuality: 137 },
  { date: "2024-06-05", shrimpHealth: 140, waterQuality: 140 },
  { date: "2024-06-06", shrimpHealth: 142, waterQuality: 142 },
  { date: "2024-06-07", shrimpHealth: 143, waterQuality: 143 },
  { date: "2024-06-08", shrimpHealth: 145, waterQuality: 145 },
  { date: "2024-06-09", shrimpHealth: 148, waterQuality: 148 },
  { date: "2024-06-10", shrimpHealth: 150, waterQuality: 150 },
  { date: "2024-06-11", shrimpHealth: 152, waterQuality: 151 },
  { date: "2024-06-12", shrimpHealth: 155, waterQuality: 153 },
  { date: "2024-06-13", shrimpHealth: 156, waterQuality: 155 },
  { date: "2024-06-14", shrimpHealth: 158, waterQuality: 157 },
  { date: "2024-06-15", shrimpHealth: 160, waterQuality: 160 },
  { date: "2024-06-16", shrimpHealth: 161, waterQuality: 161 },
  { date: "2024-06-17", shrimpHealth: 159, waterQuality: 158 },
  { date: "2024-05-05", shrimpHealth: 98, waterQuality: 98 },
  { date: "2024-05-06", shrimpHealth: 100, waterQuality: 100 },
  { date: "2024-05-07", shrimpHealth: 102, waterQuality: 102 },
  { date: "2024-05-08", shrimpHealth: 104, waterQuality: 105 },
  { date: "2024-05-09", shrimpHealth: 106, waterQuality: 107 },
  { date: "2024-05-10", shrimpHealth: 108, waterQuality: 109 },
  { date: "2024-05-11", shrimpHealth: 110, waterQuality: 110 },
  { date: "2024-05-12", shrimpHealth: 115, waterQuality: 113 },
  { date: "2024-05-13", shrimpHealth: 113, waterQuality: 110 },
  { date: "2024-05-14", shrimpHealth: 111, waterQuality: 108 },
  { date: "2024-05-15", shrimpHealth: 109, waterQuality: 107 },
  { date: "2024-05-16", shrimpHealth: 106, waterQuality: 105 },
  { date: "2024-05-17", shrimpHealth: 105, waterQuality: 102 },
  { date: "2024-05-18", shrimpHealth: 108, waterQuality: 104 },
  { date: "2024-05-19", shrimpHealth: 110, waterQuality: 107 },
  { date: "2024-05-20", shrimpHealth: 111, waterQuality: 109 },
  { date: "2024-05-21", shrimpHealth: 113, waterQuality: 112 },
  { date: "2024-05-22", shrimpHealth: 115, waterQuality: 114 },
  { date: "2024-05-23", shrimpHealth: 116, waterQuality: 116 },
  { date: "2024-05-24", shrimpHealth: 118, waterQuality: 119 },
  { date: "2024-05-25", shrimpHealth: 120, waterQuality: 121 },
  { date: "2024-05-26", shrimpHealth: 121, waterQuality: 122 },
  { date: "2024-05-27", shrimpHealth: 124, waterQuality: 124 },
  { date: "2024-05-28", shrimpHealth: 125, waterQuality: 126 },
  { date: "2024-05-29", shrimpHealth: 128, waterQuality: 128 },
  { date: "2024-05-30", shrimpHealth: 130, waterQuality: 130 },
  { date: "2024-05-31", shrimpHealth: 132, waterQuality: 132 },
  { date: "2024-06-01", shrimpHealth: 131, waterQuality: 130 },
  { date: "2024-06-02", shrimpHealth: 134, waterQuality: 133 },
  { date: "2024-06-03", shrimpHealth: 136, waterQuality: 135 },
  { date: "2024-06-04", shrimpHealth: 138, waterQuality: 137 },
  { date: "2024-06-05", shrimpHealth: 140, waterQuality: 140 },
  { date: "2024-06-06", shrimpHealth: 142, waterQuality: 142 },
  { date: "2024-06-07", shrimpHealth: 143, waterQuality: 143 },
  { date: "2024-06-08", shrimpHealth: 145, waterQuality: 145 },
  { date: "2024-06-09", shrimpHealth: 148, waterQuality: 148 },
  { date: "2024-06-10", shrimpHealth: 150, waterQuality: 150 },
  { date: "2024-06-11", shrimpHealth: 152, waterQuality: 151 },
  { date: "2024-06-12", shrimpHealth: 155, waterQuality: 153 },
  { date: "2024-06-13", shrimpHealth: 156, waterQuality: 155 },
  { date: "2024-06-14", shrimpHealth: 158, waterQuality: 157 },
  { date: "2024-06-15", shrimpHealth: 160, waterQuality: 160 },
  { date: "2024-06-16", shrimpHealth: 161, waterQuality: 161 },
  { date: "2024-06-17", shrimpHealth: 159, waterQuality: 158 },
  { date: "2024-06-18", shrimpHealth: 157, waterQuality: 156 },
  { date: "2024-06-19", shrimpHealth: 155, waterQuality: 154 },
  { date: "2024-06-20", shrimpHealth: 154, waterQuality: 153 },
  { date: "2024-06-21", shrimpHealth: 153, waterQuality: 151 },
  { date: "2024-06-22", shrimpHealth: 151, waterQuality: 150 },
  { date: "2024-06-23", shrimpHealth: 150, waterQuality: 149 },
  { date: "2024-06-24", shrimpHealth: 148, waterQuality: 147 },
  { date: "2024-06-25", shrimpHealth: 146, waterQuality: 145 },
];

const chartConfig: Record<string, { label: string; color: string }> = {
  shrimpHealth: {
    label: "Shrimp Health",
    color: "#00A3A4", // Color for shrimp health
  },
  waterQuality: {
    label: "Water Quality",
    color: "#2563EB", // Color for water quality
  },
} satisfies ChartConfig
 

export function ShrimpHealthChart() {
  const [activeChart, setActiveChart] =
    React.useState<keyof typeof chartConfig>("shrimpHealth")

  const total = React.useMemo(
    () => ({
      shrimpHealth: chartData.reduce((acc, curr) => acc + curr.shrimpHealth, 0),
      waterQuality: chartData.reduce((acc, curr) => acc + curr.waterQuality, 0),
    }),
    []
  )

  return (
    <Card className="">
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
  <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
    <div className="b p-6 rounded-lg">
      <h1 className="ml-10 text-3xl md:text-4xl lg:text-5xl font-extrabold text-blue-900 leading-tight tracking-tight">
        Visualize your data in real-time.
      </h1>
    </div>
  </div>

  <div className="flex">
    {["shrimpHealth", "waterQuality"].map((key) => {
      const chart = key as keyof typeof chartConfig
      return (
        <button
          key={chart}
          data-active={activeChart === chart}
          className="relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6"
          onClick={() => setActiveChart(chart)}
        >
          <span
            className="text-xl sm:text-2xl font-extrabold text-center"
            style={{ color: chartConfig[chart].color }}
          >
            {chartConfig[chart].label}
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
          <BarChart
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
              content={(
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
              )}
            />
            <Bar dataKey={activeChart} fill={chartConfig[activeChart].color} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
