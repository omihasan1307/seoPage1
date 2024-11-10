/* eslint-disable react/prop-types */
import { SlCalender } from "react-icons/sl";
import {
  FaAlignRight,
  FaCalendarAlt,
  FaLink,
  FaRegComments,
} from "react-icons/fa";
import avatar from "../../assets/avatar.jpg";
import { useEffect, useState } from "react";
import Modal from "./Modal";

const TaskList = ({ category }) => {
  const { header, content } = category || {};
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({});


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://kina-becha-x77q-git-main-omihasan1307s-projects.vercel.app/api/upload');
        const data = await response.json();
        setModalContent(data); 
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); 


  const openModal = () => {

    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };


//   // Function to open the modal
//   const openModal = () => {
//     setIsModalOpen(true);
//   };

//   // Function to close the modal
//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

  return (
    <div className="bg-slate-100 px-2 py-6 rounded-lg">
      <div className="flex justify-between items-center text-gray-600 font-semibold mb-4 pe-4">
        <div className="flex items-center space-x-2">
          <span
            className={`w-5 h-5 rounded-s-md ${
              header?.status === "Incomplete"
                ? "bg-red-600"
                : header?.status === "To Do"
                ? "bg-indigo-600"
                : header?.status === "Doing"
                ? "bg-yellow-600"
                : header?.status === "Under Review"
                ? "bg-gray-600"
                : header?.status === "Completed"
                ? "bg-green-600"
                : header?.status === "Over Task"
                ? "bg-pink-600"
                : ""
            }`}
          />
          <p>{header?.status}</p>
        </div>
        <p className="bg-slate-300 py-1 px-2 rounded">{header?.count}</p>
      </div>

      <div className="space-y-5 h-screen overflow-y-auto custom-scrollbar pe-2">
        {content?.map((task, index) => (
          <div key={index} className="bg-white p-4 rounded space-y-4 ">
            <div className="flex items-center justify-between font-semibold text-sm">
              <div className="flex items-center space-x-2 ">
                <img
                  src={avatar}
                  alt="avatar"
                  className="w-8 h-8 rounded-full "
                />
                <p>{task.clientName}</p>
              </div>
              <div className="flex items-center space-x-2">
                <img
                  src={avatar}
                  alt="avatar"
                  className="w-8 h-8 rounded-full"
                />
                <p>Sadik Istiak</p>
              </div>
            </div>

            {/* Task Description */}
            <div className="flex justify-between items-center text-gray-600 text-sm">
              <div className="flex items-center space-x-2 ">
                <FaAlignRight />
                <p>{task.description.slice(0, 30) + "..."}</p>
              </div>
              <div className="flex items-center bg-slate-100 p-1 rounded space-x-1">
                <FaCalendarAlt />
                <span>{task.progress}</span>
              </div>
            </div>

            {/* Task Additional Info */}
            <div className="flex justify-between items-center font-semibold text-sm space-x-3">
              <img src={avatar} alt="avatar" className="w-8" />
              <img src={avatar} alt="avatar" className="w-8" />
              <p className="bg-slate-300 rounded-full p-1">
                {task.additionalInfo.extra}
              </p>
              <div className="flex space-x-2 items-center">
                <FaRegComments />
                <span>{task.additionalInfo.comments}</span>
              </div>
              <div
                className="flex space-x-2 items-center cursor-pointer"
                onClick={() => openModal()}
              >
                <FaLink />
                <span>{modalContent?.data?.[0]?.upload.length}</span>
              </div>
              <div className="flex space-x-2 items-center">
                <SlCalender />
                <span>{task.additionalInfo.calendarDate}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      {isModalOpen &&
      <Modal isOpen={isModalOpen} closeModal={closeModal} content={modalContent} />
}

      {/* {isModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-md w-1/3">
            <h3 className="text-lg font-semibold">Modal Content</h3>
      
            <button
              onClick={closeModal}
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default TaskList;
