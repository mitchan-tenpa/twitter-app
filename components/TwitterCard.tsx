

const TwitterCard = () => {
  return(
    <div className="py-10 px-20">
      <div className="flex gap-5 justify-start">
        <p className="">顔</p>
        <div>
          <p>アドレナリン</p>
          <p>@ado_rennin</p>
        </div>
      </div>
      <div className="py-5">
        <p>Sometimes I feel like I’m not myself.Maybe it’s due to myself. Sometimes I feel like I’m not myself.Maybe it’s due to myself. Sometimes I feel like I’m not myself.Maybe it’s due to myself. </p>
      </div>
      <div className="py-5 mx-auto">
        <div>No Photo</div>
      </div>
      <div className="py-5">日時</div>
      <div className="flex gap-4 justify-start py-5">
        <div>コメント</div>
        <div>拡散</div>
        <div>いいね</div>
      </div>
    </div>
  );
};

export default TwitterCard;