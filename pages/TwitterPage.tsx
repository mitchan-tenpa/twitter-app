import Link from "next/link";
import { useState } from "react";
import Modal from "../components/Modal";
import PopOver from "./PopOver";



const Twitter = () => {
  const [showModal, setShowModal] = useState(false);
  
  return(
    <div className="h-screen">
      <header className="flex justify-center items-center h-10% bg-yellow-300">
        <span className="">ホーム</span>
      </header>
      <div className="flex justify-between h-90%">
        <div className="w-20% bg-violet-900">
          <ul className="flex flex-col justify-start p-4">
            <li className="p-2 text-xl text-white">ホーム</li>
            <li className="p-2 text-xl text-white">話題を検索</li>
            <li className="p-2 text-xl text-white">通知</li>
            <li className="p-2 text-xl text-white">メッセージ</li>
            <li className="p-2 text-xl text-white">ブックマーク</li>
            <li className="p-2 text-xl text-white">リスト</li>
            <li className="p-2 text-xl text-white">プロフィール</li>
            <li className="p-2 text-xl text-white">その他</li>
          </ul>
          <div className="flex justify-center">
            <button onClick={() => setShowModal(true)} className="group inline-flex items-center py-2 px-3 text-base font-medium text-white bg-blue-400 rounded-3xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white hover:text-opacity-100 focus-visible:ring-opacity-75">
              <span className="my-1 mx-8 font-extrabold">
                ツイートする
              </span> 
            </button>
            <Modal show={showModal} onClose={() => setShowModal(false)}>
              children
            </Modal>
          </div>
          <Link href="/">戻る</Link>
        </div>
        <div className="p-5 w-50% bg-gray-200">
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
        </div>
        <div className="w-30% bg-blue-200">
          <div className="flex justify-center">
            <PopOver />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Twitter;