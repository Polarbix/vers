function Card(props){
    return(
        <div className="card">
                <div className="favorite">
                  <img src="/img/heart-unliked.svg" alt=""/>
                </div>
              <img width={133} height={112} src={props.imageUrl} alt=""/>
              <h5>{props.title}</h5>
              <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                  <span>Цена:</span>
                  <b>{props.price} руб.</b>
                </div>
                <button className="button">
                  <img src="/img/btn-plus.svg" alt=""/>
                </button>
              </div>
            </div>
    )
}

export default Card;