import Card from './components/Card'
import Header from './components/Header'

function App() {
  return (
        <div className="wrapper clear">
          <div style={{display:'none'}} className="overlay">
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
          </div>
          <Header/>
          <div className="content p-40">
            <div className="d-flex align-center justify-between mb-40">
              <h1>Все кроссовки</h1>
              <div className="search-block">
                <img src="/img/search.svg"/>
                <input placeholder="Поиск..."/>
              </div>
            </div>
            
            <div className="d-flex">
              <Card/>
            <div className="card">
              <img width={133} height={112} src="/img/sneakers/2.jpg" alt=""/>
              <h5>Мужские Кроссовки Nike Air Max 270</h5>
              <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                  <span>Цена:</span>
                  <b>12 999 руб.</b>
                </div>
                <button className="button">
                  <img src="/img/btn-plus.svg" alt=""/>
                </button>
              </div>
            </div>
            <div className="card">
              <img width={133} height={112} src="/img/sneakers/3.jpg" alt=""/>
              <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
              <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                  <span>Цена:</span>
                  <b>12 999 руб.</b>
                </div>
                <button className="button">
                  <img src="/img/plus.svg" alt="" width={11} height={11}/>
                </button>
              </div>
            </div>
            <div className="card">
              <img width={133} height={112} src="/img/sneakers/4.jpg" alt=""/>
              <h5>Кроссовки Puma X Aka Boku Future Rider</h5>
              <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                  <span>Цена:</span>
                  <b>12 999 руб.</b>
                </div>
                <button className="button">
                  <img src="/img/plus.svg" alt="" width={11} height={11}/>
                </button>
              </div>
            </div>
            </div>
          </div>
        </div>
  );
}

export default App;