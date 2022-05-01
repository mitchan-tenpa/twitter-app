import Image from "next/image";
import landscape from "../public/landscape.jpg"
import avatar from "../public/avatar.jpg"
import { useState } from "react";

type User = {
  name: string;
  accountName: string;
  // image: string;
};

type Analitics = {
  analytics: [number, number, number] //タプル型
};

type CommonProps = { //ユニオンタイプス
  user: User; //タイプエイリアス
  analytics: Analitics;
}

type TweetProps = {
  type: "tweet";
  // user: User; //CommonPropsで共通化
  // analytics: Analitics;
};

type ReTweetProps = {
  type: "retweet";
  retweetedUser: string;
  // user: User;
  // analytics: Analitics;
};

type PromotionProps = {
  type: "promotion";
  // user: User;
  // analytics: Analitics;
};

type TwitterCardProps = CommonProps & (TweetProps| ReTweetProps | PromotionProps);

type Content = {
  id: number;
  text:string;
}

const CONTENTS: Content[] = [
  { id:1, text:"foo" },
  { id:2, text:"bar" },
];

const TwitterCard = (props: TwitterCardProps, {sentence}) => {
  const [content, setContent] =useState<Content[]>(CONTENTS)
  return(
    <div className="p-10 w-540 bg-white dark:bg-slate-600 rounded-xl shadow-2xl">
      <div className="flex gap-5 justify-start">
        {/* ストリングリテラルタイプ👇 */}
        {props.type === "promotion" ? "プロモーション" : null} 
        {props.type === "retweet" ? `${props.retweetedUser}さんがリツイートしました。` : null}
        <Image 
          src={avatar} 
          // src={props.user.image} 
          alt="user" 
          width={50} 
          height={20}
        />
        <div>
          <p>{props.user.name}</p>
          <p>{`@${props.user.accountName}`}</p>
        </div>
      </div>
      <div className="py-3">
        <p>
          モーダルで入力した本文がここに来る
          {/* {sentence} */}
        </p>
      </div>
      <div className="mx-auto">
        <Image src={landscape} alt="picture" width={520} height={350} />
      </div>
      <div className="py-3 border-b-2">11:22 AM 2022年2月3日</div>
      <div className="flex gap-4 justify-start py-5">
        <div>{`コメント:${props.analytics[0]}`}</div>
        <div>{`拡散:${props.analytics[1]}`}</div>
        <div>{`いいね:${props.analytics[2]}`}</div>
      </div>
    </div>
  );
};

export default TwitterCard;