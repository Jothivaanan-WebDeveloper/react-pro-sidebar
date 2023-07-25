import React from 'react';
import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar } from "react-pro-sidebar";
// import './SidebarComponent.css';
import {
    MenuRounded,
    ReceiptRounded,
    BarChartRounded,
    TimelineRounded,
    BubbleChartRounded,
    WalletRounded,
    AccountBalanceRounded,
    SavingsRounded,
    MonetizationOnRounded,
    SettingsApplicationsRounded,
    AccountCircleRounded,
    ShieldRounded,
    NotificationsRounded,
    LogoutRounded,
    GridViewOutlined
} from "@mui/icons-material";
import { Routes, Route, Link } from "react-router-dom";
import { Box } from '@mui/material';

const SidebarComponent = () => {

    const { collapseSidebar, toggleSidebar, collapsed, toggled, broken, rtl } = useProSidebar();

    const Home = () => {
        return (
            <>
                <h1 className="header">WELCOME TO QUICKPAY</h1>
                <h3>Bank of the free</h3>
                <p>Lorem ipsum dolor sit amet...</p>
            </>
        );
    };

    const Dashboard = () => {
        return (
            <>
                <h1 className="header"> DASHBOARD PAGE</h1>
                <h3>Welcome User</h3>
                <p>Lorem ipsum dolor sit amet...</p>
            </>
        );
    };

    const Transactions = () => {
        return (
            <>
                <h1 className="header">KEEP TRACK OF YOUR SPENDINGS</h1>
                <h3>Seamless Transactions</h3>
                <p>Lorem ipsum dolor sit amet...</p>
            </>
        );
    };

    return (
        <>
            <Box
                sx={{
                    "& .pro-sidebar-inner": {
                        background: `#FFFFFF`
                    },
                    "& .pro-icon-wrapper": {
                        backgroundColor: "transparent !important",
                    },
                    "& .pro-inner-item": {
                        padding: "7px 24px 5px 15px !important",
                    },
                    "& .pro-menu-item.active": {
                        color: `#E44C44  !important`,
                        background: `white`,
                    },
                    '& [data-testid="MenuOutlinedIcon"]': {
                        color: '#49BEB7', // Set the color of the element with data-testid="MenuOutlinedIcon"
                    },
                    "& .pro-sidebar > .pro-sidebar-inner > .pro-sidebar-layout ul": {
                        width: "100%"
                    },
                    "& .pro-sidebar .pro-sidebar-inner .pro-sidebar-layout ul div li :hover": {
                        color: `#E44C44   !important`,
                    },

                    "& .MuiBox-root css-1m3bo6 > button": {
                        color: `red !important`,
                    }
                }}
            >

                <div style={{ display: "flex", height: "100vh" }}>
                    <Sidebar className="app" >
                        <Menu>
                            <MenuItem
                                component={<Link to="/" className="link" />}
                                className="menu1"
                                icon={<MenuRounded
                                    onClick={() => {
                                        collapseSidebar();
                                    }}
                                />}
                            >
                                <h2>QUICKPAY</h2>
                            </MenuItem>
                            <MenuItem
                                component={<Link to="dashboard" className="link" />}
                                icon={<GridViewOutlined />}
                            >
                                Dashboard
                            </MenuItem>
                            <MenuItem icon={<ReceiptRounded />}> Invoices </MenuItem>
                            <SubMenu label="Charts" icon={<BarChartRounded />}>
                                <MenuItem icon={<TimelineRounded />}> Timeline Chart </MenuItem>
                                <MenuItem icon={<BubbleChartRounded />}>Bubble Chart</MenuItem>
                            </SubMenu>
                            <SubMenu label="Wallets" icon={<WalletRounded />}>
                                <MenuItem icon={<AccountBalanceRounded />}>
                                    Current Wallet
                                </MenuItem>
                                <MenuItem icon={<SavingsRounded />}>Savings Wallet</MenuItem>
                            </SubMenu>
                            <MenuItem
                                component={<Link to="transactions" className="link" />}
                                icon={<MonetizationOnRounded />}
                            >
                                Transactions
                            </MenuItem>
                            <SubMenu label="Settings" icon={<SettingsApplicationsRounded />}>
                                <MenuItem icon={<AccountCircleRounded />}> Account </MenuItem>
                                <MenuItem icon={<ShieldRounded />}> Privacy </MenuItem>
                                <MenuItem icon={<NotificationsRounded />}>
                                    Notifications
                                </MenuItem>
                            </SubMenu>
                            <MenuItem icon={<LogoutRounded />}> Logout </MenuItem>
                        </Menu>
                    </Sidebar>
                    <section>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="dashboard" element={<Dashboard />} />
                            <Route path="transactions" element={<Transactions />} />
                        </Routes>
                    </section>
                </div>
            </Box>
        </>
    );
}

export default SidebarComponent;