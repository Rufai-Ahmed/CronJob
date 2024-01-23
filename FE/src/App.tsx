import { useState } from "react";
import { AiOutlineMenu, AiOutlineDelete } from "react-icons/ai";
import { RouterProvider, useLocation } from "react-router-dom";
import { Router } from "./router/Router";

function App() {
  return (
    <>
      <RouterProvider router={Router} />
    </>
  );
}

export default App;
