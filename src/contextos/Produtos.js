import { createContext, useEffect, useState } from "react";

export const ProdutosContext = createContext();
ProdutosContext.displayName = "Produtos";

export default function ProdutosProvider({ children, url }) {
    const [produtos, setProdutos] = useState([]);
    const [resultados, setResultados] = useState([]);

    useEffect(() => {
        const listarProdutos = async () => {
            if (produtos.length > 0) {
                return;
            }
            try {
                const resposta = await fetch(url);
                if (!resposta.ok) throw new Error('Erro ao buscar os produtos');
                const dados = await resposta.json();
                setProdutos(dados);

            } catch (error) {
                console.error('Erro ao buscar os produtos:', error);
            }
        }

        listarProdutos();

    },[produtos.length, url])

    function buscarProdutos (lowerBusca) {
        const mensagem = [{msg: 'Não foi encontrado nenhum resultado referente a sua busca. Tente novamente com outros termos'}];

        if(lowerBusca === ''){
            setResultados([])
            return;
        } 
        const resultadosBusca = produtos.filter((produto) => produto.nome.toLowerCase().includes(lowerBusca));

        if(resultadosBusca.length > 0){
            setResultados(resultadosBusca);
            return;
        }

        setResultados(mensagem);
    }

    return (
        <ProdutosContext.Provider value={{ produtos, resultados, buscarProdutos }}>
            {children}
        </ProdutosContext.Provider>
    )
}


