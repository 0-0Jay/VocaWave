import axios from "axios";
import { useEffect, useState } from "react";
import ItemListRow from "./ItemListRow";

function ShareItemList({wtitle, code, cnt, cmt, nick}) {
    const [words, setWords] = useState([]);

    const list = async() => {
        await axios.get(
            'http://localhost:8099/share/code/' + code
        ).then(response => {
            setWords(response.data.words);
            console.log(response.data)
        }).catch(error => {
            console.log(error);
        });
    }

    useEffect(() => {
        list();
    }, []);

    return (
        <div className="modal-box w-3/5 max-w-5xl h-5/6">
            <div className="flex">
                <div className="overflow-x-auto w-11/12" style={{ height: '31rem' }}>
                    <table className="table table-xs table-pin-rows table-pin-cols table-zebra text-center">
                        <thead>
                            <tr>
                                <th className="w-10">No.</th>
                                <td className="w-30">Word</td>
                                <td className="w-50">Mean</td>
                            </tr>
                        </thead>
                        <tbody>
                            {words.map((it, index) => (<ItemListRow key={it.wordcode} wordcode={it.wordcode} num={index} code={code} word={it.word} mean={it.mean} share={1}/>))}
                        </tbody>
                    </table>
                </div>
                <div className="card-body" style={{width:'350px'}}>
                    <h2 className="card-title">{wtitle}</h2>
                    <p>제작자 : {nick}</p>
                    <h3 className="text-xs m-1 text-slate-500">{cnt}</h3>
                    <p style={{ textAlign: 'left', overflow: 'hidden', wordWrap: 'break-word', whiteSpace: 'normal' }}>{cmt}</p>
                    <div className="items-center text-center m-10">
                        <p className="font-bold m-3">공유 코드</p>
                        <input type="text" value={code} className="input input-bordered text-slate-500 text-center bg-base-300 w-48" readOnly />
                        <p className="text-xs m-1 text-slate-500">복사해서 사용하세요</p>
                    </div>
                </div>
            </div>
            <div className="modal-action">
                <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
            </div>
        </div>
    )
}

export default ShareItemList;