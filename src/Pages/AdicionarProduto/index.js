import InputGeral from 'components/InputGeral';
import styles from './AdicionarProduto.module.css';
import Textarea from 'components/Textarea';
import BotaoSubmit from 'components/BotaoSubmit';

import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const schema = yup.object({
    imagem: yup.mixed()
        .required('O campo de imagem não pode estar vazio.'),
    nome: yup.string()
        .required('O campo de nome não pode estar vazio.')
        .max(40, 'O campo de nome deve ter no máximo 40 caracteres.'),
    secao: yup.string()
        .required('O campo de seção não pode estar vazio.'),
    preco: yup.string()
        .required('O campo de preço não pode estar vazio.')
        .matches(/^\d+(,\d{1,2})?$/, 'O valor digitado dever estar no formato: numero, virgula, numero (00,00).'),
    descricao: yup.string()
        .required("O campo de descrição não pode estar vazio.")
        .max(250, 'O campo de descrição deve ter o máximo de 250 caracteres.')
})

function AdicionarProduto() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm({ resolver: yupResolver(schema) });
    const [selectedOption, setSelectedOption] = useState('');
    const [produtoCadastrado, setProdutoCadastrado] = useState(false);

    useEffect(() => {
        let timeoutId;
    
        if (produtoCadastrado) {
          timeoutId = setTimeout(() => {
            setProdutoCadastrado(false);
          }, 3000);
        }
    
        return () => {
          clearTimeout(timeoutId);
        };
      }, [produtoCadastrado]);

    const onSubmit = async (data) => {
        if (data !== 'null') {
                await axios.post('http://localhost:8000/produtos', {
                    id:  uuidv4(),
                    imagem:`/images/${data.imagem[0].name}`,
                    nome: data.nome,
                    preco: parseFloat(data.preco.replace(',' , '.')),
                    secao: data.secao,
                    descricao: data.descricao
                })

            .then((response)=> {
                setProdutoCadastrado(true);
                 reset();
            })
            .catch(error => console.error("erro na requisição", error))
            
        }
    }


    return (
        <main className={styles.container}>
             {produtoCadastrado && (
                <div className={styles.containerMessage}>
                    <p className={styles.msgConfirmed}>Cadastro realizado com sucesso!</p>
                </div>
            )}
            <form onSubmit={handleSubmit(onSubmit)}>
                <fieldset>
                    <legend className={styles.titulo}>Adicionar novo produto</legend>
                    <div className={styles.inputContainer}>
                        <label htmlFor="campoImagem" className={styles.labelImagem}>Adicionar Imagem</label>
                        <input
                            type='file'
                            accept='.jpg, .png'
                            id='campoImagem'
                            className={styles.inputImagem}
                            {...register('imagem')}
                        />
                        <p className={styles.msgError}>{errors.secao?.message}</p>
                    </div>
                    <div style={{ paddingBottom: '1rem' }}>
                        <div className={styles.inputContainer} style={{ position: "relative", paddingBottom: '0' }}>
                            <label
                                htmlFor="categoria"
                                className={`${styles.categoriaLabel} ${selectedOption ? styles.hasValue : styles.hasNoValue}`}>
                                Selecione a categoria
                            </label>
                            <select id="categoria"
                                className={styles.categoriaSelect}
                                {...register('secao', { onChange: (e) => setSelectedOption(e.target.value) })}
                            >
                                <option className={styles.categoriaItem} value="" hidden></option>
                                <option className={styles.categoriaItem} value="consoles">Consoles</option>
                                <option className={styles.categoriaItem} value="starWars">Star wars</option>
                                <option className={styles.categoriaItem} value="diversos">Diversos</option>
                            </select>
                        </div>
                        <p className={styles.msgError}>{errors.secao?.message}</p>
                    </div>
                    <div className={styles.inputContainer}>
                        <InputGeral
                            heigth={56}
                            id='Nome do produto'
                            htmlFor='Nome do produto'
                            placeholder='Digite o nome do produto'
                            type='text'
                            labelContent='Nome do produto'
                            {...register('nome')}
                        />
                        <p className={styles.msgError}>{errors.nome?.message}</p>
                    </div>
                    <div className={styles.inputContainer}>
                        <InputGeral
                            heigth={56}
                            id='Preço do produto'
                            htmlFor='Preço do produto'
                            placeholder='Digite o preço do produto'
                            type='text'
                            labelContent='Preço do produto'
                            {...register('preco')}
                        />
                        <p className={styles.msgError}>{errors.preco?.message}</p>
                    </div>
                    <div className={styles.inputContainer}>
                        <Textarea
                            id='descricao'
                            placeholder='Descrição do produto'
                            {...register('descricao')}
                        />
                        <p className={styles.msgError}>{errors.descricao?.message}</p>
                    </div>
                    <BotaoSubmit type="submit " content='Adicionar produto' style={{ width: '100%' }} />
                </fieldset>
            </form>
        </main>
    )
}

export default AdicionarProduto