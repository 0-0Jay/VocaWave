import { useEffect, useRef, useState } from "react";
import axios from 'axios';

function Wordtest({ wordlist }) {
    const [, setTestWord] = useState([]);
    const test = useRef([]);
    useEffect(() => {
        const list = wordlist.map(item => {
            const random = Math.random() > 0.5;
            const addWord = { word: '', mean: '', ans: '' };
            if (random === true) {
                addWord.mean = item.mean;
                addWord.ans = "W" + item.word;
            } else {
                addWord.word = item.word;
                addWord.ans = "M" + item.mean;
            }
            return addWord;
        });
        setTestWord(list);
        test.current = list;
    }, [wordlist]);

    const writeAnswer = (e) => {
        test.current[e.target.id][e.target.name] = e.target.value;
    }

    const submit = async () => {
        console.log(test);
        await axios.post(
            'http://localhost:8000/main/test',
            test.current
        ).then(response => {
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })
    }

    return (
        <div className="modal-box w-11/12 max-w-5xl">
            <h3 className="font-bold text-lg">테스트</h3>
            <table className="table table-xs table-pin-rows table-pin-cols table-zebra text-center">
                <thead>
                    <tr>
                        <th className="w-10">No.</th>
                        <td className="w-30">Word</td>
                        <td className="w-50">Mean</td>
                    </tr>
                </thead>
                <tbody>
                    {test.current.map((it, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{it.word ? (it.word) : (<input id={index} name="word" onChange={writeAnswer}></input>)}</td>
                            <td>{it.mean ? (it.mean) : (<input id={index} name="mean" onChange={writeAnswer}></input>)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div>
                <button className="btn btn-primary" onClick={submit}>제출하기</button>
            </div>
            <div className="modal-action">
                <form method="dialog">
                    {/* if there is a button, it will close the modal */}
                    <button className="btn">Close</button>
                </form>
            </div>
        </div>
    )
}

export default Wordtest;