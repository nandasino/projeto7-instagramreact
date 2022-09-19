function Nome(props){
  return(
    <div class="usuario">
    <img src= {props.imagem} />
    <div class="texto">
      <strong>{props.usuario}</strong>
      <span>
        {props.usuario}
        <ion-icon name="pencil"></ion-icon>
      </span>
    </div>
  </div>
  )
}

export default function Usuario(){
  const objeto=[
    {imagem:"assets/img/catanacomics.svg", usuario:"catanacomics", nome:"Catana"}
  ]
    return(
      objeto.map((u)=> <Nome imagem= {u.imagem} usuario= {u.usuario} nome={u.nome}/>)
    );
};