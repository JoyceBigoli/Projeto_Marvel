import { Routes, Route } from 'react-router-dom'
import { Home, NotFound, Result } from '../pages'

export function Approutes() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/pesquisa' element={<NotFound/>} />
        <Route path='*' element={<Result/>} />   
    </Routes>
  )
}
