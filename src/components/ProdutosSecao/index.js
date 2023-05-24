import styles from './ProdutosSecao.module.css';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import CardProduto from 'components/CardProduto';
import { forwardRef, useContext, useEffect, useState } from 'react';
import { ProdutosContext } from 'contextos/Produtos';

function ProdutosSecao({ titulo, url, nomeSessao }, ref) {
    const [sizeScreen, setSizeScreen] = useState(window.innerWidth);
    const {produtos} = useContext(ProdutosContext);

    useEffect(() => {

        const handleResize = () => {
            setSizeScreen(window.innerWidth);
        }

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);

    }, []);

    return (
        <section className={styles.container} ref={ref}>
            <div className={styles.containerCabecalho}>
                <h3>{titulo}</h3>
                <Link to={url} className={styles.containerLink}>
                    Ver tudo
                    <FaArrowRight className={styles.containerIcon} />
                </Link>
            </div>
            <div className={styles.containerProduto}>
                {sizeScreen > 1080 ?
                    produtos.filter((produto) => produto.secao === nomeSessao)
                        .map((produto) => (
                            <CardProduto
                                imagem={produto.imagem}
                                nomeProduto={produto.nome}
                                key={produto.id}
                                preco={produto.preco.toFixed(2).replace(/\./g, ',')}
                                url={`/${produto.id}`}
                            />
                        ))
                    :
                    produtos.filter((produto) => produto.secao === nomeSessao)
                        .slice(2)
                        .map((produto) => (
                            <CardProduto
                                imagem={produto.imagem}
                                nomeProduto={produto.nome}
                                key={produto.id}
                                preco={produto.preco.toFixed(2).replace(/\./g, ',')}
                                url={`/${produto.id}`}
                            />
                        ))
                }
            </div>
        </section>
    )
};

export default forwardRef(ProdutosSecao);