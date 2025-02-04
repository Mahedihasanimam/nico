import { Layout, Menu, } from 'antd';
import { Link } from 'react-router-dom';
import { TbPresentationAnalytics } from "react-icons/tb";
import { HiOutlineVideoCamera } from "react-icons/hi2";
import { PiVideoThin } from "react-icons/pi";
import { LiaMoneyCheckAltSolid } from "react-icons/lia";
import { PiUsersLight } from "react-icons/pi";
const { Sider } = Layout;
import logo from '../../assets/logo.png'
// eslint-disable-next-line react/prop-types
const Sidebar = ({ collapsed }) => {

    return (
        <div className='fixed top-0 left-0 bottom-0'>
            <Sider className=' bg-white' width={250} collapsedWidth={80} trigger={null} collapsible collapsed={collapsed}>
                <div className={` ${collapsed ? 'text-lg' : 'text-3xl'} font-bold  text-white text-center bg-white`}>
                  <img src={logo} preview={false} />  
                </div>
                <Menu
                    theme=""
                    style={{ height: '100%', borderRight: 0 , backgroundColor: 'white'}}
                    mode="inline"
                    className='px-2'
                    defaultSelectedKeys={['1']}
                    items={[
                        {
                            key: '1',
                            icon: <TbPresentationAnalytics className=' w-5 h-5' />,
                            label: <Link className='' to={`/`}>Analytics</Link>,
                        },
                        {
                            key: '2',
                            icon: <HiOutlineVideoCamera className=' w-5 h-5' />,
                            label: <Link to={`competition`}>Competition</Link>,
                        },
                        {
                            key: '3',
                            icon: <PiVideoThin className=' w-5 h-5' />,
                            label: <Link to={`moderation`}>Moderation</Link>,
                        },
                        {
                            key: '4',
                            icon: <LiaMoneyCheckAltSolid className=' w-5 h-5' />,
                            label: <Link to={`payment-management`}>Payment Management</Link>,
                        },
                        {
                            key: '5',
                            icon: <PiUsersLight className=' w-5 h-5' />,
                            label: <Link to={`user-management`}>User Management</Link>,
                        },
                    ]}
                />
            </Sider>
        </div>
    );
};

export default Sidebar;