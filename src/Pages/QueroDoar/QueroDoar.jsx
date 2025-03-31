import S from './queroDoar.module.scss'; // Importa o módulo de estilos CSS
import livro from '../../assets/Vector.png'; // Importa a imagem do livro
import axios from 'axios'; // Importa a biblioteca Axios para requisições HTTP
import { useState } from 'react'; // Importa o hook useState do React

export default function QueroDoar() {
    // Estados para armazenar os valores dos campos do formulário
    const [titulo, setTitulo] = useState("");
    const [categoria, setCategoria] = useState("");
    const [autor, setAutor] = useState("");
    const [imagen, setImagen] = useState(""); // Mudei o nome para 'imagen'

    // Função assíncrona para enviar os dados para a API
    const enviarDados = async () => {
        const urlApi = "https://vai-na-web-biblioteca.onrender.com/doar";
        const dadosEnviar = {
            titulo,
            categoria,
            autor,
            imagen // Agora estamos usando 'imagen' em vez de 'imagem_url'
        };

        try {
            await axios.post(urlApi, dadosEnviar, {
                headers: {
                    "Content-Type": "application/json"
                }
            });

            alert("Livro cadastrado com sucesso!");

            // Reseta os campos do formulário
            setTitulo("");
            setCategoria("");
            setAutor("");
            setImagen(""); // Resetando o campo 'imagen'
        } catch (error) {
            console.error("Erro ao cadastrar livro:", error);
            alert("Erro ao cadastrar livro. Verifique o console para mais detalhes.");
        }
    };

    return (
        <section className={S.principal}> {/* Contêiner principal estilizado */}
            <section className={S.container}> {/* Contêiner interno */}
                <h2>Por favor, preencha o formulário com suas informações e as informações do Livro</h2>
                <form onSubmit={(e) => { e.preventDefault(); enviarDados(); }}>
                    <div>
                        <img src={livro} alt="" /> {/* Exibe a imagem do livro */}
                        <h3>Informações do Livro</h3>
                    </div>
                    {/* Campos do formulário */}
                    <input type="text" placeholder='Título' onChange={(e) => setTitulo(e.target.value)} value={titulo} />
                    <input type="text" placeholder='Categoria' onChange={(e) => setCategoria(e.target.value)} value={categoria} />
                    <input type="text" placeholder='Autor' onChange={(e) => setAutor(e.target.value)} value={autor} />
                    <input type="text" placeholder='Link da Imagem' onChange={(e) => setImagen(e.target.value)} value={imagen} />
                    <input className={S.doar} type="submit" value="Doar" /> {/* Botão de submissão */}
                </form>
            </section>
        </section>
    );
}
