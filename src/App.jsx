import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefaultLayout from "./layout/DefaultLayout"
import Homepage from "./pages/homepage"

function App() {

  return (
    <>
      <BrowserRouter>


        <Routes>


          <Route element={<DefaultLayout />}>
            <Route path="/" element={<Homepage />} />
            <Route path="/booster" element={<div>booster</div>} />
            <Route path="/booster/:slug" element={<div>booster details</div>} />
            <Route path="*" element={<div>page not found</div>} />

          </Route>
        </Routes>


      </BrowserRouter >
    </>
  )
}

export default App
