import Modal from "../Modal";
import { useState } from "react";
import Link from "next/link";

const LeftSideBar = () => {
  const [showModal, setShowModal] = useState(false);
  return(
    <div className="w-20% bg-violet-300 dark:bg-violet-900">
          <ul className="flex flex-col justify-start p-4">
            <li className="p-2 text-xl">ホーム</li>
            <li className="p-2 text-xl">話題を検索</li>
            <li className="p-2 text-xl">通知</li>
            <li className="p-2 text-xl">メッセージ</li>
            <li className="p-2 text-xl">ブックマーク</li>
            <li className="p-2 text-xl">リスト</li>
            <li className="p-2 text-xl">プロフィール</li>
            <li className="p-2 text-xl">その他</li>
          </ul>
          <div className="flex justify-center">
            <button 
              onClick={() => setShowModal(true)} className="group inline-flex items-center py-2 px-3 text-base font-medium text-white bg-blue-400 rounded-3xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white hover:text-opacity-100 focus-visible:ring-opacity-75"
            >
              <span className="my-1 mx-8 font-extrabold">
                ツイートする
              </span> 
            </button>
            <Modal 
              show={showModal} 
              onClose={() => setShowModal(false)}
            >
              children
            </Modal>
          </div>
          <Link href="/">戻る</Link>
        </div>
  );
};

export default LeftSideBar;