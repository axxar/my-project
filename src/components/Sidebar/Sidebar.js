import React from 'react'
import { SidebarContainer, Icon, CloseIcon,
         SidebarWrapper, SidebarMenu, SidebarLink,
         SideBtnWrap, SidebarRoute } from './SidebarStyles';

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle}>About</SidebarLink>
                    <SidebarLink to="discover" onClick={toggle}>Discover</SidebarLink>
                    <SidebarLink to="services" onClick={toggle}>Services</SidebarLink>
                    <SidebarLink to="signup" onClick={toggle}>Sign Up</SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
            <SideBtnWrap>
                <SidebarRoute to='/signin'>Sign In</SidebarRoute>
            </SideBtnWrap>
        </SidebarContainer>
    )
}

export default Sidebar;