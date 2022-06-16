import {useState} from 'react';
import {Outlet} from 'react-router-dom';

import {CheckForm} from '../../components';

import css from './HomePage.module.css';

const HomePage = () => {
    const [trigger, setTrigger] = useState(false);

    const changeTrigger = () => {
        console.log('changeTrigger');
        setTrigger(true);
    }

    return (
        <div className={css.bg}>
            {!trigger && <CheckForm changeTrigger={changeTrigger}/>}
            {trigger && <Outlet/>}
        </div>
    );
};

export {HomePage};
