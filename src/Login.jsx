import { useState } from "react"

export const Login = (props) => {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(email)
    }

    return (
        <div className="auth-form-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">Email:</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="example@example.com" id="email" name="email" />
                <label htmlFor="password">Senha:</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Sua senha" id="password" name="password" />
                <button type='submit'>Entrar</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Não tem cadastro? Clique aqui</button>
        </div>
    )
}