export const Card = ({ title, subtitle, text, ver, baixar }) => { 
    
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{ title }</h5>
          <h6 className="card-subtitle">{ subtitle }</h6>
          <p className="card-text">{ text }</p>
            <a href={ ver } className="card-link">
            Ver Manual</a>
            <a href={baixar} className="card-link">
            Baixar Manual</a>
        </div>
      </div>
    );
}