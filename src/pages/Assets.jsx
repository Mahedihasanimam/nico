import { useState } from "react"
import { Search, Import } from "lucide-react"
import { useNavigate } from "react-router-dom"

const AssetManagement = () => {
  const navigate = useNavigate()
  const [searchQuery, setSearchQuery] = useState("")

  const assets = [
    {
      id: 1,
      name: "Assault Fitness - Classic Assault Bike",
      qrCode: "Q4-1548",
      warrantyDate: "12/24/2024",
      unitPrice: "0.0",
      currentSpend: "R 2,556.2",
      maxSpend: "R 4,523.26",
      organization: "VirtuGym",
    },
    {
      id: 2,
      name: "Assault Fitness - Classic Assault Bike",
      qrCode: "Q4-1548",
      warrantyDate: "12/24/2024",
      unitPrice: "0.0",
      currentSpend: "R 2,556.2",
      maxSpend: "R 4,523.26",
      organization: "VirtuGym",
    },  
    {
      id: 3,
      name: "Assault Fitness - Classic Assault Bike",
      qrCode: "Q4-1548",
      warrantyDate: "12/24/2024",
      unitPrice: "0.0",
      currentSpend: "R 2,556.2",
      maxSpend: "R 4,523.26",
      organization: "VirtuGym",
    },
    {
      id: 4,
      name: "Assault Fitness - Classic Assault Bike",
      qrCode: "Q4-1548",
      warrantyDate: "12/24/2024",
      unitPrice: "0.0",
      currentSpend: "R 2,556.2",
      maxSpend: "R 4,523.26",
      organization: "VirtuGym",
    },
    {
      id: 5,
      name: "Assault Fitness - Classic Assault Bike",
      qrCode: "Q4-1548",
      warrantyDate: "12/24/2024",
      unitPrice: "0.0",
      currentSpend: "R 2,556.2",
      maxSpend: "R 4,523.26",
      organization: "VirtuGym",
    },  
    {
      id: 6,
      name: "Assault Fitness - Classic Assault Bike",
      qrCode: "Q4-1548",
      warrantyDate: "12/24/2024",
      unitPrice: "0.0",
      currentSpend: "R 2,556.2",
      maxSpend: "R 4,523.26",
      organization: "VirtuGym",
    },
    {
      id: 7,
      name: "Assault Fitness - Classic Assault Bike",
      qrCode: "Q4-1548",
      warrantyDate: "12/24/2024",
      unitPrice: "0.0",
      currentSpend: "R 2,556.2",
      maxSpend: "R 4,523.26",
      organization: "VirtuGym",
    },
    {
      id: 8,
      name: "Assault Fitness - Classic Assault Bike",
      qrCode: "Q4-1548",
      warrantyDate: "12/24/2024",
      unitPrice: "0.0",
      currentSpend: "R 2,556.2",
      maxSpend: "R 4,523.26",
      organization: "VirtuGym",
    },  
    {
      id: 9,
      name: "Assault Fitness - Classic Assault Bike",
      qrCode: "Q4-1548",
      warrantyDate: "12/24/2024",
      unitPrice: "0.0",
      currentSpend: "R 2,556.2",
      maxSpend: "R 4,523.26",
      organization: "VirtuGym",
    },
    {
      id: 10,
      name: "Assault Fitness - Classic Assault Bike",
      qrCode: "Q4-1548",
      warrantyDate: "12/24/2024",
      unitPrice: "0.0",
      currentSpend: "R 2,556.2",
      maxSpend: "R 4,523.26",
      organization: "VirtuGym",
    },
  ]

  const handleContractClick = (assetId) => {
    navigate(`/asset-history/${assetId}`)
  }
  const Select = ({ options }) => (
    <select className="bg-white border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
      {options.map((option) => (
        <option key={option} value={option.toLowerCase()}>
          {option}
        </option>
      ))}
    </select>
  )
  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-xl font-semibold">Asset Management</h1>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search assets..."
              className="rounded-md border pl-10 pr-4 py-2 w-[300px] focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <button className="flex items-center gap-2 rounded-md bg-[#326280] px-4 py-2 text-white">
            <Import className="h-4 w-4" />
            Import
          </button>
        </div>

      </div>

      <div className="flex items-center justify-end pb-4">

        <Select options={["Sort by", "Name","Unit Price","Warranty","Current Spend","Max Spend","Organization", , "Location"]} />
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-lg border bg-white">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Asset</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">QR Code</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Warranty/Contract End Date</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Unit Price</th>
              
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Current Spend</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Max Spend</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Organization</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {assets.map((asset) => (
              <tr key={asset.id} className="hover:bg-gray-50">
                <td className="px-4 py-3 text-sm">{asset.name}</td>
                <td className="px-4 py-3 text-sm">{asset.qrCode}</td>
                <td className="px-4 py-3 text-sm">
                  <button
                    onClick={() => handleContractClick(asset.id)}
                    className="rounded bg-[#326280] px-3 py-1 text-white "
                  >
                    Contract
                  </button>
                </td>
                <td className="px-4 py-3 text-sm">{asset.unitPrice}</td>
                <td className="px-4 py-3 text-sm">{asset.currentSpend}</td>
                <td className="px-4 py-3 text-sm">{asset.maxSpend}</td>
                <td className="px-4 py-3 text-sm">{asset.organization}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex items-center justify-end gap-2 border-t p-4">
          <button className="rounded border px-3 py-1 text-sm disabled:opacity-50">Previous</button>
          <button className="rounded bg-blue-50 px-3 py-1 text-sm text-blue-600">1</button>
          <button className="rounded px-3 py-1 text-sm">2</button>
          <button className="rounded px-3 py-1 text-sm">3</button>
          <button className="rounded px-3 py-1 text-sm">4</button>
          <button className="rounded px-3 py-1 text-sm">5</button>
          <button className="rounded border px-3 py-1 text-sm">Next</button>
        </div>
      </div>
    </div>
  )
}

export default AssetManagement

