import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'
import IconButton from './components/iconButton'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='grid grid-cols-4 gap-4'>
     {
      Array(10).fill(0).map((_, index) => (
        <Card key={index} variant="bordered" hoverable={false}  >
          Card {index + 1}
          <IconButton size={"sm"} color={"primary"} > Hello </IconButton>
        </Card>
      ))
     }
     </div>
    </>
  )
}

export default App
