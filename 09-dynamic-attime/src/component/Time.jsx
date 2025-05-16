// import React, { useState } from "react";

// const Time = () => {
//   const [entries, setEntries] = useState([
//     { option: "", startTime: "", endTime: "" },
//   ]);

//   const handleChange = (index, e) => {
//     const { name, value } = e.target;
//     const updatedEntries = [...entries];
//     updatedEntries[index][name] = value;
//     setEntries(updatedEntries);
//   };

//   const handleAdd = () => {
//     setEntries([
//       ...entries,
//       { option: "", startTime: "", endTime: "" },
     
//     ]);
//   };

//   const handleSubmit = () => {
//     const allValid = entries.every(
//       (entry) => entry.option && entry.startTime && entry.endTime
//     );
//     if (allValid) {
//       console.log("Submitted entries:", entries);
//     } else {
//       alert("Please fill in all fields before submitting.");
//     }
//   };

//   return (
//     <div className="container my-5">
//       <div className="row justify-content-center">
//         <div className="col-6">
//           <div className="d-flex flex-column gap-3 align-items-center">
//             {entries.map((entry, index) => (
//               <div key={index} className="w-100 border p-3 rounded">
//                 <select
//                   name="option"
//                   className="form-select mb-2"
//                   value={entry.option}
//                   onChange={(e) => handleChange(index, e)}
//                 >
//                   <option value="">Select Days</option>
//                   <option value="sunday">sunday</option>
//                   <option value="monday">monday </option> 
//                   <option value="Tuesday">Tuesday</option>
//                   <option value="wednsday">wednsday </option>
//                   <option value="thursday">thursday</option>
//                   <option value="friday">friday </option>
//                   <option value="saturday">saturday </option>
//                 </select>

//                 <input
//                   type="time"
//                   name="startTime"
//                   className="form-control mb-2"
//                   value={entry.startTime}
//                   onChange={(e) => handleChange(index, e)}
//                 />

//                 <input
//                   type="time"
//                   name="endTime"
//                   className="form-control"
//                   value={entry.endTime}
//                   onChange={(e) => handleChange(index, e)}
//                 />
//               </div>
//             ))}

//             <button
//               onClick={handleAdd}
//               className="btn btn-outline-dark btn-sm w-100"
//             >
//               Add Entry
//             </button>

//             <button
//               onClick={handleSubmit}
//               className="btn btn-success btn-sm w-100"
//             >
//               Submit
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Time;
