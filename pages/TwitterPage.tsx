import Link from "next/link";



const Twitter = () => {
  return(
    <div className="flex justify-between">
      <div className="basis-1/4 h-screen bg-red-200">
        <div>
          Left
        </div>
        <ul className="flex flex-col p-12">
          <li className="p-2 text-xl bg-blue-400">ホーム</li>
          <li className="p-2 text-xl">話題を検索</li>
          <li className="p-2 text-xl">通知</li>
          <li className="p-2 text-xl">メッセージ</li>
          <li className="p-2 text-xl bg-red-700">ブックマーク</li>
          <li className="p-2 text-xl">リスト</li>
          <li className="p-2 text-xl">プロフィール</li>
          <li className="p-2 text-xl">その他</li>
        </ul>
        <div className="flex justify-center">
          <button className="py-2 px-7 text-xl bg-blue-300 rounded-3xl border border-black">
            ツイートする
          </button>
        </div>
        <Link href="/">戻る</Link>
      </div>
      <div className="basis-1/2 p-5 bg-gray-200">
        <div className="p-10">
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
      </div>
      <div className="basis-1/4 bg-blue-200">
        <div>Right</div>
      </div>
    </div>
  );
};

export default Twitter;