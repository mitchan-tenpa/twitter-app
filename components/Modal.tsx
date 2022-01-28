import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import * as React from "react";

const Modal = ({show, onClose, children}) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleClose = (e) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = show ? (
    <div className="flex absolute inset-0 justify-center items-center w-full h-full bg-black bg-opacity-70 bg-center"> 
      <div className="z-50 p-5 w-96 bg-black rounded-2xl h-100">
        <div className="flex justify-between">
          <div className="">
            <a href="#" onClick={handleClose} className="text-base text-white">キャンセル</a>
          </div>
          <button className="group inline-flex items-center py-1 px-3 text-base font-medium text-white bg-blue-400 rounded-3xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white hover:text-opacity-100 focus-visible:ring-opacity-75">
            <span className="text-base">
              ツイートする
            </span> 
          </button>
        </div>
        <div className='h-4/5'>
          <span className='p-2 bg-gray-300 rounded-full'>Photo</span>
          <input type="text" placeholder='いまどうしてる？' className="text-white bg-black"/>
        </div>
        <div className="text-5xl text-white">{children}</div>
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