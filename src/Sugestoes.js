function Sugestao(props){
  return(
    <div class="sugestao">
    <div class="usuario">
      <img src={props.imagem} />
      <div class="texto">
        <div class="nome">{props.nome}</div>
        <div class="razao">{props.razao}</div>
      </div>
    </div>

    <div class="seguir">Seguir</div>
  </div>
  ); 
};
export default function Sugestoes(){
  const lista=[
    {imagem:"assets/img/bad.vibes.memes.svg", nome:"bad.vibes.memes", razao:"Segue você"},
    {imagem:"assets/img/bad.vibes.memes.svg", nome:"bad.vibes.memes", razao:"Segue você"},
    {imagem:"assets/img/bad.vibes.memes.svg", nome:"bad.vibes.memes", razao:"Segue você"}   
  ];
    return(
        <div class="sugestoes">
          <div class="titulo">
            Sugestões para você
            <div>Ver tudo</div>
          </div>
        {lista.map((s)=><Sugestao imagem={s.imagem} nome= {s.nome} razao= {s.razao}/>)}
        </div>
    );
};