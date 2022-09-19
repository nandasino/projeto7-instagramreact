function Post(props){
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
    <img src={props.conteudo} />
  </div>

  <div class="fundo">
    <div class="acoes">
      <div>
        <ion-icon name="heart-outline"></ion-icon>
        <ion-icon name="chatbubble-outline"></ion-icon>
        <ion-icon name="paper-plane-outline"></ion-icon>
      </div>
      <div>
        <ion-icon name="bookmark-outline"></ion-icon>
      </div>
    </div>

    <div class="curtidas">
      <img src={props.curtida}/>
      <div class="texto">
        Curtido por <strong>{props.texto}</strong> e <strong>outras {props.quantidade} pessoas</strong>
      </div>
    </div>
  </div>
</div>
  );
}

export default function Posts(){

  const lista =[
    {imagem:"assets/img/meowed.svg",usuario:"meowed",conteudo:"assets/img/gato-telefone.svg",curtida:"assets/img/respondeai.svg", texto:"respondeai",quantidade:"101.523"},
    {imagem:"assets/img/meowed.svg",usuario:"meowed",conteudo:"assets/img/gato-telefone.svg",curtida:"assets/img/respondeai.svg", texto:"respondeai",quantidade:"101.523"}
  ];
    return(
        <div class="posts">
        {lista.map((p)=><Post imagem ={p.imagem} usuario={p.usuario} conteudo= {p.conteudo} curtida={p.curtida} texto={p.texto} quantidade={p.quantidade}/>)}
        </div>
    );
}