import './Inicio.module.css';
import Banner from 'components/Banner';
import ProdutosSecao from 'components/ProdutosSecao';
import styles from './Inicio.module.css';

function Inicio() {
	
	return (
		<main>
			<Banner />
			<section className={styles.sessoes}>
				<ProdutosSecao titulo="Star wars" nomeSessao="starWars"/>
				<ProdutosSecao titulo="Consoles" nomeSessao="consoles"/>
				<ProdutosSecao titulo="Diversos" nomeSessao="diversos"/>
			</section>
		</main>
	)
}

export default Inicio;