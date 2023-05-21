import InputGeral from 'components/InputGeral';
import styles from './AdicionarProduto.module.css';

import React, { useState } from 'react'
import Textarea from 'components/Textarea';
import BotaoSubmit from 'components/BotaoSubmit';

function AdicionarProduto() {
    const [produto, setProduto] = useState({});

    return (
        <main className={styles.container}>
            <form >
                <fieldset>
                    <legend className={styles.titulo}>Adicionar novo produto</legend>
                    <div className={styles.inputContainer}>
                        <InputGeral
                            heigth={56}
                            id='imagem'
                            htmlFor='imagem'
                            placeholder='digite a url da imagem'
                            type='text'
                            labelContent='Url da imagem'
                            onChange={event => event.target.value}
                        />
                    </div>
                    <div className={styles.inputContainer}>
                        <InputGeral
                            heigth={56}
                            id='categoria'
                            htmlFor='categoria'
                            placeholder='Digite o nome da categoria'
                            type='text'
                            labelContent='Categoria'
                            onChange={event => event.target.value}
                        />
                    </div>
                    <div className={styles.inputContainer}>

                        <InputGeral
                            heigth={56}
                            id='Nome do produto'
                            htmlFor='Nome do produto'
                            placeholder='Digite o nome do produto'
                            type='text'
                            labelContent='Nome do produto'
                            onChange={event => event.target.value}
                        />
                    </div>
                    <div className={styles.inputContainer}>

                        <InputGeral
                            heigth={56}
                            id='Preço do produto'
                            htmlFor='Preço do produto'
                            placeholder='Digite o preço do produto'
                            type='number'
                            labelContent='Preço do produto'
                            onChange={event => event.target.value}
                        />
                    </div>
                    <div className={styles.inputContainer}>
                        <Textarea
                            id='descricao'
                            onChange={event => event.target.value}
                            placeholder='Descrição do produto'
                        />
                    </div>
                    <BotaoSubmit content='Adicionar produto' style={{width:'100%'}} />
                </fieldset>
            </form>
        </main>
    )
}

export default AdicionarProduto