import ReactDOM from "react-dom";
import { Main } from "./main";
import "./css/index.css";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<Main />, document.getElementById("root"));
registerServiceWorker();
