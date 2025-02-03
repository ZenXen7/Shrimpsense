import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ShrimpDataTable } from "@/components/dashboard/shrimp-data-table"
import { BarChart3, ChevronDown, Droplets, Home, LayoutDashboard, LifeBuoy, Settings, Fish } from "lucide-react"
import { MetricsCard } from "@/components/dashboard/metrics-card"
import { StatsChart } from "@/components/dashboard/stats-chart"

export default function Page() {
  return (
    <div className="min-h-screen  text-blue-900">
      <div className="grid lg:grid-cols-[280px_1fr]">
        <aside className="border-r bg-white">
          <div className="flex h-16 items-center gap-2 border-b px-6">
            <Fish className="h-6 w-6 text-blue-600" />
            <span className="font-bold text-blue-900">ShrimpSense</span>
          </div>
          <div className="px-4 py-4">
            <Input placeholder="Search" className="bg-blue-50" />
          </div>
          <nav className="space-y-2 px-2">
            <Button variant="ghost" className="w-full justify-start gap-2 text-blue-700">
              <LayoutDashboard className="h-4 w-4" />
              Dashboard
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2 text-blue-700">
              <BarChart3 className="h-4 w-4" />
              Analytics
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2 text-blue-700">
              <Droplets className="h-4 w-4" />
              Water Quality
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2 text-blue-700">
              <Home className="h-4 w-4" />
              Pond Management
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2 text-blue-700">
              <Fish className="h-4 w-4" />
              Shrimp Health
              <ChevronDown className="ml-auto h-4 w-4" />
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2 text-blue-700">
              <LifeBuoy className="h-4 w-4" />
              Support
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2 text-blue-700">
              <Settings className="h-4 w-4" />
              Settings
            </Button>
          </nav>
        </aside>
        <main className="p-6">
          <div className="mb-6 flex items-center justify-between">
            <div className="space-y-1">
              <h1 className="text-2xl font-bold text-blue-900">Shrimp Farm Overview</h1>
              <div className="text-sm text-blue-600">Aug 13, 2023 - Aug 18, 2023</div>
            </div>
            <Button variant="outline" className="gap-2 text-blue-700">
              Pond 1
              <ChevronDown className="h-4 w-4" />
            </Button>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            <MetricsCard
              title="Average Temperature"
              value="28"
              unit="°C"
              change={{ value: "+0.5°C", percentage: "+1.8%", isPositive: true }}
            />
            <MetricsCard
              title="Dissolved Oxygen"
              value="5.5"
              unit="mg/L"
              change={{ value: "-0.2 mg/L", percentage: "-3.5%", isPositive: false }}
            />
            <MetricsCard
              title="pH Level"
              value="7.8"
              unit=""
              change={{ value: "+0.1", percentage: "+1.3%", isPositive: true }}
            />
          </div>
          <Card className="mt-6 p-6 bg-white">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-semibold text-blue-900 ">Temperature Trend</h2>
              <div className="flex gap-2">
                <Button size="sm" variant="ghost" className="text-blue-700">
                  Today
                </Button>
                <Button size="sm" variant="ghost" className="text-blue-700">
                  Week
                </Button>
                <Button size="sm" variant="ghost" className="text-blue-700">
                  Month
                </Button>
                <Button size="sm" variant="ghost" className="text-blue-700">
                  Quarter
                </Button>
                <Button size="sm" variant="ghost" className="text-blue-700">
                  Year
                </Button>
              </div>
            </div>
            <StatsChart />
          </Card>
          <div className="mt-6">
            <Card className="bg-white">
              <div className="p-6">
                <h2 className="text-lg font-semibold text-blue-900 mb-4">Water Quality Parameters</h2>
                <ShrimpDataTable />
              </div>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}

