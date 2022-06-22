import { FormCadastro } from "../FormCadastro";
import { FormLogin } from "../FormLogin";
import react, { useState } from "react";
import Header from "../../Header";
import Card from "../../Card";
import { Footer } from "../../Footer/Index";

function HomePage() {

    const [acessar, setAcessar] = useState(null);


    return(

        <div className="homepage">

             
            <Header foto="https://i.imgur.com/hWeSc2j.png"></Header>

            <br></br>

            <button onClick={() => setAcessar(!acessar ? <FormLogin /> : null)}> Login </button>
            {acessar}

            <button onClick={() => setAcessar(!acessar ? <FormCadastro /> : null)}> Cadastar </button>
            {!acessar}

            <br></br>
            <br></br>

            <Card foto="https://neofeed.com.br/wp-content/uploads/2021/10/desenvolvedor-696x392.jpg"></Card>

            <br></br>
      
            <Footer></Footer>
              
        </div>



    )
}
export default HomePage;
