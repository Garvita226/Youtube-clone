import Body from "./components/Body";
import Header from "./components/Header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";

function App() {

  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <Body/>,
      children: [
        {
          path: '/',
          element: <MainContainer/>
        },
        {
          path: 'watch',
          element: <WatchPage/>
        }
      ]
    }
  ])

  return (
      <div className="App box-border">
        <Header />
        <RouterProvider router={appRouter} />
      </div>
  );
}

export default App;
