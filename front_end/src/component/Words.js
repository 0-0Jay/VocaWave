import { useNavigate } from 'react-router-dom';
import Item from './Item';
import Wordtest from './Wordtest';
import ItemList from './ItemList';
import AddWord from './AddWord';

function Words() {
    const navigate = useNavigate();
    return (
        <div className='bg-base-300 p-10 pt-24'>
            <div className="flex place-items-center">
                <div className="container flex place-items-center">
                    <button className="btn btn-circle btn-ghost">❮</button>
                    <Item />
                    <button className="btn btn-circle btn-ghost">❯</button>
                </div>
                <div className='m-10 w-60 h-96'>
                    <p className="font-bold text-2xl">단어장 제목</p>
                    <p className="text-xs m-1 text-slate-500">단어 수</p>
                    <p>단어장 설명 긴설명 테스트ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ</p>
                </div>
            </div>
            <div className="flex place-items-center justify-between">
                <div className="items-center text-center m-10">
                    <p className="font-bold m-3">공유 코드</p>
                    <input type="text" value="123456" className="input input-bordered text-slate-500 text-center bg-base-300" readOnly />
                    <p className="text-xs m-1 text-slate-500">복사해서 사용하세요</p>
                </div>
                <div className="place-items-center m-auto mx-24">
                    <div className="items-center text-center">
                        <p className="font-bold text-2xl m-2">학습률</p>
                        <div className="radial-progress" style={{ "--value": 70, "--size": "16rem" }} role="progressbar">
                            <p className="font-bold">70%</p>
                        </div>
                    </div>
                </div>
                <div className="items-center text-center m-10">
                    <button className="btn btn-primary w-64 m-2" onClick={()=>document.getElementById('wordtest').showModal()}>단어 테스트</button><br />
                    <dialog id="wordtest" className="modal"><Wordtest /></dialog>
                    <button className="btn btn-primary w-64 m-2" onClick={()=>document.getElementById('addword').showModal()}>단어 추가</button><br />
                    <dialog id="addword" className="modal"><AddWord /></dialog>
                    <button className="btn btn-primary w-64 m-2" onClick={()=>document.getElementById('itemlist').showModal()}>단어 리스트</button><br />
                    <dialog id="itemlist" className="modal"><ItemList /></dialog>
                    <button className="btn btn-primary w-64 m-2" onClick={() => { navigate("/mywordlist") }}>목록으로</button>
                </div>
            </div>

        </div>
    )
}

export default Words;