import React from "react";

const GenerateImg = () => {
  return (
    <div>
      <h2 className="text-6xl text-center mt-11">
        Generate Image with Quick Seek
      </h2>
      <div className="flex justify-center w-full mx-auto mt-10">
        <div>

       
       
          <label className="input validator join-item w-full md:w-2xl mx-auto">
            <input className="w-full" type="email" placeholder="Provide imge prompt" required />
          </label>
    
        <button className="btn btn-neutral join-item">Create Image</button>
         </div>
      </div>
    </div>
  );
};

export default GenerateImg;
