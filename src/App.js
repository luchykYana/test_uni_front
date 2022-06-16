import {Route, Routes} from 'react-router-dom'

import {AdminPage, CreatePage, HomePage, NewsDetailsPage, NotFoundPage, UserPage} from './pages';
import {Layout} from './components';

export default function App() {
    return (
        <Routes>
            <Route path={'/'} element={<HomePage/>}>
                <Route path={'news'} element={<Layout/>}>
                    <Route path={'user'} element={<UserPage/>}/>
                    <Route path={'admin'} element={<AdminPage/>}/>
                    <Route path={'createNews'} element={<CreatePage/>}/>
                    <Route path={'newsDetails'} element={<NewsDetailsPage/>}/>
                </Route>
                <Route path={'*'} element={<NotFoundPage/>}/>
            </Route>
        </Routes>
    );
}
