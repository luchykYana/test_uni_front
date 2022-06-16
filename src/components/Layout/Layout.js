import {Outlet} from 'react-router-dom';
import {useEffect, useState} from 'react';

import {Header} from '../Header/Header';
import {newsService} from '../../services';

const Layout = () => {
    const [siteInfo, setSiteInfo] = useState();

    useEffect(() => {
        newsService.getSite().then(value => setSiteInfo(value));
    })

    return (
        <div>
            <Header info={siteInfo}/>
            <Outlet/>
        </div>
    );
};

export {Layout};
