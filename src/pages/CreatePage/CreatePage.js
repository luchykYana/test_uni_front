import {CreateForm, UpdateHeader} from '../../components';

import css from './CreatePage.module.css';
import {useNavigate} from 'react-router-dom';

const CreatePage = () => {
    const navigate = useNavigate();

    const back = () => navigate('../admin');

    return (
        <div>
            <button onClick={back} className={css.back}>←</button>
            <div className={css.createPage}>
                <CreateForm/>
                <UpdateHeader/>
            </div>
        </div>
    );
};

export {CreatePage};
