import { useState, useEffect, useMemo } from "react"
import axios from "axios"
import UseBooster from "./hook/UseBooster"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefaultLayout from "./layout/DefaultLayout"

function App() {

  const filterSet = UseBooster()




  return (
    <>
      <BrowserRouter>


        <Routes>


          <Route element={<DefaultLayout />}>
            <Route path="/" element={<div>home</div>} />
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
