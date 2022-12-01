import React from 'react'

const SubView = () => {
    return (
      <div id="subView">
        <div className="sub__main">
            <div className="sub__main__img">
                <img src="assets/img/sub/horse.jpg" alt="움짤사진" />
            </div>
            <div className="sub__main__desc">
                <h2>제목 : 말이 미친듯이 웃는다..</h2>
                <div className="good__share">
                    <div className="good">
                        <img src="assets/img/sub/good.svg" alt="좋아요" />
                        <p>좋아요! : <span>00</span>개</p>
                    </div>
                    <div className="share">
                        <img src="assets/img/sub/share.svg" alt="공유하기" />
                        <p>공유하기!</p>
                    </div>
                </div>
                <div className="sub__main__tag">
                <h2>TAG!</h2>
                    <ul>
                        <li>#웃음</li>
                        <li>#웃음</li>
                        <li>#웃음</li>
                        <li>#웃음</li>
                        <li>#웃음</li>
                    </ul>
                    <ul>
                        <li>#웃음</li>
                        <li>#웃음</li>
                        <li>#웃음</li>
                        <li>#웃음</li>
                        <li>#웃음</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SubView