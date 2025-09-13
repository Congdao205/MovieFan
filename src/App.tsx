import { BrowserRouter } from "react-router-dom";
import './app.css';
import { RouterConfig } from "./router/RouterConfig";
import DefaultLayout from "./Components/Layouts/DefaultLayout";
function App() {

  return (
    <>
      <BrowserRouter>
        <DefaultLayout>
          <RouterConfig></RouterConfig>
        </DefaultLayout>
      </BrowserRouter>
    </>
  )
}

export default App
