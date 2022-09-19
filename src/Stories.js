function Storie(props){
    return(
          <div class="story">
            <div class="imagem">
              <img src= {props.imagem} />
            </div>
            <div class="usuario">
              {props.usuario}
            </div>
          </div>
    );
};

export default function Stories(){
  const lista =[
    {imagem:"assets/img/9gag.svg",usuario:"9gag"},
    {imagem:"assets/img/9gag.svg",usuario:"9gag"},
    {imagem:"assets/img/9gag.svg",usuario:"9gag"},
    {imagem:"assets/img/9gag.svg",usuario:"9gag"},
    {imagem:"assets/img/9gag.svg",usuario:"9gag"},
    {imagem:"assets/img/9gag.svg",usuario:"9gag"},
    {imagem:"assets/img/9gag.svg",usuario:"9gag"},       
  ];

return(
  <div class="stories">
    {lista.map((s)=> <Storie imagem={s.imagem} usuario={s.usuario}/>)}
    <div class="setinha">
      <ion-icon name="chevron-forward-circle"></ion-icon>
    </div>
  </div>
);
}