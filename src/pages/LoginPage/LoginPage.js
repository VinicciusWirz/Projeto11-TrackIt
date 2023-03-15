import axios from "axios";
import logo from "../../assets/trackitLogo.svg"
import { url } from "../../constants/url";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { InputsStyles, MainStyle } from "../../style/SignInSignUp";
import UserInfoContext from "../../contexts/UserInfoContext";

export default function LoginPage() {
    const navigate = useNavigate()
    const [form, setForm] = useState({});
    const [processing, setProcessing] = useState(false)
    const { setUserInfo } = useContext(UserInfoContext);
    useEffect(() => {
        setForm({ email: '', password: '' });
    }, []);
    function handleLoginSubmit(e) {
        e.preventDefault();
        setProcessing(true);
        axios.post(`${url}/auth/login`, form)
            .then(res => {
                navigate('/hoje');
                setUserInfo({ name: res.data.name, image: res.data.image, token: res.data.token, habits:[] });
            })
            .catch(err => {
                alert(err.response.data.message);
                setProcessing(false);
            });
    }
    function handleInputChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    return (
        <MainStyle>
            <img src={logo} />
            <InputsStyles>
                <form onSubmit={handleLoginSubmit} >
                    <input
                        placeholder="email"
                        type='email'
                        name='email'
                        required
                        onChange={handleInputChange}
                        disabled={processing}
                    />
                    <input
                        placeholder="senha"
                        type='password'
                        name='password'
                        required
                        onChange={handleInputChange}
                        disabled={processing}
                    />
                    <button type='submit' disabled={processing}>
                        {!processing ? 'Entrar' : <ThreeDots color='#ffff' width='51px' />}
                    </button>
                </form>
                <Link to='/cadastro'>
                    Não tem uma conta? Cadastre-se!
                </Link>
            </InputsStyles>
        </MainStyle>
    );
}

