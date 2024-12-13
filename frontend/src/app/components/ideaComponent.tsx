import { Idea } from "../types/dataTypes";
import { Person } from "@mui/icons-material";
import { ThumbUp } from "@mui/icons-material";

interface IdeaProps {
    idea: Idea;
}

const Ideabank: React.FC<IdeaProps> = (ideaProp) => {
    return (
      <section class=" bg-widget my-4 p-2">
        <Person/>{ideaProp.idea.createdBy.name} vil ha:
        <h1 class="font-semibold text-lg mt-3">{ideaProp.idea.title}</h1>
        <p class="mb-3">{ideaProp.idea.description}</p>
        <button><ThumbUp/> {ideaProp.idea.likes.length}</button>
      </section>
    );
  }
  export default Ideabank;