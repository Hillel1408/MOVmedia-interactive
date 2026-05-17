import "./App.css";
import { observer } from "mobx-react-lite";

import { Intro, Schoolboy } from "./components";
import { rootStore } from "./stores/rootStore";

const App = observer(function App() {
  if (!rootStore.isIntroFinished) {
    return <Intro />;
  }

  if (rootStore.role === "schoolboy") {
    return <Schoolboy />;
  }

  return null;
});

export default App;
