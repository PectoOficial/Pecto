import React, { useState, useRef, useEffect } from 'react';
import VMasker from 'vanilla-masker';

import style from './LoginCadastro.module.css';

import login_img from '../../Images/login.png';
import login_user from '../../Images/Login_user.png';
import login_password from '../../Images/Login_password.png';
import login_submit from '../../Images/Login_submit.png';
import google_login from '../../Images/Google_login.png';
import facebook_login from '../../Images/Facebook_login.png';

function NovaConta() {
    useEffect(() => {
        axios
        
    })
}


const LoginCadastro = () => {

    /*Animação container::before*/

    const [isSignUpMode, setIsSignUpMode] = useState(false);


    const handleSignUpClick = () => {
        setIsSignUpMode(true);
    }

    const handleSignInClick = () => {
        setIsSignUpMode(false);
    }


    /*Script CPF*/

    const cpfInputRef = useRef(null);

    useEffect(() => {
        VMasker(cpfInputRef.current).maskPattern("999.999.999-99");
    }, [])


    /*Script para ser possível mudar o 'placeholder' do input type="date"*/

    const handleFocus = (event) => {
        event.target.type = 'date';
    }

    const handleBlur = (event) => {
        event.target.type = 'text';
    }


    /*Estrutura da página*/

    return (
        <section id={style.login_cadastro}>
            <div className={` ${isSignUpMode ? style.sign_up_mode : '' } ` + style.container}>
                <div className={style.signin_signup}>
                    <form action="#" className={style.sign_in_form}>
                        <img src={login_img} alt="Imagem de login" />
                        <h2 className={style.title}>Login</h2>
                        <div className={style.input_field}>
                            <img src={login_user} alt="Clique para adicionar o seu e-mail" />
                            <input type='email' required placeholder='E-mail:' />
                        </div>
                        <div className={style.input_field}>
                            <img src={login_password} alt="Clique para adicionar a sua senha" />
                            <input type="password" required placeholder='Senha:' />
                        </div>
                        <div className={style.remember}>
                            <span>Esqueceu sua senha?</span>
                        </div>
                        <div className={style.input_submit}>
                            <img src={login_submit} alt="Clique para realizar o login" id={style.icone3} />
                            <input type="submit" id={style.submit} value='Entrar' className={style.botao5} />
                        </div>
                        <div className={style.remember2}>
                            <hr />
                        </div>

                        <div className={style.social_media}>
                            <img src={google_login} alt="Clique para fazer login pelo google" className={style.social_icon} />
                            <img src={facebook_login} alt="Clique para fazer login pelo facebook" className={style.social_icon} />
                        </div>
                    </form>

                    <form action="#" className={style.sign_up_form2}>
                        <h2 className={style.title2}>Cadastro</h2>
                        <div className={style.input_field2}>
                            <input type="text" placeholder='Nome completo:' required />
                        </div>
                        <div className={style.input_field2}>
                            <input type="email" placeholder='E-mail:' required />
                        </div>
                        <div className={style.input_field2}>
                            <input type="text" required placeholder='CPF:' ref={cpfInputRef} />
                        </div>
                        <div className={style.input_field2}>
                            <input type="text" required placeholder='Data de Nascimento:' onFocus={handleFocus} onBlur={handleBlur} />
                        </div>
                        <div className={style.input_field2}>
                            <input type="password" required placeholder='Senha:' />
                        </div>
                        <div className={style.input_field2}>
                            <input type="password" required placeholder='Confirmar senha:' />
                        </div>
                        <div className={style.support}>
                            <div className={style.remember3}>
                                <span>
                                    <input type="checkbox" name='opcao1' value='sim' required />
                                </span>
                                <p>Li e concordo com os <span>termos </span> e <span>serviços</span></p>
                            </div>
                            <input type="submit" value='Cadastre-se' className={style.botao6} />
                        </div>
                    </form>
                </div>
            </div>

            <div className={style.botao}>
                <div className={style.botao2}>
                    <div className={style.botao3}>
                        <button className={style.botao4} id={style.signin_button} onClick={handleSignInClick}>Login</button>
                    </div>
                </div>
                <div className={style.painel + style.right_panel}>
                    <div className={style.content}>
                        <button className={style.botao4} id={style.signup_button} onClick={handleSignUpClick}>Cadastro</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LoginCadastro