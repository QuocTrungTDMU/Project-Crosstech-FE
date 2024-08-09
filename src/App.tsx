import { useState } from "react";
import "./App.css";
import "./App.less";
import { Button } from "antd";
import clsx from "clsx";
import logo from './assets/logo.svg'
import { LogoIcon } from "./common/icons";
import { AppButton } from "./components/buttons/AppButton";


function App() {
  const [isActive, setActive] = useState<boolean>(false);
  const [color, setColor] = useState<string>("black")
  return (
    <div className="ABC">
      <AppButton loading={isActive} onClick={() => console.log("huhu")}>Quoc Trung</AppButton>
      <Button
        onClick={() => {
          setActive(!isActive);
          setColor(isActive ? "blue" : "red")
        }}
      >
        Panther
      </Button>
      <h1>Vite + React</h1>
      <div className="test">
        <div
          className={clsx(
            isActive ? "bg-slate-400": "bg-blue-300"
          )}
        >
          nội dung
        </div>
        <p className="child">
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        <LogoIcon color={color}/>
        <img src={logo}/>
      </div>
    </div>
  );
}

export default App;
