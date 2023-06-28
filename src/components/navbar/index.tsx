import { useState, useEffect } from 'react';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { GiHamburgerMenu } from 'react-icons/gi';
import styled from 'styled-components';

import { useAuth } from '@/contexts/auth';

interface IProps {
    className?: string;
}



const Navbar = ({ className }: IProps) => {
    const { logout } = useAuth();
    const [collapsed, setCollapsed] = useState(false);


    return (
        <Sidebar
            className={className}
            collapsedWidth='80px'
            collapsed={collapsed}
            breakPoint='sm'
        >
            <Menu>
                <MenuItem
                    icon={<GiHamburgerMenu />}
                    className="menu-item text-custom-white"
                    onClick={() => setCollapsed(!collapsed)}
                >

                    <h4 className="m-0">My System</h4>

                </MenuItem>
                <MenuItem className='menu-item'>Pie charts</MenuItem>
                <MenuItem className='menu-item'> Line charts </MenuItem>
                <MenuItem className='menu-item'> Documentation </MenuItem>
                <MenuItem className='menu-item' onClick={() => logout()}> Logout </MenuItem>
            </Menu>
        </Sidebar >
    );
}


const StyledNavbar = styled(Navbar)`

    .ps-sidebar-container {
        background-color: var(--custom-dark-blue);
    }
        
        
    .menu-item {
        color: var(--custom-white);
        border-bottom: 1px solid #eee;
        
        
        .ps-menu-button {
            transition: all 0.1s ease-in-out;
            outline: none;
            &:hover, &:focus {
                background-color: #f3f3f3 !important;
                font-weight: bold;
                color: #333;
            }
        }

        .ps-menu-icon {
            font-size: 16pt;
        }
    }
`;

export default StyledNavbar;