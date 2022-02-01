import Link from "next/link";
import Modal from "../components/Modal";
import PopOver from "./PopOver";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const Twitter = () => {
  const {theme, setTheme} = useTheme();
  const [showModal, setShowModal] = useState(false);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if(!mounted) return null;
  return(
    <div className="h-screen bg-slate-200 dark:bg-slate-800">
      <header className="flex justify-center items-center h-10% border-b-2 border-green-500">
        <span className="">ホーム</span>
        <button 
          className="py-2 px-6 text-white dark:text-black bg-black dark:bg-white"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          Toggle to 
          {theme === "light" ? "Dark" : "Light"}
        </button>
      </header>
      <div className="flex justify-between h-90%">
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
        <div className="p-5 w-50%">
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
        <div className="w-30% border-l-2 border-green-500">
          <div className="flex justify-center">
            <PopOver />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Twitter;