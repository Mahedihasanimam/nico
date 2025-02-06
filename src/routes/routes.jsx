import { createBrowserRouter } from 'react-router-dom';



import PaymentManagement from '../pages/Inspectionsheets';
import UserManagement from '../pages/UserManagement';
import SuperAdmin from '../layouts/SuperAdmin';
import Dashboard from '../pages/Dashboard';
import Assets from '../pages/Assets';
import Tickets from '../pages/Tickets';
import Inspectionsheets from '../pages/Inspectionsheets';
import TicketsActivity from '../components/superadmin/TicketsActivity';
import InspactionAcvity from '../components/superadmin/InspactionAcvity';
import JobCardsOverview from '../components/superadmin/JobCardsOverview';
import AssetManagement from '../pages/Assets';
import AssetHistory from '../components/superadmin/AssetsHistory';
import TicketsPage from '../pages/Tickets';
import Maintenance from '../pages/Maintenance';
import JobCards from '../pages/JobCards';
import Chats from '../pages/Chats';
import ServiceProviders from '../pages/ServiceProviders';




const router = createBrowserRouter([
  {
    path: '/',
    element: <SuperAdmin />,
    children: [
      {
        path: "/",
        element: <Dashboard/>,
      },
      {
        path: "/assets",
        element: <AssetManagement/>,
      },
      {
        path: "/asset-history/:id",
        element: <AssetHistory/>,
      },
      {
        path: "/tickets",
        element: <TicketsPage/> ,
      },
  
      {
        path: "/maintenance",
        element: <Maintenance/> ,
      },
     
      {
        path: "/tickets-activity",
        element: <TicketsActivity/> ,
      },
      
      {
        path: "/inspections-activity",
        element: <InspactionAcvity/> ,
      },
      {
        path: "/jobcards-overview",
        element: <JobCardsOverview/> ,
      },
      {
        path: "/inspectionsheets",
        element: <Inspectionsheets/>,
      },
      {
        path: "/service-providers",
        element: <ServiceProviders/>,
      },
      {
        path: "/jobcards",
        element: <JobCards/>,
      },
      {
        path: "/chats",
        element: <Chats/>,
      },
      {
        path: "/user-management",
        element: <UserManagement></UserManagement>,
      },
    ]
  },

]);

export default router;