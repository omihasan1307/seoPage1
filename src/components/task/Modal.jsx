/* eslint-disable react/prop-types */
import { useState } from "react";

const Modal = ({ isOpen, closeModal, content }) => {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (e) => {
    setSelectedFiles(e.target.files);
  };

  const handleSubmit = async () => {
    if (selectedFiles.length === 0) {
      alert("Please select at least one file.");
      return;
    }

    const formData = new FormData();

    for (let i = 0; i < selectedFiles.length; i++) {
      formData.append("files", selectedFiles[i]);
    }

    try {
      const response = await fetch(
        "https://kina-becha-x77q.vercel.app/api/upload/create-upload",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        alert("Files uploaded successfully!");
      } else {
        alert("Error uploading files.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong while uploading.");
    }
  };

  if (!isOpen) return null;
  return (
    <div
      className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center"
      onClick={closeModal}
    >
      <div
        className="bg-white p-6 rounded shadow-md lg:w-1/3"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-lg font-semibold mb-4">Upload Attachments</h3>
        <div className="mb-4 flex justify-between items-center">
          <input
            type="file"
            multiple
            onChange={handleFileChange}
            className="border border-gray-300 p-2 rounded"
          />
          <button
            onClick={handleSubmit}
            className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
          >
            Submit
          </button>
        </div>

        {content?.data?.[0]?.upload.length > 0 && (
          <div className="space-y-2">
            <h4 className="font-semibold text-sm">Uploaded Files:</h4>
            <ul className="space-y-1">
              {content?.data?.[0]?.upload.map((url, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center bg-gray-100 p-2 rounded"
                >
                  <span>{index + 1} .</span>
                  <span>{url.split("/").pop().split(".")[0]}</span>{" "}
                  <span className="text-gray-500 text-sm">
                    {url.split(".").pop().toUpperCase()}{" "}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <button
          onClick={closeModal}
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
