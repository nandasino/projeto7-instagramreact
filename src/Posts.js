import React from "react";
function Post(props){
  const [salvo,setSalvo] = React.useState("bookmark-outline");
  const [curtido,setCurtido] = React.useState("heart-outline");
  const [classe,setClasse] = React.useState("preto");
  const [curtidas,setCurtidas] = React.useState(props.quantidade);

  function salvarPost(){
    if(salvo==="bookmark-outline"){
      setSalvo("bookmark");
    }
    else{
      setSalvo("bookmark-outline");
    }
  }
  function curtirPost(){
    if(curtido==="heart-outline"){
      setCurtido("heart");
      setClasse("vermelho");
      setCurtidas(curtidas+1);
    }
    else{
      setCurtido("heart-outline");
      setClasse("preto");
      setCurtidas(props.quantidade);
    }
  }

  return(
  <div class="post">
  <div class="topo">
    <div class="usuario">
      <img src={props.imagem} />
      {props.usuario}
    </div>
    <div class="acoes">
      <ion-icon name="ellipsis-horizontal"></ion-icon>
    </div>
  </div>

  <div class="conteudo">
    <img onClick={curtirPost} src={props.conteudo} />
  </div>

  <div class="fundo">
    <div class="acoes">
      <div>
        <ion-icon onClick={curtirPost} name={curtido} class= {classe}></ion-icon>
        <ion-icon name="chatbubble-outline"></ion-icon>
        <ion-icon name="paper-plane-outline"></ion-icon>
      </div>
      <div>
        <ion-icon onClick={salvarPost} name={salvo}></ion-icon>
      </div>
    </div>

    <div class="curtidas">
      <img src={props.curtida}/>
      <div class="texto">
        Curtido por <strong>{props.texto}</strong> e <strong>outras {curtidas} pessoas</strong>
      </div>
    </div>
  </div>
</div>
  );
};

export default function Posts(){

  const lista =[
    {imagem:"assets/img/meowed.svg",usuario:"meowed",conteudo:"assets/img/gato-telefone.svg",curtida:"assets/img/respondeai.svg", texto:"respondeai",quantidade:101523},
    {imagem:"assets/img/meowed.svg",usuario:"meowed",conteudo:"assets/img/gato-telefone.svg",curtida:"assets/img/respondeai.svg", texto:"respondeai",quantidade:102}
  ];
    return(
        <div class="posts">
        {lista.map((p)=><Post imagem ={p.imagem} usuario={p.usuario} conteudo= {p.conteudo} curtida={p.curtida} texto={p.texto} quantidade={p.quantidade}/>)}
        </div>
    );
};