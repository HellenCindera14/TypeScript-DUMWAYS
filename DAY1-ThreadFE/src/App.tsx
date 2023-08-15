import { BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './pages/Home'
import BlogDetail from "./components/BlogDetail"
import Login from "./layouts/Login"
import Register from "./layouts/Register"


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/FormLogin' element={<Login />}/>
          <Route path='/FormRegister' element={<Register/>}/>
          <Route path='/' element={<Home />}>
            <Route path='/:id' element={<BlogDetail />} />
            </Route>
          </Routes>
      </BrowserRouter>
    </>
  )}
  export default App