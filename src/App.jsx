import { Routes, Route, Navigate } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Layout from './components/Layout'
import UserList from './pages/UserList'
import AddUser from './pages/AddUser'
import EditUser from './pages/EditUser'
import UserDetails from './pages/UserDetails'

function App() {
  return (
    <>
      <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/users" replace />} />
          <Route path="users" element={<UserList />} />
          <Route path="users/add" element={<AddUser />} />
          <Route path="users/edit/:id" element={<EditUser />} />
          <Route path="users/:id" element={<UserDetails />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
