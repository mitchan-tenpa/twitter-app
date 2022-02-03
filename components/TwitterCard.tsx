import Image from "next/image";
import landscape from "../public/landscape.jpg"
import avatar from "../public/avatar.jpg"

const TwitterCard = () => {
  return(
    <div className="p-10 w-540 bg-white dark:bg-slate-600 rounded-xl shadow-2xl">
      <div className="flex gap-5 justify-start">
        <Image src={avatar} alt="user" width={50} height={20}/>
        <div>
          <p>アドレナリン</p>
          <p>@ado_rennin</p>
        </div>
      </div>
      <div className="py-3">
        <p>Sometimes I feel like I’m not myself.Maybe it’s due to myself.</p>
      </div>
      <div className="mx-auto">
        <Image src={landscape} alt="picture" width={520} height={350} />
      </div>
      <div className="py-3 border-b-2">11:22 AM 2022年2月3日</div>
      <div className="flex gap-4 justify-start py-5">
        <div>コメント</div>
        <div>拡散</div>
        <div>いいね</div>
      </div>
    </div>
  );
};

export default TwitterCard;