function Drawer(){
    return(
        <div className="drawer">
              <h2 className="d-flex justify-between mb-30">
                Корзина
                <img className="cu-p" src="/img/btn-remove.svg" alt=""/>
              </h2>
              <div className="items">
                <div className="cartItem d-flex align-center mb-20">
                  <div style={{backgroundImage: 'url(/img/sneakers/1.jpg)'}} className="cartItemImg"></div>
                  <div className="mr-20">
                    <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                    <b>12 205 руб.</b>
                  </div>
                  <img className="removeBtn" src="/img/btn-remove.svg" alt=""/>
                </div>
                <div className="cartItem d-flex align-center mb-20">
                  <div style={{backgroundImage: 'url(/img/sneakers/1.jpg)'}} className="cartItemImg"></div>
                  <div className="mr-20">
                    <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                    <b>12 205 руб.</b>
                  </div>
                  <img className="removeBtn" src="/img/btn-remove.svg" alt=""/>
                </div>
              </div>
              <div className="cartTotalBlock">
              <ul>
                <li>
                  <span>Итого:</span>
                  <div></div>
                  <b>12 205 руб.</b>
                </li>
                <li>
                  <span>Налог 5%:</span>
                  <div></div>
                  <b>12 205 руб.</b>
                </li>
              </ul>
              <button className="greenButton">Оформить заказ <img src="/img/arrow.svg"/></button>
              </div>
            </div>
    );
}
export default Drawer;