// Import các hooks và components cần thiết từ React
import { useState } from 'react'
import './App.css'
// Import các components từ react-router-dom để xử lý routing
import {BrowserRouter, Routes, Route} from 'react-router-dom'
// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'

// Import các components tự tạo
import Users from './Users'
import CreateUser from './CreateUser'
import UpdateUser from './UpdateUser'

function App() {
  // Khai báo state count với giá trị khởi tạo là 0
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* BrowserRouter bao bọc toàn bộ ứng dụng để enable routing */}
      <BrowserRouter>
        {/* Routes chứa các Route con */}
        <Routes>
          {/* Route cho trang chủ, hiển thị component Users */}
          <Route path='/' element={<Users />}></Route>
          {/* Route cho trang tạo user mới, hiển thị component CreateUser */}
          <Route path='/create' element={<CreateUser />}></Route>
          {/* Route cho trang cập nhật user, hiển thị component UpdateUser */}
          <Route path='/update/:id' element={<UpdateUser />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

// Export component App để có thể import ở các file khác
export default App