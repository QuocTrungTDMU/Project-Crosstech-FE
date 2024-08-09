
import './App.css'
import CardHomePage from './components/Card/CardHomePage'
import CatFoot from './components/CatFoot'
import NavBar from './components/NavBar'

function App() {
 

  return (
    <div className='bg-[linear-gradient(to_bottom,_#EADBD7,_#fff)] text-[#8C8C8C]'>
        <NavBar/>
        <CatFoot/>
        <CardHomePage/>
    </div>
  )
}

export default App
