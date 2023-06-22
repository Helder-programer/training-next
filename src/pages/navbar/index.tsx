import { useAuth } from '@/contexts/auth';
import { Sidebar, Menu, MenuItem, SubMenu, sidebarClasses } from 'react-pro-sidebar';
import styled from 'styled-components';

interface IProps {
    className?: string;
}



const Navbar = ({ className }: IProps) => {
    const { logout } = useAuth();

    return (
        <Sidebar className={className}>
            <img src='https://github.com/Helder-programer.png' alt="" width={50} />
            <Menu>
                <MenuItem className='menu-item'> Pie charts </MenuItem>
                <MenuItem className='menu-item'> Line charts </MenuItem>
                <MenuItem className='menu-item'> Documentation </MenuItem>
                <MenuItem className='menu-item' onClick={() => logout()}> Logout </MenuItem>
            </Menu>
        </Sidebar >
    );
}


const StyledNavbar = styled(Navbar)`

    .ps-sidebar-container {
        background-color: #333;
        display: flex;
        align-items: center;
        flex-direction: column;
        width: 100%;

        nav {
            width: 100%;
        }

        img {
            border-radius: 50%;
            margin: 10px 0px;
        }
    }


    .menu-item {
        color: #eee;
        transition: all 0.1s ease-in-out;
        &:hover {
            background-color: #eee;
            font-weight: bold;
            color: #333;
        }
    }
`;

export default StyledNavbar;