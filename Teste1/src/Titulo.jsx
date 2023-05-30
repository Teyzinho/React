import { useState } from "react";

function Titulo({ nome, paragrafo,cor }) {

    const urlimg = 'https://pbs.twimg.com/profile_images/1312337964651945985/zeR_rMAK_400x400.jpg';
    const [Texto, setTexto] = useState("Titulo no estado Inicial");
    const [InputText, setInputText] = useState("");

    function click(){
        setTexto(InputText);
    }

    return (
        <div>
            <h1 style={{color: cor}}>{Texto}</h1>
            <input type="text" value={InputText} onChange={(e) => {setInputText(e.target.value)}} />
            <button onClick={click}>Mudar</button>
            {paragrafo ? // If paragrafo exist
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, ex iure perspiciatis aliquid illo repellendus dolorum minus velit eum, facere cupiditate aut tempora blanditiis molestiae error, necessitatibus aperiam distinctio ut?</p>
                : "Sem paragrafo" //else
            }
            <h2>Variável nome : {nome ? nome : "sem nome"}</h2>
            <img width={50} src={urlimg} alt="" />
        </div>
    )
}

export default Titulo