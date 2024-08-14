import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Head from "./components/Head/Head";
import SelectionTab from "./components/SelectionTab/SelectionTab";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
       <Head></Head>
       <SelectionTab></SelectionTab>
      </div>
    </>
  );
}

export default App;
