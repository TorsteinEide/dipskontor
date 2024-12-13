import { Idea } from "../types/dataTypes";

interface IdeaProps {
    idea: Idea;
}

const Ideabank: React.FC<IdeaProps> = (ideaProp) => {
    return (
      <section className="bg-red-500">
            <h1>{ideaProp.idea.title}</h1>
            <p>{ideaProp.idea.description}</p>
      </section>
    );
  }
  export default Ideabank;