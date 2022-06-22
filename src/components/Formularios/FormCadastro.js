import React from "react"
import "./FormLogin.css"

export function FormCadastro() {
    return (
        <div className="formlogin">
            <section>
                <p>
                    <h1>Não tem<br></br>
                        login?<br></br>
                        Cadastre-se
                    </h1>
                </p>
            </section>
            <section className="cadastro">
                <form>
                    <br></br>
                    <label for="cadastrese">Cadastre-se</label>
                    <br></br>
                    <br></br>
                    <label for="nome">Nome</label><br></br>
                    <input type="nome" name="nome" id="nome" required></input>
                    <br></br>
                    <br></br>
                    <label for="email">E-mail</label><br></br>
                    <input type="email" name="email" id="email" required></input>
                    <br></br>
                    <br></br>
                    <label for="senha">Senha</label><br></br>
                    <input type="senha" name="senha" id="senha" required></input>
                    <br></br>
                    <br></br>
                    <input type="checkbox" id="remember" name="remember" value="remember"></input>
                    <label for="remember"> Remember</label>
                    <br></br>
                    <br></br>
                    <button class="botao" type="submit" onsubmit="">Sign Up</button>
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