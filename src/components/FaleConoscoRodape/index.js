import BotaoSubmit from 'components/BotaoSubmit';
import styles from './FaleConosRodape.module.css';

import { useState } from 'react';
import InputGeral from 'components/InputGeral';

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
                <InputGeral
                    heigth={56}
                    placeholder="Escreva seu nome"
                    id="nome"
                    htmlFor="nome"
                    labelContent="Nome"
                    type="text"
                    value={nome}
                    onChange={event => event.target.value}
                />
                <div className={styles.textareaContainer}>
                    <textarea
                        id="mensagem"
                        value={mensagem}
                        className={styles.formMessage}
                        placeholder="Escreva sua mensagem"
                        onChange={(event) => setMensagem(event.target.value)}

                    />
                </div>
                <BotaoSubmit type='submit' content='Enviar mensagem' />
            </fieldset>
        </form>
    )
}

export default FaleConosRodape;