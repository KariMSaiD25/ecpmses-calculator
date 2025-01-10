// @ts-nocheck
import Home from "./pages/home/Home";
import Root from "./pages/Root";
import {
  BrowserRouter,
  //createBrowserRouter,
//  createRoutesFromElements,
  Route,
  //RouterProvider,
  Routes,
} from "react-router-dom";
import Create from "./pages/create/Create";


import NotFound from "pages/NotFound";
// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Root />}>
//       <Route index element={<
// // @ts-ignore
//       Home />} />
//       <Route path="create" element={<
// // @ts-ignore
//       Create />} />
//       <Route path="*"  element={<NotFound/>}></Route>
//     </Route>
//   )
// );

//<RouterProvider router={router} /> 
function App() {
  return(
  <> 
  <BrowserRouter>
<Routes>
<Route path="/" element={<Root />}>
      <Route index element={<
// @ts-ignore
      Home />} />
      <Route path="create" element={<
// @ts-ignore
      Create />} />
      <Route path="*"  element={<NotFound/>}></Route>
    </Route>

</Routes>

 </BrowserRouter >
    </> )
}

export default App;



