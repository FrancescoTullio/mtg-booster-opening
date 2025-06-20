import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefaultLayout from "./layout/DefaultLayout"
import Homepage from "./pages/homepage"
import AllSetOpening from "./pages/AllSetOpening"
import NotFound from "./pages/NotFound"

function App() {

  return (
    <>
      <BrowserRouter>


        <Routes>


          <Route element={<DefaultLayout />}>
            <Route path="/" element={<Homepage />} />
            <Route path="/booster" element={<AllSetOpening />} />
            <Route path="/booster/:slug" element={<div>booster details</div>} />
            <Route path="*" element={<NotFound />} />

          </Route>
        </Routes>


      </BrowserRouter >
    </>
  )
}

export default App
