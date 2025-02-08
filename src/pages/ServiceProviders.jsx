import { useState } from "react";
import { Eye, Pencil, Trash2 } from "lucide-react";

import { Input, Select, Button, Image } from "antd";
import Swal from "sweetalert2";
import JobcardModal from "../components/superadmin/JobcardModal";
import ProvidersProfile from "../components/superadmin/ProvidersProfile";

const { Option } = Select;

const MOCK_DATA = Array.from({ length: 7 }, (_, i) => ({
  id: `#4567`,
  name: "Md. Abid",
  avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCUTe0G9p0yhk8iL7Ji9en6vPqzSyaijLcTQ&s",
  organization: "benQ",
  location: "Rajshahi",
}));

export default function ServiceProviderTable() {

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);


  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("organization");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState("id");
  const itemsPerPage = 8;

  const tabs = [
    { id: "organization", label: "Organization" },
    { id: "support-agent", label: "Support Agent" },
    { id: "location-employees", label: "Location Employees" },
    { id: "technicians", label: "Technicians" },
    { id: "third-party", label: "Third Party" },
  ];

  const filteredData = MOCK_DATA.filter((item) =>
    Object.values(item).some(
      (val) => typeof val === "string" && val.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = filteredData.slice(startIndex, startIndex + itemsPerPage);



const handleView = (item) => {
  setSelectedItem(item);
  setIsEditModalOpen(true);
};



  const handleDelete = (id) => {

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        // Perform delete action here
        console.log("Deleted item with ID:", id);
      }
    });

   
  };

  return (
    <div className="space-y-6">
      {/* Search & Sort */}
      <div className="flex justify-between items-center">
        <Input
          placeholder="Search providers..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="max-w-xs"
        />
        <div className="flex items-center gap-4">
          <Select value={sortBy} onChange={setSortBy} className="w-32">
            <Option value="id">Sort by ID</Option>
            <Option value="name">Sort by Name</Option>
            <Option value="organization">Sort by Organization</Option>
          </Select>
          <Button type="primary">+ Add</Button>
        </div>
      </div>

      {/* Tabs */}
      <div className="border rounded-lg">
        <div className="border-b">
          <div className="flex">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 text-sm font-medium ${
                  activeTab === tab.id ? "border-b-2 border-red-500 text-red-500" : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full bg-white">
            <thead>
              <tr className="border-b bg-white">
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">ID</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Provider Name</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Organization</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Location</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {paginatedData.map((provider, index) => (
                <tr key={index} className="hover:bg-gray-50 bg-white  ">
                  <td className="px-6 py-4 text-sm text-gray-500">{provider.id}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="relative w-8 h-8">
                        <Image
                          src={provider.avatar || "/placeholder.svg"}
                          alt={provider.name}
                          className="rounded-full"
                          fill
                        />
                      </div>
                      <span className="text-sm font-medium">{provider.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm">{provider.organization}</td>
                  <td className="px-6 py-4 text-sm">{provider.location}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <button type="button" onClick={() => handleView(provider)} className="text-gray-400 hover:text-gray-600">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="text-gray-400 hover:text-gray-600">
                        <Pencil className="w-4 h-4" />
                      </button>
                      <button type="button" onClick={() => handleDelete(provider.id)} className="text-red-400 hover:text-red-600">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-end gap-2 p-4 border-t">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="p-2 text-sm text-gray-500 hover:text-gray-700 disabled:opacity-50"
          >
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`w-8 h-8 rounded-lg text-sm ${
                currentPage === page ? "bg-red-500 text-white" : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {page}
            </button>
          ))}
          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="p-2 text-sm text-gray-500 hover:text-gray-700 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>


      <ProvidersProfile isOpen={isEditModalOpen} onClose={()=>setIsEditModalOpen(false)} ticket={selectedItem} />
    </div>
  );
}
