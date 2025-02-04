import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts"
import { Building2, Users, Box, Ticket, ClipboardCheck, FileCheck } from "lucide-react"

const Dashboard = () => {
  return (
    <div className="p-6 space-y-6 bg-gray-100">
      <Header />
      <MetricCards />
      <Statistics />
    </div>
  )
}

const Header = () => (
  <div className="flex justify-between items-center">
    <h2 className="text-2xl font-bold text-gray-800">Overview</h2>
    <Select options={["Monthly", "Weekly", "Yearly"]} />
  </div>
)

const Select = ({ options }) => (
  <select className="bg-white border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
    {options.map((option) => (
      <option key={option} value={option.toLowerCase()}>
        {option}
      </option>
    ))}
  </select>
)

const MetricCards = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <MetricCard icon={<Building2 className="w-8 h-8 text-blue-500" />} label="Organizations" value="22.23k" />
    <MetricCard icon={<Users className="w-8 h-8 text-green-500" />} label="Total users" value="22.23k" />
    <MetricCard icon={<Box className="w-8 h-8 text-yellow-500" />} label="Assets" value="22.23k" />
    <MetricCard icon={<Ticket className="w-8 h-8 text-purple-500" />} label="Tickets" value="22.23k" />
    <MetricCard icon={<ClipboardCheck className="w-8 h-8 text-red-500" />} label="Inspections" value="22.23k" />
    <MetricCard icon={<FileCheck className="w-8 h-8 text-indigo-500" />} label="Job Cards" value="22.23k" />
  </div>
)

const MetricCard = ({ icon, label, value }) => (
  <div className="bg-white rounded-lg shadow p-6 flex items-center space-x-4">
    {icon}
    <div>
      <p className="text-sm text-gray-500">{label}</p>
      <p className="text-2xl font-semibold text-gray-800">{value}</p>
    </div>
  </div>
)

const Statistics = () => (
  <div className="space-y-4">
    <div className="flex justify-between items-center">
      <h2 className="text-2xl font-bold text-gray-800">Statistics</h2>
      <Select options={["Weekly", "Monthly", "Yearly"]} />
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <DonutChart title="Ticket Status" data={ticketStatusData} />
      <DonutChart title="Inspections" data={inspectionsData} />
      <DonutChart title="Job Card Progress" data={jobCardProgressData} />
      <DonutChart title="Asset Status" data={assetStatusData} />
    </div>
  </div>
)

const DonutChart = ({ title, data }) => (
  <div className="bg-white rounded-lg shadow p-6">
    <h3 className="text-lg font-semibold text-gray-800 mb-4">{title}</h3>
    <ResponsiveContainer width="100%" height={200}>
      <PieChart>
        <Pie data={data} cx="50%" cy="50%" innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  </div>
)

const ticketStatusData = [
  { name: "New", value: 30, color: "#EF4444" },
  { name: "In Progress", value: 30, color: "#F59E0B" },
  { name: "Completed", value: 30, color: "#10B981" },
]

const inspectionsData = [
  { name: "New", value: 30, color: "#EF4444" },
  { name: "In Progress", value: 30, color: "#F59E0B" },
  { name: "Completed", value: 30, color: "#10B981" },
]

const jobCardProgressData = [
  { name: "New", value: 30, color: "#EF4444" },
  { name: "In Progress", value: 30, color: "#F59E0B" },
  { name: "Completed", value: 30, color: "#10B981" },
]

const assetStatusData = [
  { name: "In Maintenance", value: 30, color: "#EF4444" },
  { name: "Out of Order", value: 30, color: "#F59E0B" },
  { name: "Functional", value: 30, color: "#10B981" },
]

export default Dashboard

