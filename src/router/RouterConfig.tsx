import { Route, Routes } from 'react-router-dom'
import { Home } from '../Pages/Home'
import { Search } from '../Pages/Search'
import { Detail } from '../Pages/Detail'
import { ListMovies } from '../Pages/ListMovies'
import { Watch } from '../Pages/Watch'

export const RouterConfig = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Search/:keyword' element={<Search />} />
      <Route path='/Category/:slug' element={<ListMovies />} />
      <Route path='/Watch/:slug' element={<Watch />} />
      <Route path='/Type/:slug' element={<ListMovies />} />
      <Route path='/Detail/:slug' element={<Detail />} />
    </Routes>
  )
}
