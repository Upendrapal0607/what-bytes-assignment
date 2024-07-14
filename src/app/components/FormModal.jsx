"use client"
import React, { useState } from 'react';
import { IoLogoHtml5 } from 'react-icons/io';
import Modal from 'react-modal';

const FormModal = ({ isOpen, onRequestClose ,setStudentDetails,studentDetails}) => {
  const [formData, setFormData] = useState(
    studentDetails

  );

//   correct:10,
//   rank:1,
//   percentile:30
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStudentDetails(formData);
    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50"
    >
      <div className="bg-white sm:w-[600px] w-full p-6 rounded-lg shadow-lg">
        <div className='flex justify-between items-center mb-2'>
        <h2 className="text-2xl mb-4 font-bold">Update Score</h2>
        <div>
  <p className="font-bold">HTML</p>
          <IoLogoHtml5 className="w-8 h-8 mr-4 text-red-500" />
            </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4 flex justify-between items-center">
            <label className="flex items-center gap-2 text-gray-700"><span className='flex items-center justify-center text-white w-6 h-6 p-1 rounded-full bg-blue-700'>
  1
</span>
Update your Rank</label>
            <input
              type="text"
              name="rank"
              value={formData.rank}
              onChange={handleChange}
              className="w-40 px-3 py-2 border rounded"
            />
          </div>
          <div className="mb-4 flex justify-between items-center">
          <label className="flex items-center gap-2 text-gray-700"><span className='flex items-center justify-center text-white w-6 h-6 p-1 rounded-full bg-blue-700'>
  2
</span>
Update your Percentile</label>
            <input
              type="text"
              name="percentile"
              value={formData.percentile}
              onChange={handleChange}
              className="w-40 px-3 py-2 border rounded"
            />
          </div>

          <div className="mb-4 flex justify-between items-center">
          <label className="flex items-center gap-2 text-gray-700"><span className='flex items-center justify-center text-white w-6 h-6 p-1 rounded-full bg-blue-700'>
  3
</span>
Update your Curent Score (out of 15)</label>
            <input
              type="text"
              name="correct"
              value={formData.correct}
              onChange={handleChange}
              className="w-40 px-3 py-2 border rounded"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onRequestClose}
              className="mr-2 px-4 py-2 bg-gray-500 text-white rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-900 text-white rounded"
            >
              Save {"->"}
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default FormModal;
