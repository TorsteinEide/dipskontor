
'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CakeIcon from '@mui/icons-material/Cake';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for programmatic navigation
import { useContext } from 'react';
import PageContext from '../context/PageContext'; 

const Tabbar: React.FC = () => {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate(); // Hook to navigate programmatically
  const { setCurrentPage } = useContext(PageContext); // Access the context

  // Handle tab change
  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    

    // Define routes based on the tab index
    const routes = ['/', '/ideabank', '/kakefredag'];
    const pageNames = ['Events', 'Idébank', 'Kakefredag'];

    navigate(routes[newValue]); // Navigate to the corresponding route
    setCurrentPage(pageNames[newValue]);
  };

  return (
    <Box>
      <BottomNavigation
        sx={{ backgroundColor: '#202020' }}
        value={value}
        onChange={handleTabChange} // Use the function here
      >
        <BottomNavigationAction
          sx={{ color: '#FFFFFF', paddingTop: '10px' }}
          className="h-fit"
          label="Events"
          icon={<CalendarMonthIcon />}
            
            showLabel={true}
        />
        <BottomNavigationAction
          sx={{ color: '#FFFFFF', paddingTop: '10px' }}
          className="h-fit"
          label="Idébank"
          icon={<TipsAndUpdatesIcon />}
            showLabel={true}
        />
        <BottomNavigationAction
          sx={{ color: '#FFFFFF', paddingTop: '10px' }}
          className="h-fit"
          label="Kakefredag"
          icon={<CakeIcon />}
            showLabel={true}
        />
      </BottomNavigation>
    </Box>
  );
};

export default Tabbar;

