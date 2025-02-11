import { useState } from "react";
import { Eye, Pencil, Trash2 } from "lucide-react";

import { Input, Select, Button, Image } from "antd";
import Swal from "sweetalert2";
import JobcardModal from "../components/superadmin/JobcardModal";
import ProvidersProfile from "../components/superadmin/ProvidersProfile";
import OrganizationModal from "../components/superadmin/OrganizationModal";
import EditThirdPartyProfile from "../components/thirdparty/EditThirdPartyProfile";
import ThirdpartyProfile from "../components/thirdparty/ThirdpartyProfile";

const { Option } = Select;

const MOCK_DATA = Array.from({ length: 7 }, (_, i) => ({
  id: `#4567`,
  name: "Md. Abid",
  avatar: "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg",
  organization: "benQ",
  location: "Rajshahi",
}));

export default function ThirdPartyServiceProvider() {

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [iseditDetailsModalopen, setiseditdetsilsModalopen] = useState(false);


  const [selectedItem, setSelectedItem] = useState(null);


  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("organization");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState("id");
  const itemsPerPage = 8;

  const tabs = [
  
    { id: "support-agent", label: "Support Agent" },
    { id: "location-employees", label: "Location Employees" },
    { id: "technicians", label: "Technicians" },
  
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

  const handleEdit = (item) => {
    setSelectedItem(item);
    setiseditdetsilsModalopen(true);
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
          <Button onClick={handleEdit} type="primary">+ Add</Button>
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
                className={`px-6 py-3 text-[16px] font-medium ${activeTab === tab.id ? "border-b-2 border-red-500 text-red-500" : "text-primary  hover:text-gray-700"
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
                <th className="px-6 py-3 text-left text-[16px] font-medium text-primary ">ID</th>
                <th className="px-6 py-3 text-left text-[16px] font-medium text-primary ">Provider Name</th>
                <th className="px-6 py-3 text-left text-[16px] font-medium text-primary ">Organization</th>
                <th className="px-6 py-3 text-left text-[16px] font-medium text-primary ">Location</th>
                <th className="px-6 py-3 text-left text-[16px] font-medium text-primary ">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {paginatedData.map((provider, index) => (
                <tr key={index} className="hover:bg-gray-50 bg-white  ">
                  <td className="px-6 py-4 text-[16px] text-primary font-medium ">{provider.id}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="relative w-[50px] h-[50px]">
                        <Image
                          preview={false}
                          src={provider.avatar || "/placeholder.svg"}
                          alt={provider.name}
                          className="rounded-full w-full"

                        />
                      </div>
                      <span className="text-[16px] font-medium">{provider.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-[16px] font-medium">{provider.organization}</td>
                  <td className="px-6 py-4 text-[16px] font-semibold">{provider.location}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <button type="button" onClick={() => handleView(provider)} className="text-gray-400 hover:text-gray-600">
                        <svg width="29" height="19" viewBox="0 0 29 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M14.2502 13.2992C16.3489 13.2992 18.0502 11.5979 18.0502 9.49922C18.0502 7.40054 16.3489 5.69922 14.2502 5.69922C12.1515 5.69922 10.4502 7.40054 10.4502 9.49922C10.4502 11.5979 12.1515 13.2992 14.2502 13.2992Z" fill="#F96D10" />
                          <path d="M22.4924 2.68256C19.8966 0.9025 17.1184 0 14.2357 0C11.6417 0 9.11287 0.771875 6.71947 2.28475C4.30587 3.81366 1.93978 6.59062 0 9.5C1.56869 12.1125 3.7145 14.7986 5.94937 16.3388C8.51319 18.1046 11.3008 19 14.2357 19C17.1451 19 19.9268 18.1052 22.5067 16.3406C24.7778 14.7844 26.939 12.1018 28.5 9.5C26.9337 6.92134 24.7653 4.24175 22.4924 2.68256ZM14.25 15.2C13.1226 15.2 12.0206 14.8657 11.0832 14.2394C10.1459 13.6131 9.41531 12.7228 8.98389 11.6813C8.55247 10.6398 8.43959 9.49368 8.65952 8.38799C8.87946 7.28229 9.42233 6.26665 10.2195 5.46949C11.0167 4.67233 12.0323 4.12946 13.138 3.90952C14.2437 3.68959 15.3898 3.80247 16.4313 4.23389C17.4728 4.66531 18.3631 5.39589 18.9894 6.33325C19.6157 7.27061 19.95 8.37265 19.95 9.5C19.9483 11.0112 19.3472 12.46 18.2786 13.5286C17.21 14.5972 15.7612 15.1983 14.25 15.2Z" fill="#F96D10" />
                        </svg>


                      </button>
                      <button type="button" onClick={() => handleEdit(provider)} className="text-gray-400 hover:text-gray-600">
                        <svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M15.716 3.64551C15.8538 3.64554 15.986 3.70023 16.0837 3.79759L19.0305 6.74447C19.1282 6.84214 19.183 6.97459 19.183 7.1127C19.183 7.2508 19.1282 7.38325 19.0305 7.48093L9.45449 17.0559C9.38909 17.1212 9.30747 17.168 9.21803 17.1913L5.23053 18.233C5.14264 18.2559 5.05027 18.2555 4.96261 18.2317C4.87495 18.2079 4.79504 18.1615 4.73081 18.0973C4.66658 18.0331 4.62026 17.9532 4.59646 17.8655C4.57266 17.7779 4.57219 17.6855 4.59512 17.5976L5.63678 13.6101C5.66014 13.5207 5.70688 13.439 5.7722 13.3736L15.3472 3.79759C15.3957 3.74926 15.4532 3.71095 15.5164 3.68485C15.5797 3.65876 15.6475 3.64539 15.716 3.64551ZM4.66699 20.0518C4.45979 20.0518 4.26108 20.1341 4.11456 20.2806C3.96805 20.4271 3.88574 20.6258 3.88574 20.833C3.88574 21.0402 3.96805 21.2389 4.11456 21.3854C4.26108 21.5319 4.45979 21.6143 4.66699 21.6143H20.292C20.4992 21.6143 20.6979 21.5319 20.8444 21.3854C20.9909 21.2389 21.0732 21.0402 21.0732 20.833C21.0732 20.6258 20.9909 20.4271 20.8444 20.2806C20.6979 20.1341 20.4992 20.0518 20.292 20.0518H4.66699Z" fill="#0DB244" />
                        </svg>

                      </button>
                      <button type="button" onClick={() => handleDelete(provider.id)} className="text-red-400 hover:text-red-600">
                        <svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7.79199 21.875C7.21908 21.875 6.7288 21.6712 6.32116 21.2635C5.91352 20.8559 5.70935 20.3653 5.70866 19.7917V6.25H4.66699V4.16667H9.87533V3.125H16.1253V4.16667H21.3337V6.25H20.292V19.7917C20.292 20.3646 20.0882 20.8552 19.6805 21.2635C19.2729 21.6719 18.7823 21.8757 18.2087 21.875H7.79199ZM9.87533 17.7083H11.9587V8.33333H9.87533V17.7083ZM14.042 17.7083H16.1253V8.33333H14.042V17.7083Z" fill="#ED1C24" />
                        </svg>

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
            className="p-2 text-[16px] text-primary  hover:text-gray-700 disabled:opacity-50"
          >
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`w-8 h-8 rounded-lg text-[16px] ${currentPage === page ? "bg-red-500 text-white" : "text-primary  hover:text-gray-700"
                }`}
            >
              {page}
            </button>
          ))}
          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="p-2 text-[16px] text-primary  hover:text-gray-700 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>


      <ThirdpartyProfile isOpen={isEditModalOpen} onClose={() => setIsEditModalOpen(false)} ticket={selectedItem} />

      <EditThirdPartyProfile isOpen={iseditDetailsModalopen} onClose={() => setiseditdetsilsModalopen(false)} ticket={selectedItem} />
    </div>
  );
}
