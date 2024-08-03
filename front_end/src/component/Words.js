import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import axios from 'axios';
import Item from './Item';
import Wordtest from './Wordtest';
import AddWord from './AddWord';
import Header from './Header';
import ItemListRow from './ItemListRow';

function Words() {
    const navigate = useNavigate();
    const [cookie] = useCookies();
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

    const deleteList = async () => {
        if (window.confirm("정말 삭제하시겠습니까?") === true) {
            await axios.get(
                'http://localhost:8099/main/delete/' + wcode
            ).then(response => {
                console.log(response.data);
                navigate("/mywordlist");
            }).catch(error => {
                console.log(error);
            });
        }
    }

    const shareList = async () => {
        if (window.confirm("이 단어장을 공유하시겠습니까?") === true) {
            await axios.post(
                'http://localhost:8099/share/update',
                { code: wcode, nick: cookie.login.nick }
            ).then(response => {
                console.log(response.data);
                if (response.data.result === true) {
                    alert("공유되었습니다!");
                } else {
                    alert("이미 공유 중인 단어장입니다.");
                }
            }).catch(error => {
                console.log(error);
            })
        }
    }

    return (
        <>
            <Header />
            <div className='bg-base-300 p-10 pt-24'>
                <div className="flex place-items-center">
                    {size > 0 ? (
                        <div className="container flex place-items-center" style={{ width: '900px' }}>
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
                    <div>
                        <h3 className="font-bold text-lg">단어 리스트</h3>
                        <div className="overflow-x-auto h-96">
                            <table className="table table-xs table-pin-rows table-pin-cols table-zebra text-center">
                                <thead>
                                    <tr>
                                        <th className="w-5">No.</th>
                                        <td className="w-52">Word</td>
                                        <td className="w-72">Mean</td>
                                        <td className="w-5">수정</td>
                                        <td className="w-5">삭제</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {wordlist.map((it, index) => (<ItemListRow key={it.wordcode} wordcode={it.wordcode} num={index} code={wcode} word={it.word} mean={it.mean} />))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="flex place-items-center justify-between">
                    <div className="items-center text-center m-10" style={{ width: '400px' }}>
                        <div>
                            <p className="font-bold text-2xl">{title}</p>
                            <p className="text-xs m-1 text-slate-500">{wcnt} 개</p>
                            <p style={{ textAlign: 'left', overflow: 'hidden', wordWrap: 'break-word', whiteSpace: 'normal' }}>{wcmt}</p>
                        </div>
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
                        <button className="btn btn-primary w-64 m-2" onClick={shareList}>단어장 공유</button>
                        <button className="btn btn-primary w-64 m-2" onClick={deleteList}>단어장 삭제</button>
                        <button className="btn btn-primary w-64 m-2" onClick={() => { navigate("/mywordlist") }}>목록으로</button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Words;