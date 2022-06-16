import {useNavigate} from 'react-router-dom';
import {useState} from 'react';

import css from './CheckForm.module.css';
import {newsService} from '../../services';

const CheckForm = ({changeTrigger}) => {
    const [admin, setAdmin] = useState('');

    const navigate = useNavigate();

    const submit = (e) => {
        const radio = e.target.radio.value;
        const name = e.target.name.value;
        const password = e.target.password.value;

        if (radio === 'admin') {
            newsService.getAdmin().then(value => {
                console.log(value);
                if (value[0].name === name && value[0].password === password) {
                    changeTrigger();

                    navigate(`news/admin`);
                } else {
                    setAdmin(1);
                }
            })
        } else {
            changeTrigger();

            navigate(`news/user`);
        }
        e.preventDefault();
    }

    return (
        <form onSubmit={submit} className={css.checkForm}>
            <div>
                <label>Ім'я: </label>
                <input type="text" name={'name'}/>
            </div>

            <div>
                <label>Пароль: </label>
                <input type="password" name={'password'}/>
            </div>

            <div className={css.div}>
                <label>user <input defaultChecked type="radio" value={'user'} name={'radio'}/></label>
                <label>admin <input type="radio" value={'admin'} name={'radio'}/></label>
            </div>

            <button>Enter</button>
            {admin !== '' && <div>Wrong name or password. Your must be admin</div>}
        </form>
    );
};

export {CheckForm};
