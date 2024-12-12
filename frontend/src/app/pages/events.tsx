'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import { PulsAlert, PulsButton } from "@dips/puls-core-react-components";
import { PlusIcon } from "@dips/arena-core-icons";

const Events: React.FC = () => {

  const showAlert = false;
  function addEvent() {
    // Show alert for now
    //throw new Error('Sorry, budsjettet er oppbrukt!!');
  }

  return (
    <Box>
      No e vi i event-sida!<br/>
      <PulsButton mode="secondary" size="medium" onClick = {addEvent()} >
        <PlusIcon />Legg til event
      </PulsButton>
    </Box>
  );
}

export default Events;
