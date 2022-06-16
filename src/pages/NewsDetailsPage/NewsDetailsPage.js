import {useLocation, useNavigate} from 'react-router-dom';
import css from './NewsDetailsPage.module.css'

const NewsDetailsPage = () => {
    const {state: {one, admin}} = useLocation();
    const navigate = useNavigate();

    const back = () => (admin) ? navigate('../admin') : navigate('../user');

    return (
        <div>
            <button onClick={back} className={css.back}>←</button>

            <div className={css.news}>
                <div className={`${css.fSize24} ${css.mb10}`}>{one?.title}</div>
                <div className={`${css.dFlex} ${css.fSize15} ${css.mb10} ${css.cB}`}>
                    <div>{one?.time}</div>
                    <div>{one?.country}</div>
                </div>
                <div className={`${css.fSize18} ${css.mb10}`}>{one.text}</div>
                <div className={`${css.dFlex}`}><img src={one?.mainPhoto} alt={one?.title}/> {one?.photos.map(photo => <img src={photo}
                                                                                                 alt={one?.title}
                                                                                                 width='200px'
                                                                                                 key={photo}/>)}</div>
            </div>
        </div>
    );
};

export {NewsDetailsPage};
