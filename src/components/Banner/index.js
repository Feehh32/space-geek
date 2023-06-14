import styles from './Banner.module.css';
import bannerImagem from './new_banner.png';
import BotaoSubmit from 'components/BotaoSubmit';

function Banner({handleClick}) {
    return (
        <div className={styles.banner}>
            <img src={bannerImagem} alt="ta aqui " className={styles.bannerImagem} />
            <div className={styles.bannerInfo}>
                <h2>Dezembro Promocional</h2>
                <p>Produtos selecionados com 33% de desconto</p>
                <BotaoSubmit type='text' content='Ver Consoles' onClick={handleClick}/>
            </div>
        </div>
    )
}

export default Banner;