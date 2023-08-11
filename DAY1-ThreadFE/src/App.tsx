import { BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './pages/Home'
import BlogDetail from "./components/BlogDetail"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}>
            <Route path='/:id' element={<BlogDetail />} />
            </Route>
          </Routes>
      </BrowserRouter>
    </>
  )}
  export default App