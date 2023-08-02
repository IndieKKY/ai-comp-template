import "./App.css";
import Comp, { Example } from "./Comp";
import DarkMode from "./DarkMode";

export default function App() {
  return (
    <div className="p-3">
      <DarkMode />
      <div className="mt-1">
        <Comp data={Example} />
      </div>
    </div>
  );
}
