import React from 'react'

const Aside = () => {
    return (
        <div className='aside'>
            <h2>UMzzzzal..</h2>
            <input type="text" id="searchInput" placeholder="원하는 움짤 태그를 검색해주세요." title="검색" required />
            <h3>카테고리</h3>

            <div className="category">
                <ul>
                    <li>
                        <img src="img/popular.svg" alt="popular" />
                        인기
                    </li>
                    <li>
                        <img src="img/emotion.svg" alt="emotion" />
                        감정
                    </li>
                    <li>
                        <img src="img/famous.svg" alt="famous" />
                        유명
                    </li>
                    <li>
                        <img src="assets/img/mim.svg" alt="mim" />
                        밈
                    </li>
                </ul>
            </div>

            <div id="footer">
                <h2>UMzzzzal..</h2>
                <div className="img">
                    <img src="img/insta.svg" alt="insta" />
                    <img src="img/face.svg" alt="face" />
                    <img src="img/twitter.svg" alt="twitter" />
                </div>
                <div className="footer__desc">
                    <p>@2022 copyright</p>
                    <p>Privacy Policy</p>
                    <p>Agreement</p>
                </div>
            </div>
        </div>
    )
}

export default Aside