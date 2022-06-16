import {useNavigate} from 'react-router-dom';

import css from './OneNews.module.css';
import {useLocation} from 'react-router';

const OneNews = ({one}) => {
    const navigate = useNavigate();
    const {pathname} = useLocation();

    const details = () => {
        const admin = pathname.includes('admin');

        navigate(`../newsDetails`, {replace: true, state: {one, admin}});
    }

    return (
        <div className={css.oneNews}>
            <img src={one?.mainPhoto} alt={one?.title}/>
            <div className={css.dFlex}>
                <div>{one?.time}</div>
                <div>{one?.country}</div>
            </div>
            <button onClick={details} className={css.newsButton}>"{one?.title}"</button>
            <div>{one?.text.slice(0, 100)}...</div>
        </div>
    );
};

export {OneNews};
