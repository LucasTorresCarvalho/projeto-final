import S from './queroDoar.module.scss';
import livro from '../../assets/Vector.png';
import axios from 'axios';
import { useState } from 'react';

export default function QueroDoar() {
    const [titulo, setTitulo] = useState("");
    const [categoria, setCategoria] = useState("");
    const [autor, setAutor] = useState("");
    const [imagen, setImagen] = useState("");


    const enviarDados = async () => {

        const urlApi = "https://vai-na-web-biblioteca.onrender.com/doar";

        const dadosEnviar = { titulo, categoria, autor, imagen };

        console.log("📤 Enviando para API:", JSON.stringify(dadosEnviar, null, 2));

        // try {
            await axios.post(urlApi, dadosEnviar);

            console.log("✅ Resposta da API:");
            alert("🎉 Livro cadastrado com sucesso!");

            setTitulo("");
            setCategoria("");
            setAutor("");
            setImagen("");
    };

    return (
        <section className={S.principal}>
            <section className={S.container}>
                <h2>Por favor, preencha o formulário com as informações do Livro</h2>
                <form onSubmit={(e) => { e.preventDefault(); enviarDados(); }}>
                    <div>
                        <img src={livro} alt="Livro" />
                        <h3>Informações do Livro</h3>
                    </div>
                    <input type="text" placeholder='Título' onChange={(e) => setTitulo(e.target.value)} value={titulo} />
                    <input type="text" placeholder='Categoria' onChange={(e) => setCategoria(e.target.value)} value={categoria} />
                    <input type="text" placeholder='Autor' onChange={(e) => setAutor(e.target.value)} value={autor} />
                    <input type="text" placeholder='Link da Imagem' onChange={(e) => setImagen(e.target.value)} value={imagen} />
                    <input className={S.doar} type="submit" value="Doar" />
                </form>
            </section>
        </section>
    );
}
