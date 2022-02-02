import Header from "../components/Layout/Header";
import LeftSideBar from "../components/Layout/LeftSideBar";
import MiddleArea from "../components/Layout/MiddleArea";
import RightSide from "../components/Layout/RightSide";

const Twitter = () => {
  return(
    <div className="h-screen bg-slate-200 dark:bg-slate-800">
      <Header />
      <div className="flex justify-between h-90%">
        <LeftSideBar />
        <MiddleArea />
        <RightSide />
      </div>
    </div>
  );
};

export default Twitter;