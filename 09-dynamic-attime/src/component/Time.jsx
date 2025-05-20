import React, { useState } from "react";

const Time = () => {
  const [entries, setEntries] = useState([
    { option: "", startTime: "", endTime: "" },
  ]);

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const updatedEntries = [...entries];
    updatedEntries[index][name] = value;
    setEntries(updatedEntries);
  };

  const handleAdd = () => {
    setEntries([
      ...entries,
      { option: "", startTime: "", endTime: "" },
     
    ]);
  };

  const handleSubmit = () => {
    const allValid = entries.every(
      (ele) => ele.option && ele.startTime && ele.endTime
    );
    if (allValid) {
      console.log("Submitted entries:", entries);
    } else {
      alert("Please fill in all fields before submitting.");
    }
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-6">
          <div className="d-flex flex-column gap-3 align-items-center">
            {entries.map((ele, index) => (
              <div key={index} className="w-100  bg-gray-800 d-flex gap-5 p-3 rounded">
                <select
                  name="option"
                  className="form-select mb-2"
                  value={ele.option}
                  onChange={(e) => handleChange(index, e)}
                >
                  <option value="">Select Days</option>
                  <option value="sunday">sunday</option>
                  <option value="monday">monday </option> 
                  <option value="Tuesday">Tuesday</option>
                  <option value="wednsday">wednsday </option>
                  <option value="thursday">thursday</option>
                  <option value="friday">friday </option>
                  <option value="saturday">saturday </option>
                </select>

                <input
                  type="time"
                  name="startTime"
                  className="form-control mb-2"
                  value={ele.startTime}
                  onChange={(e) => handleChange(index, e)}
                />

                <input
                  type="time"
                  name="endTime"
                  className="form-control mb-2"
                  value={ele.endTime}
                  onChange={(e) => handleChange(index, e)}
                />
              </div>
            ))}

       

<button type="button" onClick={handleAdd} class="text-white bg-gradient-to-r from-purple-500 via-purple-600  to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-pill text-sm px-12 py-2.5 text-center me-2 mb-2">Add items</button>


            
<button type="button" onClick={handleSubmit} class="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-pill text-sm px-25 py-2.5 text-center me-2 mb-2">Submit</button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Time;
