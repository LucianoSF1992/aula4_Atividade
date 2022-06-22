import React, { useState } from "react"
import "./FormLogin.css"

export const FormLogin = () => {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    return (
        <div className="formlogin">
            <section>
                <p>
                    <h1>Já tem<br></br>
                        login?<br></br>
                        Entre
                    </h1>
                </p>
            </section>
            <section className="cadastro">
                <form>
                    <br></br>
                    <label for="login">Login</label>
                    <br></br>
                    <br></br>
                    <label for="email">E-mail</label><br></br>
                    <input onChange={(email) => setEmail(email.target.value )} type="email" name="email"/> <br></br>Seu e-mail é:

                    {email}

                    <br></br>
                    <br></br>
                    <label for="senha">Senha</label><br></br>
                    <input onChange={(senha) => setSenha(senha.target.value )} type="password" name="senha"/> <br></br>Sua senha é:

                    {senha}

                    <br></br>
                    <br></br>
                    <input type="checkbox" id="remember" name="remember" value="remember"></input>
                    <label for="remember"> Remember</label>
                    <br></br>
                    <br></br>
                    <button class="botao" type="submit" onsubmit="">Login</button>
                    <br></br>
                    <br></br> 
                    <label for="alterarsenha">Don't remember the password?</label>
                    <br></br>
                    <br></br> 
                    <button class="signup" type="submit" onsubmit="">Sign Up</button>
                    <br></br>
                    <br></br> 
                </form>
            </section>
        </div>
    );
  }