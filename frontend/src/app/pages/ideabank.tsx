'use client';

import * as React from 'react';
import { PulsButton } from '@dips/puls-core-react-components';
import { Idea } from '../types/dataTypes';
import IdeaComponent from '../components/ideaComponent';
import { PlusIcon } from '@dips/arena-core-icons';

interface IdeaListProps {
    ideas: Idea[];
}

const Ideabank: React.FC<IdeaListProps> = (ideasProps) => {

    const addIdea = () => {
        console.log(ideasProps)
    };
  return (
    <>
        <PulsButton mode="secondary" size="medium" 
            onClick={addIdea}>
            <PlusIcon />Legg til idé
        </PulsButton>
        {ideasProps.ideas.map((element, index) => (
            <IdeaComponent key={index} idea={element} />
        ))}
    </>
  );
}
export default Ideabank;
