import { createContext, useState, useEffect } from "react";


export const AuthContext = createContext();
AuthContext.displayName = 'Usuário autenticado';

export const AuthProvider = ({ children }) => {
    const [logado, setLogado] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedLogado = localStorage.getItem('logado');
        const storedUser = JSON.parse(localStorage.getItem('user'));
    
        if (storedLogado === 'true') {
          setLogado(true);
          setUser(storedUser);
        }
      }, []);

    const fazerLogin = (dadosUsuario) => {
        setLogado(true);
        setUser(dadosUsuario);

        localStorage.setItem('user', JSON.stringify(dadosUsuario));
        localStorage.setItem('logado', 'true');

    }

    const fazerLogout = () => {
        setUser(null);
        setLogado(false);

        localStorage.removeItem('user');
        localStorage.removeItem('logado');
    };

    return (
        <AuthContext.Provider value={{ logado, setLogado, fazerLogin, fazerLogout, user }}>
            {children}
        </AuthContext.Provider>
    )
}
