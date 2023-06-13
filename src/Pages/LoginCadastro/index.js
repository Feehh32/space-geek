import styles from './LoginCadastro.module.css';
import React from 'react'
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRef } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

import InputGeral from 'components/InputGeral';
import BotaoSubmit from 'components/BotaoSubmit';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const screenSize = window.innerWidth;

const schema = yup.object({
    email: yup.string()
        .required('O campo de email não pode estar vazio!')
        .email('Insira um email válido!')
        .test('email-unico', 'Este email já está sendo usado.', async (value) => {
            try {
                const response = await axios.get(`http://localhost:8000/users?email=${value}`);
                return response.data.length === 0;
            } catch (error) {
                console.error('Erro na verificação de email:', error);
                return false;
            }
        }),
    senha: yup.string()
        .required('O Campo de senha não pode estar vazio!')
        .min(6, 'A senha deve ter pelo menos 6 caracteres.'),
    confirmarSenha: yup.string()
        .required('O campo de confirmação de senha não pode estar vazio!')
        .oneOf([yup.ref('senha'), null], 'As senhas devem ser iguais.'),
})

function LoginCadastro() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema)
    });

    const refEmail = useRef(null);
    const refSenha = useRef(null);
    const refConfirmarSenha = useRef(null);

    const [userCadastrado, setUserCadastrado] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (userCadastrado) {
            const timer = setTimeout(() => {
                navigate('/login');
            }, 3000)

            return () => {
                clearTimeout(timer);
            }
        }
    }, [userCadastrado, navigate]);

    const onSubmit = async (data) => {
        if (data !== null) {
            
            const response = await axios.post('http://localhost:8000/users', {
                email: data.email,
                senha: data.senha,
                id: uuidv4()
            })
                .then(() => {
                    setUserCadastrado(true);
                    reset();
                })

                .catch(error => console.error('erro na requisição:', error));
        }
    }

    return (
        <main className={styles.container}>
            {userCadastrado && (
                <div className={styles.containerMessage}>
                    <p className={styles.msgConfirmed}>Cadastro realizado com sucesso!</p>
                </div>
            )}
            <form onSubmit={handleSubmit(onSubmit)} >
                <fieldset>
                    <legend>Cadastre-se</legend>
                    <div className={styles.containerInput}>
                        <InputGeral
                            heigth={screenSize > 1080 ? 60 : 41}
                            placeholder="Escreva um email válido"
                            labelContent="Email"
                            id='email'
                            htmlFor='email'
                            type='email'
                            ref={refEmail}
                            {...register("email")}
                        />
                        <p className={styles.msgError}>{errors.email?.message}</p>
                    </div>
                    <div className={styles.containerInput}>
                        <InputGeral
                            heigth={screenSize > 1080 ? 60 : 41}
                            placeholder="Senha de no mínimo 6 caracteres..."
                            labelContent="Senha"
                            id='senha'
                            htmlFor='senha'
                            type='password'
                            ref={refSenha}
                            {...register("senha")}
                        />
                        <p className={styles.msgError}>{errors.senha?.message}</p>
                    </div>
                    <div className={styles.containerInput}>
                        <InputGeral
                            heigth={screenSize > 1080 ? 60 : 41}
                            placeholder="Repetir a senha"
                            labelContent="Confirmar senha"
                            id='confirmarSenha'
                            htmlFor='confirmarSenha'
                            type='password'
                            ref={refConfirmarSenha}
                            {...register("confirmarSenha")}
                        />
                        <p className={styles.msgError}>{errors.confirmarSenha?.message}</p>
                    </div>
                    <BotaoSubmit
                        content="Cadastrar"
                        style={screenSize > 1080 ? { width: "100%" } : { width: "none" }}
                        type='submit'
                    />
                </fieldset>
            </form>

        </main>
    )
}

export default LoginCadastro;