import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import GameDisplay from "./components/GameDisplay";
import ErrorPage from "./components/ErrorPage";
import Home from "./components/Home";
import MyForm from "./components/MyForm";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Home />} />
      <Route path="GamePage" element={<GameDisplay />} />
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
