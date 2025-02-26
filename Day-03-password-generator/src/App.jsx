import { useState, useEffect } from "react";

const App = () => {
  const [psw, setPsw] = useState("");
  const [val, setVal] = useState(10);
  const [numeric, setNumeric] = useState(false);
  const [specialChars, setSpecialChars] = useState(false);

  const alphabets = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const symbols = "@#$%&*()-=+[]{}<>";

  const generate = (pswLen) => {
    let str = "";
    let allChars = alphabets;

    if (numeric) allChars += numbers;
    if (specialChars) allChars += symbols;

    for (let i = 0; i < pswLen; i++) {
      let idx = Math.floor(Math.random() * allChars.length);
      str += allChars[idx];
    }

    setPsw(str);
  }

  const slider = (e) => {
    const pswLen = e.target.value;
    setVal(pswLen);
  }

  const addNumbers = (e) => {
    setNumeric(e.target.checked);
  }

  const addSymbols = (e) => {
    setSpecialChars(e.target.checked);
  }

  const copy = async (e)=>{
    e.preventDefault();

    try {
      await navigator.clipboard.writeText(psw);
      alert("Password is copied to clipboard");
    }
    catch(err) {
      alert("Try again!");
    }
  }

  useEffect(() => {
    generate(val);
  }, [numeric, specialChars, val]);

  return (
    <div className="bg-[dodgerblue] h-screen flex justify-center items-center">
      <div className="bg-white md:w-fit w-[90%] rounded-md shadow-xl">
        <h1 className="p-4 text-blue-600 text-center text-3xl font-bold border-b border-gray-500">Password Generator</h1>

        <form className="p-4">
          <div className="flex md:flex-row flex-col justify-between gap-4">
            <input
              readOnly
              type="text"
              value={psw}
              className="grow outline-none p-2 rounded border border-[#ccc]"
            />
            <button
              className="p-2 bg-[dodgerblue] hover:bg-blue-600 duration-1000 text-white px-8 font-semibold rounded cursor-pointer"
              onClick={copy}
            >Copy</button>
          </div>

          <div className="p-4 flex md:flex-row flex-col gap-8">
            <input
              type="range"
              min="8"
              max="35"
              step="1"
              value={val}
              onChange={slider}
              className="md:order-first order-last"
            />

            <span>Length ({val})</span>

            <div className="flex gap-2 items-center">
              <label htmlFor="numbers" className="cursor-pointer">Numbers</label>
              <input id="numbers" type="checkbox" checked={numeric} onChange={addNumbers} className="cursor-pointer" />
            </div>

            <div className="flex gap-2 items-center">
              <label htmlFor="symbols" className="cursor-pointer">Symbols</label>
              <input id="symbols" type="checkbox" checked={specialChars} onChange={addSymbols} className="cursor-pointer" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;