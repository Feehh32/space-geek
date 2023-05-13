import BotaoSubmit from 'components/BotaoSubmit';
import styles from './FaleConosRodape.module.css';

import { useState } from 'react';

function FaleConosRodape() {
    const [mensagem, setMensagem] = useState('');
    const [nome, setNome] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        setMensagem('');
    }
    return (
        <form onSubmit={handleSubmit}>
            <fieldset className={styles.formContainer}>
                <legend>Fale Conosco</legend>
                <div className={styles.inputContainer}>
                    <input
                        type="text"
                        className={styles.formName}
                        id="name"
                        value={nome}
                        onChange={(event) => setNome(event.target.value)}
                        placeholder="Digite seu nome"
                        required="required"
                        />
                    <label htmlFor="name" className={styles.labelName} >Nome</label>
                </div>
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