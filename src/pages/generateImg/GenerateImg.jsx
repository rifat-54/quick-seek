import React, { useState } from "react";

const GenerateImg = () => {

  const [prompt,setPrompt]=useState('')


  const generateImg = () => {

  


    const form = new FormData();
    form.append("prompt",prompt);

    fetch("https://clipdrop-api.co/text-to-image/v1", {
      method: "POST",
      headers: {
        "x-api-key": import.meta.env.VITE_CLIPDROP_API,
      },
      body: form,
    })
      .then((response) => response.arrayBuffer())
      .then((buffer) => {
        const blob = new Blob([buffer], { type: "image/png" });
        const imageUrl = URL.createObjectURL(blob);
        const img = document.createElement("img");
        img.src = imageUrl;
        document.body.appendChild(img);
        console.log(blob,'url-> ',imageUrl);
      })
      .catch((err) => console.error("Error:", err));


  };

  return (
    <div>
      <h2 className="text-6xl text-center mt-11">
        Generate Image with Quick Seek
      </h2>
      <div className="flex justify-center w-full mx-auto mt-10">
        <div>
          <label className="input validator join-item w-full md:w-2xl mx-auto">
            <input
            onChange={(e)=>setPrompt(e.target.value)}
              className="w-full"
              type="email"
              placeholder="Provide imge prompt"
              required
            />
          </label>

          <button onClick={generateImg} className="btn btn-neutral join-item">Create Image</button>
        </div>
      </div>
    </div>
  );
};

export default GenerateImg;
