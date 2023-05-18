import InputGeral from 'components/InputGeral';
import styles from './Login.module.css';

import React, { useState } from 'react'
import BotaoSubmit from 'components/BotaoSubmit';

const screenSize = window.innerWidth;

function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Lógica de cadastro

        setEmail('');
        setSenha('');
    }


    return (
        <main className={styles.container}>
            <form onSubmit={handleSubmit} >
                <fieldset>
                    <legend>Iniciar Sessão</legend>
                    <div className={styles.containerInput}>
                        <InputGeral
                            heigth={screenSize > 1080 ? 60 : 41}
                            placeholder="Escreva seu email"
                            labelContent="Email"
                            id='email'
                            htmlFor='email'
                            type='email'
                            value={email}
                            onChange={event => event.target.value}
                        />
                    </div>
                    <div className={styles.containerInput}>
                        <InputGeral
                            heigth={screenSize > 1080 ? 60 : 41}
                            placeholder="Escreva sua senha"
                            labelContent="Senha"
                            id='senha'
                            htmlFor='senha'
                            type='password'
                            value={senha}
                            onChange={event => event.target.value}
                        />
                    </div>
                    <BotaoSubmit content="Entrar" style={screenSize > 1080 ? { width: "100%" } : { width: "none" }} />
                </fieldset>
            </form>
        </main>
    )
}

export default Login