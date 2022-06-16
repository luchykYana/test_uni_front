import {useForm} from 'react-hook-form';
import {joiResolver} from '@hookform/resolvers/joi';
import {useEffect, useState} from 'react';

import {siteValidator} from '../../validators/site.validator';
import {newsService} from '../../services';

import css from './UpdateHeader.module.css';

const UpdateHeader = () => {
    const [info, setInfo] = useState();

    const {handleSubmit, register} = useForm({resolver: joiResolver(siteValidator), mode: 'onTouched'});

    useEffect(() => {
        newsService.getSite().then(value => setInfo(value));
    })

    const submit = (object) => {
        const site = {...object, time: `${new Date().getDate()}.${new Date().getMonth()}.${new Date().getFullYear()}`}

        newsService.updateSite(info?.id, site).then(value => console.log(value));
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submit)} className={css.updateForm}>
                <div>
                    <label>Ліквідовано особового складу: </label>
                    <input type="number" defaultValue={info?.statistic} {...register('statistic')}/>
                </div>
                <div>
                    <label>Різниця з попереднім днем: </label>
                    <input type="number" defaultValue={info?.plus} {...register('plus')}/>
                </div>
                <div>
                    <label>День війни: </label>
                    <input type="number" defaultValue={info?.dayOfWar} {...register('dayOfWar')}/>
                </div>
                <button type={'submit'}>Оновити</button>
            </form>
        </div>
    );
};

export {UpdateHeader};
