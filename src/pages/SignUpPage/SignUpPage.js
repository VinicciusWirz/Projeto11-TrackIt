import { InputsStyles, MainStyle } from "../../style/SignInSignUp";
import logo from "../../assets/trackitLogo.svg"
import { Link } from "react-router-dom";

export default function SignUpPage() {
    function handleSingInSubmit() {

    }
    return (
        <MainStyle>
            <img src={logo} />
            <InputsStyles>
                <form onSubmit={handleSingInSubmit} >
                    <input
                        placeholder="email"
                        type='email'
                        name='email'
                        required
                    />
                    <input
                        placeholder="senha"
                        type='password'
                        name='password'
                        required
                    />
                    <input
                        placeholder="nome"
                        type='text'
                        name='name'
                        required
                    />
                    <input
                        placeholder="foto"
                        type='text'
                        name='picture'
                        required
                    />
                    <button type='submit'>
                        Cadastrar
                    </button>
                </form>
                <Link to='/'>
                    Já tem uma conta? Faça login!
                </Link>
            </InputsStyles>
        </MainStyle>
    );
}
