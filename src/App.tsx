import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomeView } from './routes/home.tsx';
import { DiaryView } from './routes/diary.tsx';
import { ProtectedRoutes } from './components/protected-routes.tsx';

const DIARY_ROUTE = '/diary'
const DIARY_SEARCH_ROUTE = '/diary/search'

// const router = createBrowserRouter(
//     createRoutesFromElements(<Route path="/" element={ <HomeView/> }/>),
// )
// <Link to={'home'}>Home</Link>


export const App = () =>
    (
        <div>
            {/*<RouterProvider router={ router }/>*/ }

            <BrowserRouter>
                <Routes>
                    <Route path="/" element={ <HomeView/> }/>
                    <Route path="/home" element={ <HomeView/> }>
                        <Route path="" element={ <HomeView/> }></Route>
                    </Route>

                    <Route path={ DIARY_ROUTE } element={ <DiaryView/> }>
                        <Route path={ DIARY_SEARCH_ROUTE } element={ <div>DiarySearch</div> }></Route>
                        <Route path="/diary/search2" element={ <div>DiarySearch2</div> }></Route>
                    </Route>

                    {/*this is protected*/ }
                    <Route element={ <ProtectedRoutes/> }>
                        <Route path={ 'profile' } element={ <div>Profile</div> }></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )