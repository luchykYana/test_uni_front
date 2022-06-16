import css from './Header.module.css';

const Header = ({info}) => {

    return (
        <div className={`${css.bcSea}`}>
            <div className={`${css.dFlex} ${css.cText} ${css.h80}`}>{info?.time}&emsp;Генеральний штаб ЗС України
                інформує:
                <div
                    className={`${css.smallSize} ${css.cB}`}>&emsp;+{info?.plus} &nbsp;
                </div>

                {info?.statistic}&ensp;ліквідовано особового складу&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                <div className={`${css.cB} ${css.border}`}>{info?.dayOfWar} день війни</div>
            </div>
        </div>
    );
};

export {Header};
