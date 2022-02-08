import { useState } from "react";
import Header from "../components/Layout/Header";
import LeftSideBar from "../components/Layout/LeftSideBar";
import MiddleArea from "../components/Layout/MiddleArea";
import RightSide from "../components/Layout/RightSide";

const Twitter = () => {
  const [sentence, setSentence] = useState("");
  const addText = (props) => {
    setSentence(props);
  }
  return(
    <div className="h-screen bg-slate-200 dark:bg-slate-800">
      <Header />
      <div className="flex justify-between h-95%">
        <LeftSideBar onAddText={addText}/>
        <MiddleArea sentence={sentence}/>
        <RightSide />
      </div>
    </div>
  );
};

export default Twitter;