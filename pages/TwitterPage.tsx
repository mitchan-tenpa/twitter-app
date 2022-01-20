import Link from "next/link";



const Twitter = () => {
  return(
    <div className="flex justify-between">
      <div className="bg-red-200 h-screen basis-1/4">
        <div>
          Left
        </div>
        <ul className="flex flex-col p-12">
          <li className="text-xl p-2">ホーム</li>
          <li className="text-xl p-2">話題を検索</li>
          <li className="text-xl p-2">通知</li>
          <li className="text-xl p-2">メッセージ</li>
          <li className="text-xl p-2">ブックマーク</li>
          <li className="text-xl p-2">リスト</li>
          <li className="text-xl p-2">プロフィール</li>
          <li className="text-xl p-2">その他</li>
        </ul>
        <div className="flex justify-center">
          <button className="border border-black rounded-3xl bg-blue-300 text-xl py-2 px-7">
            ツイートする
          </button>
        </div>
        <Link href="/">戻る</Link>
      </div>
      <div className="bg-gray-200 basis-1/2">
        <div>Main</div>
      </div>
      <div className="bg-blue-200 basis-1/4">
        <div>Right</div>
      </div>
    </div>
  );
};

export default Twitter;