import NavBar from './components/Navbar'
import SeparatorOne from './components/SeparatorOne'

//the NavBar which is singly nested in the App.jsx can consume the context. Meanwhile so can the deeply nested Form.jsx component which is consumed in the SeparatorTwo Component.
const App = () => {
  return (
    <>
      <NavBar />
      <div className="container">
        <SeparatorOne />
      </div>
    </>
  )
}

export default App
