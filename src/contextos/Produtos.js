import { createContext, useEffect, useState } from "react";

export const ProdutosContext = createContext();
ProdutosContext.displayName = "Produtos";

export default function ProdutosProvider({ children, url }) {
    const [produtos, setProdutos] = useState([]);

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

    return (
        <ProdutosContext.Provider value={{ produtos}}>
            {children}
        </ProdutosContext.Provider>
    )
}
