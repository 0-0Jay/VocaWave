import { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import img1 from '../img/home_img1.jpg';
import img2 from '../img/home_img2.jpg';
import Header from './Header';

function Home() {
    const [cookie] = useCookies([]);
    const navigate = useNavigate();

    return (
        <div className="bg-base-100">
            <Header />
            <div style={{height:'70px'}}></div>
            <div className="hero bg-base-300">
                <div className="hero-content flex-col lg:flex-row-reverse" >
                    <img src={img2} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold" >나만의 단어장 생성</h1>
                        <p className="py-6">
                            간단한게 단어장을 만들고, 학습에 활용하세요. 어떤 분야에서도 활용할 수 있습니다.
                        </p>
                        <button className="btn btn-primary" onClick={() => {navigate('/mywordlist')}}>단어장 제작하기</button>
                    </div>
                </div>
            </div>
            <div className="hero bg-base-200">
                <div className="hero-content flex-col lg:flex-row" >
                    <img src={img1} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">좋은 단어장 탐색</h1>
                        <p className="py-6">
                            매번 새 단어장을 직접 만들지 않아도 됩니다. 다른 사람의 단어장을 공유받아 사용할 수 있습니다.
                        </p>
                        <button className="btn btn-primary" onClick={() => {navigate('/shareboard')}}>단어장 찾아보기</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;