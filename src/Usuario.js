import React from "react";

function Nome(props){
  const [nominho,setNominho] = React.useState("");
  const [usuariozinho,setUsuariozinho] = React.useState("");
  const [imagenzinha,setImagenzinha] = React.useState("");

  function inserirNome(){
    const nomePrompt= prompt("Qual é o seu nome?");
    const usuarioPrompt= prompt("Qual é o seu usuário?")
    setNominho(nomePrompt);
    setUsuariozinho(usuarioPrompt);
  };
  function inserirImagem(){
    const imagenzinhaPrompt= prompt("Qual é o link da imagem?");
    setImagenzinha(imagenzinhaPrompt);
  }
  return(
    <div class="usuario">
    <img onClick={inserirImagem}src= {(imagenzinha===""||imagenzinha===null)? props.imagem: imagenzinha}/>
    <div class="texto">
      <strong>{(nominho===""||nominho===null||usuariozinho===""||usuariozinho===null)? props.usuario: usuariozinho}</strong>
      <span>
        {(nominho===""||nominho===null||usuariozinho===""||usuariozinho===null)? props.nome: nominho}
        <ion-icon name="pencil" onClick={inserirNome}></ion-icon>
      </span>
    </div>
  </div>
  );
}

export default function Usuario(){
  const objeto=[
    {imagem:"assets/img/catanacomics.svg", usuario:"catanacomics", nome:"Catana"}
  ]
    return(
      objeto.map((u)=> <Nome imagem= {u.imagem} usuario= {u.usuario} nome={u.nome}/>)
    );
};