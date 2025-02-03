"use client"

import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts"

const data = [
  { date: "Mar", value: 28 },
  { date: "Apr", value: 29 },
  { date: "May", value: 27 },
  { date: "Jun", value: 30 },
  { date: "Jul", value: 31 },
  { date: "Aug", value: 30 },
  { date: "Sep", value: 29 },
  { date: "Oct", value: 28 },
  { date: "Nov", value: 27 },
  { date: "Dec", value: 26 },
  { date: "Jan", value: 25 },
  { date: "Feb", value: 26 },
]

export function StatsChart() {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <Tooltip
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                return (
                  <div className="rounded-lg border bg-white p-2 shadow-sm">
                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex flex-col">
                        <span className="text-[0.70rem] uppercase text-blue-600">Temperature</span>
                        <span className="font-bold text-blue-900">{payload[0].value}°C</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[0.70rem] uppercase text-blue-600">Date</span>
                        <span className="font-bold text-blue-900">{payload[0].payload.date}</span>
                      </div>
                    </div>
                  </div>
                )
              }
              return null
            }}
          />
          <Line type="monotone" dataKey="value" stroke="#2563eb" strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

