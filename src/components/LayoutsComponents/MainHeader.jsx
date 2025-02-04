import { Button, Layout, theme } from 'antd';
import { RxHamburgerMenu } from "react-icons/rx";
const { Header } = Layout;


// eslint-disable-next-line react/prop-types
const MainHeader = ({ setCollapsed, collapsed }) => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <div >
            <Header
                style={{
                    padding: 0,
                    background:'white',
                }}
            >
                <div className=' flex justify-between pr-4 bg-white text-black'>
                    <Button
                        type="text"
                        icon={collapsed ? <RxHamburgerMenu className=' text-black -ml-8 w-8 h-8 ' /> : <RxHamburgerMenu className=' text-black -ml-8 w-8 h-8 ' />}
                        onClick={() => setCollapsed(!collapsed)}
                        className=' text-white '
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                        }}
                    />
                    <div className=' text-black'>About User</div>
                </div>
            </Header>
        </div>
    );
};

export default MainHeader;