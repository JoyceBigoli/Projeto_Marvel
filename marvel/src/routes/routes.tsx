import { Routes, Route } from 'react-router-dom'
import { Layout } from '../global/components'
import { Home, NotFound, Result } from '../pages'

export function Approutes() {
  return (
    <Routes>
      <Route path='/' element= {<Layout/>}>
         <Route path='/' element={<Home/>}/>
         <Route path='*' element={<NotFound/>} />
         <Route path='/pequisa' element={<Result/>} /> 
      </Route>  
    </Routes>
  )
}
