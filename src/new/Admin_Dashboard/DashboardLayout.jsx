import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import styles from './DashboardLayout.module.css';
import DashboardHome from '../Admin_Dashboard/screens/DashboardHome';
import {
  FaTachometerAlt, FaUser, FaChartBar, FaCog, FaSignOutAlt, FaInbox,
  FaClipboard, FaDatabase, FaFileInvoiceDollar
} from 'react-icons/fa';
import ManageLoads from './screens/Load_Manage/Load_Manage';
import UserAddLoads from './screens/UserAddOrder/UserAddOrder';
import UsersGrid from './screens/Users/UsersGrid';
import BillingPayments from './screens/BillingsPayments/BillingPayment';
import BackupScreen from './screens/Backups/Backups';
import DispatcherShowLoads from './screens/All_Loads_For_Dispatcher/DispatcherShowLoads';
import MyLoads from './screens/My_Loads/MyLoads';
import DriverLoads from './screens/Driver_Given_Loads/DriverLoads';
import DriverCompletedLoads from './screens/Driver_Given_Loads/DriverCompletedLoads';
import Accounts from './screens/Accounts/Accounts';
import ChatPage from './screens/chat/ChatPage';
import UnverifiedUsers from './screens/UnverifiedUsers/UnverifiedUsers';

export default function DashboardLayout() {
  const navigate = useNavigate(); // Initialize the navigate function
  const [activeScreen, setActiveScreen] = useState('home');
  const [accountType, setAccountType] = useState('');

  useEffect(() => {
    // Retrieve account type from localStorage
    const type = localStorage.getItem('account_type');
    setAccountType(type || '');

    // Disable the back button functionality
    const handlePopState = () => {
      navigate(1); // Prevent back navigation
    };

    window.history.pushState(null, null, window.location.href); // Push the current state
    window.addEventListener('popstate', handlePopState); // Add event listener for back button

    return () => {
      window.removeEventListener('popstate', handlePopState); // Cleanup event listener
    };
  }, [navigate]);




  const handleLogout = () => {
    // Remove user data from local storage
    localStorage.removeItem('user_id');
    localStorage.removeItem('account_type');

    // Redirect to login page (assuming '/login' is your login route)
    navigate('/Signin'); // Navigate to the Signup page
  };

  const renderScreen = () => {
    switch (activeScreen) {
      case 'home':
        return <DashboardHome />;
      case 'users':
        return <UsersGrid />;
      case 'addLoads':
        return <UserAddLoads />;
      case 'LoadManage':
        return <ManageLoads />;
      case 'MyLoads':
        return <MyLoads />;
      case 'DriverLoads':
        return <DriverLoads />;
      case 'DriverCompletedLoads':
        return <DriverCompletedLoads />;
      case 'DispatcherAssignLoads':
        return <DispatcherShowLoads />;
      case 'BillingPayments':
        return <BillingPayments />;
      case 'UnverifiedUsers':
        return <UnverifiedUsers />;
      case 'Accounts':
        return <Accounts />;
      case 'ChatPage':
        return <ChatPage />;
      case 'BackupRestore':
        return <BackupScreen />;
      default:
        return <DashboardHome />;
    }
  };

  // Filter buttons based on account type
  const getFilteredButtons = () => {
    const dashboardButton = [
      { screen: 'home', label: 'Dashboard', icon: <FaTachometerAlt /> },
    ];

    let specificButtons = [];
    switch (accountType) {
      case 'Driver':
        specificButtons = [
          { screen: 'DriverLoads', label: 'Driver Loads', icon: <FaDatabase /> },
          { screen: 'DriverCompletedLoads', label: 'My Completed Loads', icon: <FaDatabase /> },
        ];
        break;
      case 'User':
        specificButtons = [
          { screen: 'addLoads', label: 'Add Loads', icon: <FaChartBar /> },
          { screen: 'MyLoads', label: 'My Orders', icon: <FaDatabase /> },
        ];
        break;
      case 'Dispatcher':
        specificButtons = [
          { screen: 'DispatcherAssignLoads', label: 'All Loads', icon: <FaDatabase /> },
          { screen: 'LoadManage', label: 'Load Manage', icon: <FaDatabase /> },
        ];
        break;
      case 'Accounts':
        specificButtons = [
          { screen: 'Accounts', label: 'Accounts', icon: <FaClipboard /> },
          { screen: 'LoadManage', label: 'Load Manage', icon: <FaDatabase /> },
          { screen: 'Reports', label: 'Reports', icon: <FaClipboard /> },
        ];
        break;
      case 'Admin':
        specificButtons = [
          { screen: 'users', label: 'Users', icon: <FaUser /> },
          { screen: 'UnverifiedUsers', label: 'Unverifeid users', icon: <FaUser /> },
          { screen: 'addLoads', label: 'Add Loads', icon: <FaChartBar /> },
          { screen: 'LoadManage', label: 'Load Manage', icon: <FaDatabase /> },
          { screen: 'MyLoads', label: 'My Orders', icon: <FaDatabase /> },
          { screen: 'DriverLoads', label: 'Driver Loads', icon: <FaDatabase /> },
          { screen: 'DriverCompletedLoads', label: 'My Completed Loads', icon: <FaDatabase /> },
          { screen: 'DispatcherAssignLoads', label: 'All Loads', icon: <FaDatabase /> },
          { screen: 'Accounts', label: 'Accounts', icon: <FaClipboard /> },
          { screen: 'Reports', label: 'Reports', icon: <FaClipboard /> },
          { screen: 'BackupRestore', label: 'Backup/Restore', icon: <FaDatabase /> },
        ];
        break;
      default:
        break;
    }

    const commonButtons = [
      { screen: 'BillingPayments', label: 'Billing/Payments', icon: <FaFileInvoiceDollar /> },
      { screen: 'ChatPage', label: 'Inbox/Chat', icon: <FaInbox /> },
      { screen: 'settings', label: 'Settings', icon: <FaCog /> },
    ];

    const logoutButton = [
      { screen: 'logout', label: 'Logout', icon: <FaSignOutAlt />, action: handleLogout },
    ];

    return [...dashboardButton, ...specificButtons, ...commonButtons, ...logoutButton];
  };

  const buttons = getFilteredButtons();

  return (
    <div className={styles.container}>
      <aside className={styles.sidebar}>
        {buttons.map((button, index) => (
          <button
            key={index}
            className={`${styles.sidebarButton} ${activeScreen === button.screen ? styles.active : ''}`}
            onClick={button.action || (() => setActiveScreen(button.screen))}
            aria-label={button.label}
          >
            {button.icon} {button.label}
          </button>
        ))}
      </aside>
      <main className={styles.mainContent}>
        {renderScreen()}
      </main>
    </div>
  );
}
