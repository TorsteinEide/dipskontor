'use client';

import * as React from 'react';
import { PulsButton } from '@dips/puls-core-react-components';
import { Idea } from '../types/dataTypes';
import IdeaComponent from '../components/ideaComponent';

interface IdeaListProps {
    ideas: [Idea];
}

const Ideabank: React.FC<IdeaListProps> = (ideasProps) => {
  return (
    <>
        <PulsButton>Legg til din idé</PulsButton>
        {ideasProps.ideas.forEach(element => {
            <IdeaComponent idea={element} /> 
        })}
    </>
  );
}
export default Ideabank;
