import reactDom from "react-dom";

// *Import components
import App from "./app/App";

// *Import Global styles
import "./index.css";

import {BrowserRouter} from "react-router-dom";

reactDom.render(<BrowserRouter><App/></BrowserRouter>,document.getElementById("root"));