'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CakeIcon from '@mui/icons-material/Cake';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import { Link } from 'react-router-dom';

const Tabbar: React.FC = () => {
  const [value, setValue] = React.useState(0);

  return (
    <Box>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <Link to="/" >
          <BottomNavigationAction label="Events" icon={<CalendarMonthIcon />} />
        </Link>
        <Link to="/ideabank" >
          <BottomNavigationAction label="Idébank" icon={<TipsAndUpdatesIcon />} />
        </Link>
        <BottomNavigationAction label="Kakefredag" icon={<CakeIcon />} />
      </BottomNavigation>
    </Box>
  );
}
export default Tabbar;
