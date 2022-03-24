import TwitterCard from "../TwitterCard";

const MiddleArea = ({sentence}) => {
  return(
    <div className="flex justify-center p-5 w-50%">
      <TwitterCard 
        type = "retweet"
        retweetedUser="田中"
        user={{name: "アドレナリンリン", accountName: "ado-renarin"}}
        analytics={[12, 34, 56]}
        sentence={sentence} //？この２つプロップスを渡すためにはどうしたらいい？
      />
    </div>
  );
};

export default MiddleArea;