import { InputsStyles, MainStyle } from "../../style/SignInSignUp";
import logo from "../../assets/trackitLogo.svg"
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { url } from "../../constants/url";
import { ThreeDots } from "react-loader-spinner";

export default function SignUpPage() {
    const navigate = useNavigate();
    const [form, setForm] = useState({});
    const [processing, setProcessing] = useState(false);

    useEffect(() => {
        setForm({ email: '', password: '', name: '', image: '' });
    }, []);

    function handleSingInSubmit(e) {
        e.preventDefault();
        setProcessing(true);
        axios.post(`${url}/auth/sign-up`, form)
            .then(() => navigate('/'))
            .catch(err => {
                alert(err.response.data.message);
                setProcessing(false);
            });
    }

    function handleInputChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    return (
        <MainStyle>
            <img src={logo} onClick={() => navigate('/')} />
            <InputsStyles>
                <form onSubmit={handleSingInSubmit} >
                    <input
                        placeholder="email"
                        type='email'
                        name='email'
                        required
                        onChange={handleInputChange}
                        disabled={processing}
                        data-test="email-input"
                    />
                    <input
                        placeholder="senha"
                        type='password'
                        name='password'
                        required
                        onChange={handleInputChange}
                        disabled={processing}
                        data-test="password-input"
                    />
                    <input
                        placeholder="nome"
                        type='text'
                        name='name'
                        required
                        onChange={handleInputChange}
                        disabled={processing}
                        data-test="user-name-input"
                    />
                    <input
                        placeholder="foto"
                        type='url'
                        name='image'
                        required
                        onChange={handleInputChange}
                        disabled={processing}
                        data-test="user-image-input"
                    />
                    <button type='submit' disabled={processing} data-test="signup-btn">
                        {!processing ? 'Cadastrar' : <ThreeDots color='#ffff' width='51px' />}
                    </button>
                </form>
                <Link to='/' data-test="login-link">
                    Já tem uma conta? Faça login!
                </Link>
            </InputsStyles>
        </MainStyle>
    );
}
