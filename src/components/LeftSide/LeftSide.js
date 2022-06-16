import css from './LeftSide.module.css';

const LeftSide = ({setNews, setNews2}) => {
    const change = (e) => {
        console.log(e.target.value);
        setNews(e.target.value)
    }

    const change2 = (e) => {
        setNews2(e.target.value)
    }

    return (
        <div className={css.size}>
            <form onChange={change}>
                <input type="text" name={'search'} className={css.sInput} placeholder={'Пошук по заголовку...'}/>
            </form>

            <form onChange={change2}>
                <input list="country" id="country-choice" className={css.sInput} placeholder={'Пошук за країною...'}/>

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
            </form>
        </div>
    );
};

export {LeftSide};
