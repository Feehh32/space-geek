import BotaoSubmit from 'components/BotaoSubmit';
import styles from './FaleConosRodape.module.css';

import { useState } from 'react';
import InputGeral from 'components/InputGeral';
import Textarea from 'components/Textarea';

function FaleConosRodape() {
    const [mensagem, setMensagem] = useState('');
    const [nome, setNome] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        setMensagem('');
        setNome('');
    }
    return (
        <form onSubmit={handleSubmit}>
            <fieldset className={styles.formContainer}>
                <legend>Fale Conosco</legend>
                <div className={styles.inputContainer}>
                    <InputGeral
                        placeholder="Escreva seu nome"
                        id="nome"
                        htmlFor="nome"
                        labelContent="Nome"
                        type="text"
                        value={nome}
                        onChange={event => event.target.value}
                    />
                </div>
                <div className={styles.textContainer}>
                    <Textarea
                        placeholder='Escreva sua mensagem'
                        onChange={event => event.target.value}
                        id='mensagem'
                        value={mensagem}
                    />
                </div>
                <BotaoSubmit type='submit' content='Enviar mensagem' />
            </fieldset>
        </form>
    )
}

export default FaleConosRodape;