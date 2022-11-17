import React from 'react'
import { Route, NavLink, Routes, BrowserRouter } from 'react-router-dom'

import CategoryPage from './categoryPage'
import FilterPage from './filterPage'
import FavouritesPage from './favouritesPage'
import CategoryDetailPage from './categoryDetailPage'
import MealDetailPage from './mealDetailPage'

const Nav = () => {
    
    return (
        <BrowserRouter  >
            <NavLink to={'/'} exact >
                Category Page
            </NavLink>

            <NavLink to='/favouritesPage' >
                favourites
            </NavLink>
            <NavLink to='/filterPage' >
                filters
            </NavLink>
            <Routes>
                <Route path='/' element={<CategoryPage />} />                    

                <Route path='/favouritesPage' element={<FavouritesPage />} />
                                    
                <Route path='/filterPage' element={<FilterPage />} />
                                    
                <Route path={'/categoryDetailPage/:categoryIds'} element={<CategoryDetailPage />} />
                                
                <Route path='/mealDetailPage/:categoryIds/:mealIds' element={<MealDetailPage />} />
                                    
            </Routes>
        </BrowserRouter>
    )
}

export default Nav