'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import { PulsAlert, PulsButton } from "@dips/puls-core-react-components";
import { PlusIcon } from "@dips/arena-core-icons";

const Events: React.FC = () => {

    // Declare a state variable named "showAlert" with an initial value of false
    const [showAlert, setAlert] = React.useState(false);
  
    // Function to toggle the value of the "showAlert" state
    const toggleAlert = () => {
      setAlert(!showAlert);
    };

  return (
    <Box>
      No e vi i event-sida!<br/>
      
      <PulsButton mode="secondary" size="medium" 
        onClick={toggleAlert}>
        <PlusIcon />Legg til event
      </PulsButton>

      { showAlert ? 
      <PulsAlert
        type="error"
        format="messageBox"
        title="Å nei du!"
        onClose={toggleAlert}>
          <p>Budsjettet for all moro er oppbrukt for i år!</p>
      </PulsAlert> : '' }

    </Box>
  );
}

export default Events;
