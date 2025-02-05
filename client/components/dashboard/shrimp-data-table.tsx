import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { MoreHorizontal } from "lucide-react"

const shrimpData = [
  {
    parameter: "Temperature",
    value: "28°C",
    status: "Optimal",
    lastUpdated: "10 min ago",
  },
  {
    parameter: "Salinity",
    value: "15 ppt",
    status: "Warning",
    lastUpdated: "5 min ago",
  },
  {
    parameter: "pH",
    value: "7.8",
    status: "Optimal",
    lastUpdated: "15 min ago",
  },
  {
    parameter: "Dissolved Oxygen",
    value: "5.5 mg/L",
    status: "Optimal",
    lastUpdated: "8 min ago",
  },
  {
    parameter: "Alkalinity",
    value: "120 mg/L",
    status: "Optimal",
    lastUpdated: "20 min ago",
  },
  {
    parameter: "Transparency",
    value: "35 cm",
    status: "Warning",
    lastUpdated: "12 min ago",
  },
  {
    parameter: "Total Ammonia Nitrogen",
    value: "0.5 mg/L",
    status: "Caution",
    lastUpdated: "7 min ago",
  },
  {
    parameter: "Nitrite N",
    value: "0.03 mg/L",
    status: "Optimal",
    lastUpdated: "18 min ago",
  },
]

export function ShrimpDataTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Parameter</TableHead>
          <TableHead>Value</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Last Updated</TableHead>
          <TableHead></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {shrimpData.map((data) => (
          <TableRow key={data.parameter}>
            <TableCell className="font-medium text-blue-900">{data.parameter}</TableCell>
            <TableCell>{data.value}</TableCell>
            <TableCell>
              <span
                className={`inline-flex items-center rounded-full px-2 py-1 text-xs ${
                  data.status === "Optimal"
                    ? "bg-green-500/10 text-green-500"
                    : data.status === "Warning"
                      ? "bg-yellow-500/10 text-yellow-500"
                      : "bg-red-500/10 text-red-500"
                }`}
              >
                {data.status}
              </span>
            </TableCell>
            <TableCell className="text-blue-600">{data.lastUpdated}</TableCell>
            <TableCell>
              <MoreHorizontal className="h-4 w-4 text-blue-600" />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

