import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import * as React from "react";

const Modal = ({show, onClose, children, onAddText}) => {
  const [isBrowser, setIsBrowser] = useState(false);
  const [text, setText] = useState("");
                      //JSXのonSubmitをホバーしての型アサーション👇
  const submitForm: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    onAddText(text);
    setText("");
    setIsBrowser(false);
  };

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleClose: React.MouseEventHandler = (e) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = show ? (
    <div className="flex absolute inset-0 justify-center items-center bg-black bg-opacity-70 bg-center h-full w-full"> 
      <div className="z-50 p-3 w-418 h-478 bg-slate-50 dark:bg-black rounded-2xl border border-gray-50">
        <div className="flex justify-between">
          <div className="">
            <a href="#" onClick={handleClose} className="text-sm text-black dark:text-white">
              キャンセル
            </a>
          </div>
          <button className="group inline-flex items-center py-2 px-3 text-base font-medium text-white bg-blue-400 rounded-3xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white hover:text-opacity-100 focus-visible:ring-opacity-75">
            <span className="text-sm">
              ツイートする
            </span> 
          </button>
        </div>
        <div className='p-2 h-370'>
          <form onSubmit={submitForm}>
            <span className='p-2 bg-gray-300 rounded-full'>Photo</span>
            <input 
              type="text" 
              placeholder='いまどうしてる？' 
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="pl-2 text-black dark:text-white bg-slate-50 dark:bg-black outline-none"
            />
          </form>
        </div>


        <div className="text-5xl text-white">
          {children}
        </div>
      </div>
    </div>
  ) : null;

  if(isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("modal-root")
    );
  } else {
    return null;
  }
}

export default Modal;