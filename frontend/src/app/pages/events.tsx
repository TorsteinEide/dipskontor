'use client';

import * as React from 'react';
import { PulsButton, PulsDivider } from "@dips/puls-core-react-components";
import { PlusIcon } from "@dips/arena-core-icons";
import { IEvent } from '../types/dataTypes';
import Event from '../components/event';

interface EventListProps {
  events: IEvent[];
}

const Events: React.FC<EventListProps> = (eventProps) => {
  const addEvent = () => {
    console.log(eventProps)
  };
  
  return (
    <>
        <PulsButton mode="secondary" size="medium" 
            onClick={addEvent}>
            <PlusIcon />Legg til event
        </PulsButton>
        {eventProps.events.map((element, index) => (
            <div key={index}>
              <Event  event={element} />
              <PulsDivider />
            </div>
        ))}
    </>
  );
}

export default Events;
