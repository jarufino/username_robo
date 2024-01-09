import { useState } from "react"

export const Register = (props) => {
    const [nome, setNome] = useState('')
    const [cpf, setCPF] = useState('')
    const [dataNascimento, setDataNascimento] = useState('')
    const [endereco, setEndereco] = useState('')
    const [cidade, setCidade] = useState('')
    const [estado, setEstado] = useState('')
    const [telefone, setTelefone] = useState('')
    const [cep, setCEP] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(nome, email, cpf)
    }
    return (
        <div className="auth-form-container">
            <form className="register-form" onSubmit={handleSubmit}>
                <label htmlFor="nome">Nome Completo:</label>
                <input value={nome} onChange={(e) => setNome(e.target.value)} type="text" placeholder="Nome Completo" />
                <label htmlFor="cpf">Nome CPF:</label>
                <input value={cpf} onChange={(e) => setCPF(e.target.value)} type="number" placeholder="CPF" />
                <label htmlFor="dataNascimento">Data de Nascimento:</label>
                <input value={dataNascimento} onChange={(e) => setDataNascimento(e.target.value)} type="text" placeholder="Data de Nascimento" />
                <label htmlFor="endereco">Rua:</label>
                <input value={endereco} onChange={(e) => setEndereco(e.target.value)} type="text" placeholder="Nome Completo" />
                <label htmlFor="cidade">Cidade:</label>
                <input value={cidade} onChange={(e) => setCidade(e.target.value)} type="text" placeholder="Cidade" />
                <label htmlFor="estado">Estado:</label>
                <input value={estado} onChange={(e) => setEstado(e.target.value)} type="text" placeholder="Estado" />
                <label htmlFor="name">Nome Completo:</label>
                <input value={telefone} onChange={(e) => setTelefone(e.target.value)} type="text" placeholder="Telefone" />
                <label htmlFor="cep">CEP:</label>
                <input value={cep} onChange={(e) => setCEP(e.target.value)} type="text" placeholder="CEP" />
                <label htmlFor="name">Email:</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="exemplo@exemplo.com" />
                <label htmlFor="password">Senha:</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Senha:" />
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Já tem cadastro? Clique aqui</button> 

        </div>
    )
}