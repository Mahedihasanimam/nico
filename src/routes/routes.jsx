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
        element: <Assets/>,
      },
      {
        path: "/tickets",
        element: <Tickets/> ,
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
        path: "/user-management",
        element: <UserManagement></UserManagement>,
      },
    ]
  },

]);

export default router;