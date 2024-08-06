import WordListCard from "./WordListCard";
import Header from './Header';
import axios from 'axios';
import { useState, useEffect } from "react";
import ShareItemList from "./ShareItemList";

function ShareBoard() {
    const [page, setPage] = useState(0);
    const [wordlist, setWordlist] = useState([]);
    const [query, setQuery] = useState('');

    const list = async () => {
        await axios.get(
            'http://localhost:8099/share/search?q=' + query
        ).then(response => {
            setWordlist(response.data.wordlist);
            console.log(response.data)
        }).catch(error => {
            console.log(error);
        });
    };

    useEffect(() => {
        list();
    }, []);

    const inputQuery = (e) => {
        setQuery(e.target.value);
        console.log(query);
    }

    const search = () => list();

    return (
        <>
            <Header />
            <div className="bg-base-300 p-10 pt-24">
                <div className='card-body items-center text-center'>
                    <h1 className="text-2xl font-bold pb-5">공유 단어장</h1>
                    <div className='flex'>
                        <div className="input input-bordered flex items-center gap-2 w-96 bg-white">
                            <input type="text" className="grow" placeholder="검색어를 입력하세요." onChange={inputQuery} />
                            <button className="btn btn-ghost" onClick={search}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    className="h-4 w-4 opacity-70">
                                    <path
                                        fillRule="evenodd"
                                        d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                        clipRule="evenodd" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <div className="inline-grid grid-cols-3 gap-4">
                        {wordlist.slice(page * 6, (page + 1) * 6).map(item => (
                            <div key={item.code} onClick={() => document.getElementById(item.code).showModal()}>
                                <WordListCard wtitle={item.stitle} cnt={item.cnt} cmt={item.contents} rate={null} nick={item.nick} />
                                <dialog id={item.code} className="modal">
                                    <ShareItemList code={item.code} wtitle={item.stitle} cnt={item.cnt} cmt={item.contents} nick={item.nick}/>
                                </dialog>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex justify-center pt-5 pb-5">
                    <button className="btn btn-ghost mr-24" onClick={() => { setPage(x => x - 1); console.log(page) }} disabled={page === 0}>«</button>
                    <button className="btn btn-ghost w-16">{page + 1}</button>
                    <button className="btn btn-ghost ml-24" onClick={() => { setPage(x => x + 1); console.log(page) }} disabled={(page + 1) * 6 > wordlist.length}>»</button>
                </div>
                {/* <br />
                <hr />
                <div className='card-body items-center text-center'>
                    <h1 className="text-2xl font-bold pb-5">추천 단어장</h1>
                </div>
                <div className='flex justify-center'>
                    <div className="inline-grid grid-cols-3 gap-4">
                        <WordListCard />
                        <WordListCard />
                        <WordListCard />
                        <WordListCard />
                        <WordListCard />
                        <WordListCard />
                    </div>
                </div> */}
            </div>
        </>
    )
}

export default ShareBoard;