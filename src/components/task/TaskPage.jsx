import categoryList from "../../utils/category.json";
import TaskList from "./TaskList";

const TaskPage = () => {
  return (
    <div className="overflow-x-auto custom-scrollbar w-full pb-4">
      <div className="lg:flex lg:space-x-4 lg:w-max space-y-4 lg:space-y-0">
        {categoryList?.map((category, index) => (
          <TaskList key={index} category={category} />
        ))}
      </div>
    </div>
  );
};

export default TaskPage;

// <div className="grid lg:grid-cols-4 gap-3">
//   <div className=" bg-slate-100 px-2">
//     <div className="flex items-center justify-between text-gray-600 font-semibold py-5 pe-4">
//       <div className="flex items-center space-x-2">
//         <span className="w-4 h-4 bg-red-600 rounded-s-md"></span>
//         <p>Incomplete</p>
//       </div>
//       <p className="bg-slate-300 py-1 px-2 rounded">0</p>
//     </div>

//     <div className="h-screen overflow-y-scroll custom-scrollbar space-y-5 pe-2">
//       <div className="bg-white py-2 px-4 rounded space-y-4">
//         <div className="flex items-center justify-between">
//           <div className="flex items-center space-x-2">
//             <img src={avatar} alt="avatar" className="w-8" />
//             <p>Client Name</p>
//           </div>
//           <div className="flex items-center space-x-2">
//             <img src={avatar} alt="avatar" className="w-8" />
//             <p>Sadik Istiak</p>
//           </div>
//         </div>
//
//
//
//
//         <div className="flex items-center justify-between">
//           <div className="flex items-center space-x-2">
//             <FaAlignRight className="text-gray-600" />
//             <p className="text-slate-600">
//               Lorem ipsum dolor sit amet consectetur....
//             </p>
//           </div>
//           <p className="bg-slate-100 py-1 px-2 rounded flex items-center space-x-1">
//             <FaCalendarAlt className="text-gray-600" />
//             <span>1/2</span>
//           </p>
//         </div>
//         <div className="flex items-center justify-between font-semibold">
//           <img src={avatar} alt="avatar" className="w-8" />
//           <img src={avatar} alt="avatar" className="w-8" />
//           <p className="bg-slate-300 rounded-full p-1 font-semibold">12+</p>
//           <div className="flex items-center space-x-1">
//             <FaRegComments />
//             <p>15</p>
//           </div>
//           <div className="flex items-center space-x-1">
//             <FaLink />
//             <p>25</p>
//           </div>
//           <div className="flex items-center space-x-2">
//             <SlCalender />
//             <p>30-12-2022</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
//   <div className=" bg-slate-100 p-2">
//     <div className="flex items-center justify-between text-gray-600 font-semibold space-y-6">
//       <div className="flex items-center space-x-2">
//         <span className="w-4 h-4 bg-red-600  rounded-s-md"></span>
//         <p>Incomplete</p>
//       </div>
//       <p className="bg-slate-300 py-1 px-2 rounded">0</p>
//     </div>
//     <div className="space-y-5">
//       <div className="bg-white p-2 rounded space-y-2">
//         <div className="flex items-center justify-between">
//           <div className="flex items-center space-x-2">
//             <img src={avatar} alt="avatar" className="w-8" />
//             <p>Client Name</p>
//           </div>
//           <div className="flex items-center space-x-2">
//             <img src={avatar} alt="avatar" className="w-8" />
//             <p>Sadik Istiak</p>
//           </div>
//         </div>
//         <div className="flex items-center justify-between">
//           <div className="flex items-center space-x-2">
//             <FaAlignRight className="text-gray-600" />
//             <p className="text-slate-600">
//               Lorem ipsum dolor sit amet consectetur....
//             </p>
//           </div>
//           <p className="bg-slate-100 py-1 px-2 rounded flex items-center space-x-1">
//             <FaCalendarAlt className="text-gray-600" />
//             <span>1/2</span>
//           </p>
//         </div>
//         <div className="flex items-center justify-between font-semibold">
//           <img src={avatar} alt="avatar" className="w-8" />
//           <img src={avatar} alt="avatar" className="w-8" />
//           <p className="bg-slate-300 rounded-full p-1 font-semibold">12+</p>
//           <div className="flex items-center space-x-1">
//             <FaRegComments />
//             <p>15</p>
//           </div>
//           <div className="flex items-center space-x-1">
//             <FaLink />
//             <p>25</p>
//           </div>
//           <div className="flex items-center space-x-2">
//             <SlCalender />
//             <p>30-12-2022</p>
//           </div>
//         </div>
//       </div>
//       <div className="bg-white p-2 rounded space-y-2">
//         <div className="flex items-center justify-between">
//           <div className="flex items-center space-x-2">
//             <img src={avatar} alt="avatar" className="w-8" />
//             <p>Client Name</p>
//           </div>
//           <div className="flex items-center space-x-2">
//             <img src={avatar} alt="avatar" className="w-8" />
//             <p>Sadik Istiak</p>
//           </div>
//         </div>
//         <div className="flex items-center justify-between">
//           <div className="flex items-center space-x-2">
//             <FaAlignRight className="text-gray-600" />
//             <p className="text-slate-600">
//               Lorem ipsum dolor sit amet consectetur....
//             </p>
//           </div>
//           <p className="bg-slate-100 py-1 px-2 rounded flex items-center space-x-1">
//             <FaCalendarAlt className="text-gray-600" />
//             <span>1/2</span>
//           </p>
//         </div>
//         <div className="flex items-center justify-between font-semibold">
//           <img src={avatar} alt="avatar" className="w-8" />
//           <img src={avatar} alt="avatar" className="w-8" />
//           <p className="bg-slate-300 rounded-full p-1 font-semibold">12+</p>
//           <div className="flex items-center space-x-1">
//             <FaRegComments />
//             <p>15</p>
//           </div>
//           <div className="flex items-center space-x-1">
//             <FaLink />
//             <p>25</p>
//           </div>
//           <div className="flex items-center space-x-2">
//             <SlCalender />
//             <p>30-12-2022</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
