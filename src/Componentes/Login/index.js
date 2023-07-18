import './Login.css'
import React, { useState } from 'react'
import imagem from '../imagens/connect.jpg'

const LoginForm = () => {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const modificandoEmail = (event) => {
        setEmail(event.target.value)
    }

    const modificandoSenha = (event) => {
        setSenha(event.target.value)
    }

    const confirmaLogin = (event) => {
        event.preventDefault()
        setEmail('')
        setSenha('')
        console.log(email)
        console.log(senha)
    };

    return (
        <div className='container'>
            <form onSubmit={confirmaLogin}>
                <div className='espaco-imagem'>
                    <img className='img-logo' src={imagem} alt="Descrição da imagem"></img>
                </div>

                <div className='form-login'>
                    <label 
                    htmlFor="email"
                    ></label>
                    <input
                        placeholder='Digite seu Email'
                        type="email"
                        id="email"
                        value={email}
                        onChange={modificandoEmail}
                    />
                </div>
                <div className='form-login'>
                    <label 
                    htmlFor="password" 
                    ></label>
                    <input
                        placeholder='Digite sua senha'
                        type="password"
                        id="password"
                        value={senha}
                        onChange={modificandoSenha}
                    />
                </div>
                <a>Esqueceu a senha?</a>
                <button className='botao' type="submit">Login</button>
                <p className='cadastro'>Clique aqui para se <button>Cadastrar</button></p>
            </form>
        </div>
    )
}

export default LoginForm
