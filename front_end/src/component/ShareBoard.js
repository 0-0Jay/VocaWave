import WordListCard from "./WordListCard";

function ShareBoard() {
    return (
        <div className="bg-white">
            <div className="h-16"></div>
            <h1 className="text-2xl font-bold pl-40 mt-5">단어장 공유</h1>
            <br />
            <div className='flex'>
                <label className="input input-bordered flex items-center gap-2 w-96 ml-40 pr-0 bg-white">
                    <input type="text" className="grow" placeholder="검색어를 입력하세요." />
                    <button className="btn btn-ghost">
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
                </label>
            </div>
            <br />
            <div className='flex justify-center'>
                <div className="inline-grid grid-cols-3 gap-4">
                    <WordListCard />
                    <WordListCard />
                    <WordListCard />
                    <WordListCard />
                    <WordListCard />
                    <WordListCard />
                </div>
            </div>
            <div className="flex justify-center pt-5 pb-5">
                <button className="btn btn-ghost mr-24">«</button>
                <button className="btn btn-ghost w-16">page num</button>
                <button className="btn btn-ghost ml-24">»</button>
            </div>
        </div>
    )
}

export default ShareBoard;