import {useForm} from 'react-hook-form';
import {joiResolver} from '@hookform/resolvers/joi';

import {newsValidator} from '../../validators/news.validator';
import {newsService} from '../../services';

import css from './CreateForm.module.css';

const CreateForm = () => {

    const {handleSubmit, register, formState: {errors}, reset} = useForm({
        resolver: joiResolver(newsValidator),
        mode: 'onTouched'
    })

    const submit = (object) => {
        const time = `${new Date().getDate()}.${new Date().getMonth() + 1}.${new Date().getFullYear()}  ${new Date().getHours()}:${new Date().getMinutes()}`;

        const photos = object.photos
            .split(',')
            .map(photo => photo.trim())
            .filter(photo => photo !== '');

        newsService.createNews({
            title: object.title,
            country: object.country,
            mainPhoto: object.mainPhoto,
            text: object.text,
            photos,
            time
        }).then(value => console.log(value));

        reset();
    }

    return (
        <form onSubmit={handleSubmit(submit)} className={css.form}>
            <div className={css.dBlock}>
                <label>Заголовок: </label><input type="text" {...register('title')}/>
                {errors.title && <div className={css.fSize14}>{errors.title.message}</div>}
            </div>

            <div>
                <label>Країна: </label><input list="country" id="country-choice" {...register('country')}/>

                <datalist id="country">
                    <option value="Україна"/>
                    <option value="Сполучені Штати Америки"/>
                    <option value="Британія"/>
                    <option value="ЄС"/>
                    <option value="Канада"/>
                    <option value="Туреччина"/>
                    <option value="Франція"/>
                    <option value="Німеччина"/>
                    <option value="Японія"/>
                    <option value="Польща"/>
                </datalist>

            </div>


            <div>
                <label>Текст: </label><input type="text" {...register('text')}/>
                {errors.text && <div className={css.fSize14}>{errors.text.message}</div>}
            </div>

            <div>
                <label>Головне фото: </label><input type="text" {...register('mainPhoto')}/>
            </div>

            <div>
                <label>Iнші фото: </label><input type="text" {...register('photos')} placeholder={'image1, image2, ...'}/>
            </div>

            <button type='submit'>Додати новину</button>
        </form>
    );
};

export
{
    CreateForm
}
    ;
