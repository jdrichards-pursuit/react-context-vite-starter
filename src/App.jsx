import NavBar from './components/Navbar'
import SeparatorOne from './components/SeparatorOne'

//the NavBar which is singly nested in the App.js can consume the context. Meanwhile so can the deeply next Form.js component
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
