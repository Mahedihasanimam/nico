import { createBrowserRouter } from 'react-router-dom';



import PaymentManagement from '../pages/Inspectionsheets';
import UserManagement from '../pages/UserManagement';
import SuperAdmin from '../layouts/SuperAdmin';
import Dashboard from '../pages/Dashboard';
import Assets from '../pages/Assets';
import Tickets from '../pages/Tickets';
import Inspectionsheets from '../pages/Inspectionsheets';


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