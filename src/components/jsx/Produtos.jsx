export const Produtos = ({ title, img, specific }) => { 

    return (
        <div id="container-pagina-produtos-evp">
          <div id="container-pagina-divs-produtos-evp">
            <img src={img} id="container-pagina-imagens-produtos-evp"/>
            <span id="titulo-do-produto">{title}</span>
            <div id="botao-saibamais">
              <a href={specific} class="botaodownload">
                Ver especificações
              </a>
            </div>
          </div>
      </div>
    );
}