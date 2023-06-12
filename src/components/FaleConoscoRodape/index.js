import BotaoSubmit from 'components/BotaoSubmit';
import styles from './FaleConosRodape.module.css';
import InputGeral from 'components/InputGeral';
import Textarea from 'components/Textarea';

import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRef } from 'react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { v4 as uuidv4 } from 'uuid';

// Aqui as mensagens de erro dos inputs do formulário fale conosco

const schema = yup.object({
    nome: yup.string()
        .required('O campo nome nao pode estar vazio.')
        .max(40, 'O nome deve ter no máximo 40 caracteres.'),
    mensagem: yup.string()
        .required('O campo de mensagem não pode estar vazio.')
        .max(120, 'O campo mensagem só pode ter no máximo 120 caracteres')
})

function FaleConosRodape() {

// note que aqui foi necessário use o hook use ref,
//  para poder utilizar o forwardRef e entregar a referencia através do componente

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema)
    });

    const refNome = useRef(null);
    const refMensagem = useRef(null);
    const [mensagemEnviada, setMensagemEnviada] = useState(false);

// Na função onSubmit é feito o fetch com o método post para enviar as mensagens para o servidor, deixei exibindo no console também,
// apenas para visualizar já que ainda nao existe onde ser exibido a mensagem de fato

    const onSubmit = async (data) => {
        if (data !== null) {
            try {

                const response = await fetch('http://localhost:8000/message', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        nome: data.nome,
                        message: data.mensagem,
                        id: uuidv4()
                    })
                });

                if (response.ok) {
                    const dados = await response.json();
                    console.table(dados);
                    setMensagemEnviada(true);
                    reset();
                }

            } catch (error) { console.error('Erro:', error) };
        }
    };

// o useEffect aqui serve para exibir uma mensagem de sucesso quando a mensagem for entregue, ele verifica se o estado  mensagemEnviada é igual a true e entao exibe a mensagem logo em seguida limpando o useEffect para não ocorrer inconvientes e limpando retirando a mensagem também

    useEffect(() => {

        if(mensagemEnviada){
            let messageTimer = setTimeout(() => {
                setMensagemEnviada(false);
            }, 3000);
    
            return () => {
                clearTimeout(messageTimer);
            }
        }
    }, [mensagemEnviada]);


    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            {mensagemEnviada &&
                <p className={styles.mensagemEnviada}>Mensagem enviada com sucesso!</p>
            }
            <fieldset className={styles.formContainer}>
                <legend>Fale Conosco</legend>
                < div className={styles.inputContainer}>
                    <InputGeral
                        placeholder="Escreva seu nome"
                        id="nome"
                        htmlFor="nome"
                        labelContent="Nome"
                        type="text"
                        ref={refNome}
                        {...register("nome")}
                    />
                    <p className={styles.msgError}>{errors.nome?.message}</p>
                </div>
                <div className={styles.textContainer}>
                    <Textarea
                        placeholder='Escreva sua mensagem'
                        id='mensagem'
                        ref={refMensagem}
                        {...register("mensagem")}
                    />
                    <p className={styles.msgError}>{errors.mensagem?.message}</p>
                </div>
                <BotaoSubmit type='submit' content='Enviar mensagem' />
            </fieldset>
        </form >
    )
}

export default FaleConosRodape;