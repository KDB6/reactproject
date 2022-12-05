import React from 'react'

const SubList = () => {
  return (
    <div className="contents">
      <div id="subList">
        <div className="subList">
            <div className="subList__list">
                <div className="list__img">
                    <img src="img/sub/horse.jpg" alt="리스트 움짤" />
                </div>
                <div className="list__desc">
                    <h2>제목 : 말이 미친듯이 웃는다..</h2>
                    <div className="list__tag">
                        <h2>TAG!</h2>
                        <ul>
                            <li>#미친</li>
                            <li>#웃음</li>
                        </ul>
                    </div>
                    <div className="list__good__share">
                        <div className="list__good">
                            <img src="img/sub/good.svg" alt="좋아요" />
                            <p>좋아요! : <span>00</span>개</p>
                        </div>
                        <div className="list__share">
                            <img src="img/sub/share.svg" alt="공유하기" />
                            <p>공유하기!</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="subList__list">
                <div className="list__img">
                    <img src="img/sub/horse.jpg" alt="리스트 움짤" />
                </div>
                <div className="list__desc">
                    <h2>제목 : 말이 미친듯이 웃는다..</h2>
                    <div className="list__tag">
                        <h2>TAG!</h2>
                        <ul>
                            <li>#미친</li>
                            <li>#웃음</li>
                        </ul>
                    </div>
                    <div className="list__good__share">
                        <div className="list__good">
                            <img src="img/sub/good.svg" alt="좋아요" />
                            <p>좋아요! : <span>00</span>개</p>
                        </div>
                        <div className="list__share">
                            <img src="img/sub/share.svg" alt="공유하기" />
                            <p>공유하기!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default SubList