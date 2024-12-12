import { PulsButton, PulsIconButton } from "@dips/puls-core-react-components";
import { PlusIcon } from "@dips/arena-core-icons";
import Tabbar from "./components/tabbar";

export default function Home() {
  return(
    <main>
      <Tabbar></Tabbar>
      <PulsButton mode="primary" size="medium">
        <PlusIcon />Legg til event
      </PulsButton>

    </main>
  );
}
