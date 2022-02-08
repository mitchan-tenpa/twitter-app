import TwitterCard from "../TwitterCard";

const MiddleArea = ({sentence}) => {
  return(
    <div className="flex justify-center p-5 w-50%">
      <TwitterCard sentence={sentence}/>
    </div>
  );
};

export default MiddleArea;