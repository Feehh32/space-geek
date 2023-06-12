import InputGeral from 'components/InputGeral';
import styles from './Login.module.css';
import BotaoSubmit from 'components/BotaoSubmit';
import { AuthContext } from 'contextos/AuthContext';

import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRef, useState } from 'react';
import axios from 'axios';
import { useContext } from 'react';

const screenSize = window.innerWidth;

const schema = yup.object({
    email: yup.string()
        .required('O campo de email não pode estar vazio!')
        .email('Insira um email válido!'),
    senha: yup.string()
        .required('O Campo de senha não pode estar vazio!')
        .min(6, 'A senha deve ter pelo menos 6 caracteres.'),
})

function Login() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema)
    });

    const refEmail = useRef(null);
    const refSenha = useRef(null);
    const navigate = useNavigate();
    const [errorLogin, setErrorLogin] = useState('');
    const {fazerLogin} = useContext(AuthContext);

    const onSubmit = async (data) => {
        try {
            const response = await axios.get('http://localhost:8000/users', {
                params: {
                    email: data.email
                }
            });

            const usuarios = response.data;
            const usuario = usuarios.find((user) => user.email === data.email);

            if (usuario && usuario.senha === data.senha) {
                loginAcepted();
                reset();
                fazerLogin(usuario)

            } else {
                setErrorLogin('Credenciais inválidas. Verifique seu e-mail ou senha e tente novamente.')

                setTimeout(() => {
                    setErrorLogin('');
                  }, 3000);
                
            }
        } catch (error){
            console.error('erro na validação:', error);

            setErrorLogin('Ocorreu um erro na autenticação. Tente novamente mais tarde.');

            setTimeout(() => {
                setErrorLogin('');
              }, 3000);

        }
    }

    const loginAcepted = () => {
        navigate('/');
        reset();
    };

    return (
        <main className={styles.container}>
              {errorLogin && <div className={styles.errorLogin}><p>{errorLogin}</p></div> }
            <form onSubmit={handleSubmit(onSubmit)} >
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
                            ref={refEmail}
                            {...register("email")}
                        />
                        <p className={styles.msgError}>{errors.email?.message}</p>
                    </div>
                    <div className={styles.containerInput}>
                        <InputGeral
                            heigth={screenSize > 1080 ? 60 : 41}
                            placeholder="Escreva sua senha"
                            labelContent="Senha"
                            id='senha'
                            htmlFor='senha'
                            type='password'
                            ref={refSenha}
                            {...register("senha")}
                        />
                        <p className={styles.msgError}>{errors.senha?.message}</p>
                    </div>
                    <BotaoSubmit
                        content="Entrar"
                        style={screenSize > 1080 ? { width: "100%" } : { width: "none" }}
                        type='submit'
                    />
                    <p className={styles.msgCadastro}>
                        Ainda não tem cadastro?{" "}
                        <Link to='/login_cadastro' className={styles.msgLink}>Cadastre-se aqui!</Link>
                    </p>
                </fieldset>
            </form>
        </main>
    )
}

export default Login;