import { createBrowserRouter, Navigate } from "react-router-dom";
import SuperAdmin from "../layouts/SuperAdmin";
import Supportagent from "../layouts/Supportagent";
import Dashboard from "../pages/Dashboard";
import AssetManagement from "../pages/Assets";
import AssetHistory from "../components/superadmin/AssetsHistory";
import TicketsPage from "../pages/Tickets";
import Maintenance from "../pages/Maintenance";
import TicketsActivity from "../components/superadmin/TicketsActivity";
import InspactionAcvity from "../components/superadmin/InspactionAcvity";
import JobCardsOverview from "../components/superadmin/JobCardsOverview";
import Inspectionsheets from "../pages/Inspectionsheets";
import ServiceProviders from "../pages/ServiceProviders";
import JobCards from "../pages/JobCards";
import Reports from "../pages/Reports";
import Chats from "../pages/Chats";
import AdminProfile from "../components/superadmin/AdminProfile";
import UserManagement from "../pages/UserManagement";
import SupportAgentDashboard from "../pages/SupportAgentDashboard";
import SupportAgentTicket from "../pages/supportAgentTicket";
import SupportAgentInspaction from "../pages/SupportAgentInspaction";
import CreateInspectionPage from "../pages/CreateInspactionPage";

// 🟢 Define User Role (Replace with Actual Authentication Logic)
const isSuperAdmin = false; // Change this dynamically based on user role
const isSupportAgent = true; // Change this dynamically based on user role

const router = createBrowserRouter([
  isSuperAdmin && {
        path: "/",
        element: <SuperAdmin />,
        children: [
          { path: "/", element: <Dashboard /> },
          { path: "/assets", element: <AssetManagement /> },
          { path: "/asset-history/:id", element: <AssetHistory /> },
          { path: "/tickets", element: <TicketsPage /> },
          { path: "/maintenance", element: <Maintenance /> },
          { path: "/tickets-activity", element: <TicketsActivity /> },
          { path: "/inspections-activity", element: <InspactionAcvity /> },
          { path: "/jobcards-overview", element: <JobCardsOverview /> },
          { path: "/inspectionsheets", element: <Inspectionsheets /> },
          { path: "/service-providers", element: <ServiceProviders /> },
          { path: "/jobcards", element: <JobCards /> },
          { path: "/reports", element: <Reports /> },
          { path: "/chats", element: <Chats /> },
          { path: "/profile", element: <AdminProfile /> },
          { path: "/user-management", element: <UserManagement /> },
        ],
      },


    isSupportAgent && {
        path: "/",
        element: <Supportagent />,
        children: [
          { path: "/", element: <SupportAgentDashboard /> },
          { path: "/tickets", element: <SupportAgentTicket/> },
          { path: "/tickets-activity", element: <TicketsActivity /> },
          { path: "/inspections-activity", element: <InspactionAcvity /> },
          { path: "/jobcards-overview", element: <JobCardsOverview /> },
          { path: "/inspectionsheets", element: <SupportAgentInspaction /> },
          { path: "/create-inspection", element: <CreateInspectionPage/> },
          { path: "/profile", element: <AdminProfile /> },
          { path: "/chats", element: <Chats /> },
          { path: "/reports", element: <Reports /> },
          { path: "/jobcards", element: <JobCards /> },
        ],
      }
   
]);

export default router;
