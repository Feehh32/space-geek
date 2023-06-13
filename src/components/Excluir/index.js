import { useContext } from 'react';
import styles from './Excluir.module.css';

import { TbTrashXFilled } from 'react-icons/tb';
import { ProdutosContext } from 'contextos/Produtos';

function Excluir({productId}) {
    const { deletarProdutos } = useContext(ProdutosContext);

    const handleDelete = () => {
        deletarProdutos(productId)
    }
    return (
        <i><TbTrashXFilled className={styles.iconTrash} onClick={handleDelete} aria-label='botão deletar' /></i>
    )
}

export default Excluir;