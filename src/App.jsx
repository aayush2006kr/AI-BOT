import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { GoogleGenAI } from "@google/genai";
import { BeatLoader } from "react-spinners";
import Markdown from "react-markdown";
import { RiComputerFill } from "react-icons/ri";
import { GiOpenBook, GiWhiteBook } from 'react-icons/gi';
import { FaBloggerB } from 'react-icons/fa';


const App = () => {
  const [Screen, setScreen] = useState(1);
  const [Prompt, setPrompt] = useState("");
  const [Loading, setLoading] = useState(false);
  const ai = new GoogleGenAI({
     apiKey: import.meta.env.VITE_GEMINI_API_KEY
  });

  let messages = [];

  const [Data, setData] = useState(messages);

  async function getResponse() {
    if (Prompt === "") {
      alert("Please enter a prompt!");
      return;
    }

    setData((prevData) => [
      ...prevData,
      {
        role: "user",
        content: Prompt,
      },
    ]);
    setScreen(2);

    setLoading(true);

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: Prompt,
    });

    setData((prevData) => [
      ...prevData,
      {
        role: "ai",
        content: response.text,
      },
    ]);

    console.log(response.text);
    setPrompt("");
    setLoading(false);
  }

  return (
    <div>
      <Navbar />

      <div className="screens">
        {Screen === 1 ? (
          <div className="screen1 w-screen h-[65vh] px-[150px] flex items-center justify-center flex-col">
            <h3 className="text-2xl font-semibold">
              AI
              <span className=" font-semibold text-2xl text-purple-500">
                -BOT
              </span>
            </h3>

             <div className="flex mt-5 items-center gap-[15px]">

            <div className="card w-[200px] h-[fit] cursor-pointer bg-zinc-800 transition-all hover:bg-gray-800 rounded-lg p-[15px]">
                 <i className='text-[30px]'><RiComputerFill/></i>
                 <p className='mt-3'>Create a website using html css and js.</p>
                </div>

                <div className="card w-[200px] h-[fit] cursor-pointer bg-zinc-800 transition-all hover:bg-gray-800 rounded-lg p-[15px]">
                 <i className='text-[30px]'><GiWhiteBook/></i>
                 <p className='mt-3'>Write a book for me. topic is coding.</p>
                </div>

                <div className="card w-[200px] h-[fit] cursor-pointer bg-zinc-800 transition-all hover:bg-gray-800 rounded-lg p-[15px]">
                 <i className='text-[30px]'><GiOpenBook/></i>
                 <p className='mt-3'>Tell me a commedy story.</p>
                </div>

                <div className="card w-[200px] h-[fit] cursor-pointer bg-zinc-800 transition-all hover:bg-gray-800 rounded-lg p-[15px]">
                 <i className='text-[30px]'><FaBloggerB/></i>
                 <p className='mt-3'>Create a blog for me topic is web dev.</p>
                </div>





             </div>




          </div>
        ) : (
          <>
            <div className="screen2  w-screen h-[70vh] px-[150px] overflow-y-auto">
              {Data
                ? Data.map((item, index) => {
                    return (
                      <>
                        {item.role === "user" ? (
                          <div className="user rounded-2xl bg-gray-800 w-fit max-w-[40vw] mb-5 ml-[auto] p-[15px]">
                            <p className="text-[14px] text-[gray]">User</p>
                            <p>{item.content}</p>
                          </div>
                        ) : (
                          <div className="ai rounded-2xl bg-gray-800 w-fit max-w-[40vw] mb-5 mr-[auto] p-[15px]">
                            <p className="text-[14px] text-[gray]">AI-BOT</p>

                            <Markdown>
                              {item.content}
                            </Markdown>
                          </div>
                        )}
                      </>
                    );
                  })
                : "NO, Messages Yet!"}
              {Loading ? (
                <div className="loader">
                  <BeatLoader color="#fff" />
                </div>
              ) : (
                ""
              )}
            </div>
          </>
        )}

        <div className="inputBox px-[150px] h-[15vh] pt-3">
          <div className="input w-[90%] mx-[auto] flex items-center gap-[10px] bg-zinc-800 rounded-lg">
            <input
              onChange={(e) => {
                setPrompt(e.target.value);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  getResponse();
                }
              }}
              value={Prompt}
              type="text"
              placeholder="Enter your prompt"
              className="flex-1 bg-transparent p-[15px] outline-none text-[18px] font-[500]"
            />
          </div>
          <p className="text-[gray] text-center mt-3">AI-BOT can make mistakes!</p>
        </div>
      </div>
    </div>
  );
};

export default App;
