import "./App.css";

import PopOver from "./components/PopOver";

function App() {
  const BUTTON_CLASS = 'block py-4 duration-300 bg-whitesmoke text-pastel-black hover:opacity-60 hover:bg-[#969696]'

  return (
    <div className="w-full h-screen flex flex-row justify-center items-center bg-pastel-black text-whitesmoke">
      <PopOver name="oh" buttonClass="bg-living-coral text-whitesmoke">
        <div className="text-center bg-whitesmoke rounded">
          <a className={`${BUTTON_CLASS} rounded-t`} href="#">hi</a>
          <a className={`${BUTTON_CLASS}`} href="#">hello</a>
          <a className={`${BUTTON_CLASS} rounded-b`} href="#">bye!</a>
        </div>
      </PopOver>
    </div>
  );
}

export default App;
