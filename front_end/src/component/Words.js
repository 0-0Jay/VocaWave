import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Item from './Item';
import Wordtest from './Wordtest';
import ItemList from './ItemList';
import AddWord from './AddWord';
import Header from './Header';

function Words() {
    const navigate = useNavigate();
    const { wcode, title, wcnt, wcmt, wrate } = useLocation().state || {};
    const [wordlist, setWordlist] = useState([]);
    const [index, setIndex] = useState(0);
    const size = wordlist.length

    useEffect(() => {
        const list = async () => {
            await axios.get(
                'http://localhost:8099/main/words/' + wcode
            ).then(response => {
                setWordlist(response.data.words);
                console.log(response.data)
            }).catch(error => {
                console.log(error);
            });
        };
        list();
    }, [wcode]);

    const clickButton = (e) => {
        if (e.target.name === "left") {
            setIndex(id => (id + (size - 1)) % size)
        } else {
            setIndex(id => (id + 1) % size)
        }
    }

    return (
        <>
            <Header />
            <div className='bg-base-300 p-10 pt-24'>
                <div className="flex place-items-center">
                    {size > 0 ? (
                        <div className="container flex place-items-center">
                            <button name="left" className="btn btn-circle btn-ghost" onClick={clickButton}>❮</button>
                            <Item word={wordlist[index].word} mean={wordlist[index].mean} />
                            <button name="right" className="btn btn-circle btn-ghost" onClick={clickButton}>❯</button>
                        </div>
                    ) : (
                        <div className="container flex place-items-center">
                            <button name="left" className="btn btn-circle btn-ghost">❮</button>
                            <Item word="단어가 없습니다." mean="단어가 없습니다." />
                            <button name="right" className="btn btn-circle btn-ghost">❯</button>
                        </div>
                    )}
                    <article className='m-10 w-60 h-96 text-balance'>
                        <p className="font-bold text-2xl">{title}</p>
                        <p className="text-xs m-1 text-slate-500">{wcnt} 개</p>
                        <p>{wcmt}</p>
                    </article>
                </div>
                <div className="flex place-items-center justify-between">
                    <div className="items-center text-center m-10">
                        <p className="font-bold m-3">공유 코드</p>
                        <input type="text" value={wcode} className="input input-bordered text-slate-500 text-center bg-base-300" readOnly />
                        <p className="text-xs m-1 text-slate-500">복사해서 사용하세요</p>
                    </div>
                    <div className="place-items-center m-auto mx-24">
                        <div className="items-center text-center">
                            <p className="font-bold text-2xl m-2">학습률</p>
                            <div className="radial-progress" style={{ "--value": wrate, "--size": "16rem" }} role="progressbar">
                                <p className="font-bold">{wrate}%</p>
                            </div>
                        </div>
                    </div>
                    <div className="items-center text-center m-10">
                        <button className="btn btn-primary w-64 m-2" onClick={() => document.getElementById('wordtest').showModal()}>단어 테스트</button><br />
                        <dialog id="wordtest" className="modal"><Wordtest /></dialog>
                        <button className="btn btn-primary w-64 m-2" onClick={() => document.getElementById('addword').showModal()}>단어 추가</button><br />
                        <dialog id="addword" className="modal"><AddWord setWordlist={setWordlist} code={wcode} /></dialog>
                        <button className="btn btn-primary w-64 m-2" onClick={() => document.getElementById('itemlist').showModal()}>단어 리스트</button><br />
                        <dialog id="itemlist" className="modal"><ItemList code={wcode} list={wordlist} /></dialog>
                        <button className="btn btn-primary w-64 m-2" onClick={() => { navigate("/mywordlist") }}>목록으로</button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Words;