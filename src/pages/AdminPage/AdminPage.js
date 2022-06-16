import {useNavigate} from 'react-router-dom';

import {UserPage} from '../UserPage/UserPage';

import css from './AdminPage.module.css';

const AdminPage = () => {
    const navigate = useNavigate();

    const addNews = () => navigate('../createNews', {replace: true});

    return (
        <div>
            <button className={css.createButton} onClick={addNews}>Додати статтю</button>
            <UserPage/>
        </div>
    );
};

export {AdminPage};
