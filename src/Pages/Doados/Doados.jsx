import S from './doados.module.scss'
import livro from '../../assets/livro.png'
import axios from 'axios'
import { useState, useEffect } from 'react'

export default function Doados() {
    // Estado para armazenar os livros recebidos da API
    const [livros, setLivros] = useState([])

    // Função assíncrona para buscar os livros na API
    const getLivros = async () => {
        try {
            const response = await axios.get("https://vai-na-web-biblioteca.onrender.com/livros")
            setLivros(response.data)
        } catch (error) {
            console.error("Erro ao buscar livros:", error)
        }
    }

    // useEffect para chamar a função de busca ao montar o componente
    useEffect(() => {
        getLivros()
    }, [])

    return (
        <section className={S.boxDoados}>
            <h2>Livros Doados</h2><br></br><br></br>
            <section className={S.boxBooks}>
                {/* Livro fixo */}
                <article>
                    <img src={livro} alt="imagem do livro o protagonista" />
                    <h3>O Protagonista</h3>
                    <p>Susanne Andrade</p>
                    <p>Ficção</p>
                </article>
                
                {/* Renderização dos livros recebidos da API */}
                {livros.map((item) => (
                    <article key={item.id}>
                        <img src={item.imagem_url} alt={item.titulo} />
                        <h3>{item.titulo}</h3>
                        <p>{item.autor}</p>
                        <p>{item.categoria}</p>
                    </article>
                ))}
            </section>
        </section>
    )
}