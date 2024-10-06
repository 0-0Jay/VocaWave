import { useEffect, useRef, useState } from "react";
import axios from 'axios';

function Wordtest({ code, wordlist, setRate }) {
    const [, setTestWord] = useState([]);
    const [score, setScore] = useState([]);
    const test = useRef([]);

    const reloadTest = () => {
        setScore([]);
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
    }

    useEffect(() => {
       reloadTest();
    }, [wordlist]);

    const writeAnswer = (e) => {
        test.current[e.target.id][e.target.name] = e.target.value;
    }

    const submit = async () => {
        console.log(test);
        await axios.post(
            'http://192.168.35.243:8000/main/test',
            { list: test.current, code: code }
        ).then(response => {
            setScore(response.data.score);
            setRate(response.data.rate);
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })
    }

    return (
        <div className="modal-box w-11/12 max-w-5xl">
            {score.length === 0 ? (
                <div>
                    <h3 className="font-bold text-lg">테스트</h3>
                    <table className="table table-xs table-pin-rows table-pin-cols table-zebra text-center">
                        <thead>
                            <tr>
                                <th className="w-10">No.</th>
                                <td className="w-20">Word</td>
                                <td className="w-20">Mean</td>
                            </tr>
                        </thead>
                        <tbody>
                            {test.current.map((it, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{it.word ? (it.word) : (<input className="w-30" id={index} name="word" onChange={writeAnswer}></input>)}</td>
                                    <td>{it.mean ? (it.mean) : (<input className="w-50" id={index} name="mean" onChange={writeAnswer}></input>)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="pt-2">
                        <button className="btn btn-primary" onClick={submit}>제출하기</button>
                    </div>
                </div>
            ) : (
                <div>
                    <h3 className="font-bold text-lg">채점 결과</h3>
                    <table className="table table-xs table-pin-rows table-pin-cols table-zebra text-center">
                        <thead>
                            <tr>
                                <th className="w-10">No.</th>
                                <td className="w-20">submit</td>
                                <td className="w-20">answer</td>
                                <td className="w-10">O/X</td>
                            </tr>
                        </thead>
                        <tbody>
                            {score.map((it, index) => (
                                <tr key={index}>
                                    <th className="w-10">{index + 1}</th>
                                    <td className="w-20">{it.submit}</td>
                                    <td className="w-20">{it.ans.substring(1)}</td>
                                    <td className="w-10">{it.ox}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
            <div className="modal-action">
                <form method="dialog">
                    {/* if there is a button, it will close the modal */}
                    <button className="btn" onClick={reloadTest}>Close</button>
                </form>
            </div>
        </div>
    )
}

export default Wordtest;