import { Card } from "@/components/ui/card"
import { ArrowUpRight } from "lucide-react"
import type React from "react"

interface MetricsCardProps {
  title: string
  value: string
  unit: string
  change: {
    value: string
    percentage: string
    isPositive: boolean
  }
  chart?: React.ReactNode
}

export function MetricsCard({ title, value, unit, change, chart }: MetricsCardProps) {
  return (
    <Card className="p-4 bg-white shadow-md">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm text-blue-600">{title}</h3>
        {chart ? <ArrowUpRight className="h-4 w-4 text-blue-600" /> : null}
      </div>
      <div className="flex items-end justify-between">
        <div>
          <p className="text-2xl font-bold text-blue-900">
            {value} <span className="text-sm font-normal text-blue-600">{unit}</span>
          </p>
          <div className="flex items-center gap-1 mt-1">
            <span className="text-sm text-blue-700">{change.value}</span>
            <span className={`text-sm ${change.isPositive ? "text-green-500" : "text-red-500"}`}>
              {change.percentage}
            </span>
          </div>
        </div>
        {chart}
      </div>
    </Card>
  )
}

