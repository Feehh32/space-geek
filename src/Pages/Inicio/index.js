import './Inicio.module.css';
import Banner from 'components/Banner';
import ProdutosSecao from 'components/ProdutosSecao';
import styles from './Inicio.module.css';
import { useRef } from 'react';

function Inicio() {
	const ref = useRef(null);

	const handleClick = () => {
		ref.current?.scrollIntoView({behavior: 'smooth'})
	}

	return (
		<main>
			<Banner handleClick={handleClick}/>
			<section className={styles.sessoes}>
				<ProdutosSecao titulo="Star wars" nomeSessao="starWars" url="/todos_os_produtos" />
				<ProdutosSecao ref={ref} titulo="Consoles" nomeSessao="consoles" url="/todos_os_produtos" />
				<ProdutosSecao titulo="Diversos" nomeSessao="diversos" url="/todos_os_produtos" />
			</section>
		</main>
	)
}

export default Inicio;