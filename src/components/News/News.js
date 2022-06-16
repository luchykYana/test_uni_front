import {OneNews} from '../OneNews/OneNews';

import css from './News.module.css';

const News = ({news}) => {
    return (
        <div className={css.dFlex}>
            {news.map(one => <OneNews key={one.id} one={one}/>)}
        </div>
    );
};

export {News};
