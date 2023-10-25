import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import ResultDisplay from "./components/ResultDisplay";
import GameDisplay from "./components/GameDisplay";
import ErrorPage from "./components/ErrorPage";
import Home from "./components/Home";
import MyForm from "./components/MyForm";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Home />} />
      <Route path="GamePage" element={<GameDisplay />} />
      <Route path="ResultPage" element={<ResultDisplay />} />
      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
