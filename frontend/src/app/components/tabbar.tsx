'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CakeIcon from '@mui/icons-material/Cake';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import {useContext} from 'react';
import PageContext from '../context/PageContext';  

const Tabbar: React.FC = () => {
  const [value, setValue] = React.useState(0);
  const { setCurrentPage } = useContext(PageContext);  

  const pageMapping = ["Events", "Idébank", "Kakefredag"];

    const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
        setCurrentPage(pageMapping[newValue]);  // Update currentPage based on selected tab
    };

  return (
    <Box >
      <BottomNavigation sx={{ backgroundColor: '#202020'  }}
        showLabels
        value={value}
        onChange={handleTabChange}  // Use the new function here
      >
        <BottomNavigationAction sx={{color: '#FFFFFF', paddingTop: '5px'}} className="h-fit" label="Events" icon={<CalendarMonthIcon />} />
        <BottomNavigationAction sx={{color: '#FFFFFF', paddingTop: '5px'}} className="h-fit" label="Idébank" icon={<TipsAndUpdatesIcon />} />
        <BottomNavigationAction sx={{color: '#FFFFFF', paddingTop: '5px'}} className="h-fit" label="Kakefredag" icon={<CakeIcon />} />
      </BottomNavigation>
    </Box>
  );
}
export default Tabbar;
