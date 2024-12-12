import { Idea } from "../types/dataTypes";

interface IdeaProps {
    idea: Idea;
}

const Ideabank: React.FC<IdeaProps> = (ideaProp) => {
    return (
      <>
            <h1>{ideaProp.idea.title}</h1>
            <p>{ideaProp.idea.description}</p>
      </>
    );
  }
  export default Ideabank;