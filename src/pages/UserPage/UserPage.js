import {useEffect, useState} from 'react';

import {LeftSide, News} from '../../components';
import {newsService} from '../../services';

import css from './UserPage.module.css';

const UserPage = () => {
    const [news, setNews] = useState([]);
    const [trigger, setTrigger] = useState('');
    const [trigger2, setTrigger2] = useState('');

    useEffect(() => {
        if (trigger !== '') {
            newsService.getAll().then(value => {
                const info = value.filter(item => item.title.includes(trigger) === true);

                if (info) {
                    setNews(info);
                }
            });
        }

        if (trigger2 !== '') {
            newsService.getAll().then(value => {
                const info = value.filter(item => item.country.includes(trigger2) === true);

                if (info) {
                    setNews(info);
                }
            });
        }
        if(trigger === '' && trigger2 === ''){
            newsService.getAll().then(value => setNews(value));
        }
    }, [trigger, trigger2]);

    return (
        <div className={css.dFlex}>
            <LeftSide setNews={setTrigger} setNews2={setTrigger2}/>
            <News news={news}/>
        </div>
    );
}

export {UserPage};
