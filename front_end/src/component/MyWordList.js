import WordListCard from './WordListCard';

function MyWordList() {
    return (
        <div className="bg-base-300 p-10 pt-24">
            <div className='card-body items-center text-center'>
                <h1 className="text-2xl font-bold pb-5">나의 단어장</h1>
                <div className='flex'>
                    <div className="input input-bordered flex items-center gap-2 w-96 bg-white">
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
                    </div>
                    <div>
                        <button className="btn btn-ghost ma">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className='h-6 w-6 opacity-70'
                                id="add-new-file">
                                <path
                                    fillRule="evenodd"
                                    d="M20,18H19V17a1,1,0,0,0-2,0v1H16a1,1,0,0,0,0,2h1v1a1,1,0,0,0,2,0V20h1a1,1,0,0,0,0-2Zm-7,2H6a1,1,0,0,1-1-1V5A1,1,0,0,1,6,4h5V7a3,3,0,0,0,3,3h3v3a1,1,0,0,0,2,0V9s0,0,0-.06a1.31,1.31,0,0,0-.06-.27l0-.09a1.07,1.07,0,0,0-.19-.28h0l-6-6h0a1.07,1.07,0,0,0-.28-.19.29.29,0,0,0-.1,0A1.1,1.1,0,0,0,12.06,2H6A3,3,0,0,0,3,5V19a3,3,0,0,0,3,3h7a1,1,0,0,0,0-2ZM13,5.41,15.59,8H14a1,1,0,0,1-1-1ZM8,8a1,1,0,0,0,0,2H9A1,1,0,0,0,9,8Zm5,8H8a1,1,0,0,0,0,2h5a1,1,0,0,0,0-2Zm1-4H8a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2Z"
                                    clipRule="evenodd" />
                            </svg>
                            새 단어장 추가
                        </button>
                        <button className="btn btn-ghost">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className='h-6 w-6 opacity-70'
                                id="trash">
                                <path
                                    fillRule="evenodd"
                                    d="M10,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,10,18ZM20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Zm-3-1a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,14,18Z"
                                    clipRule="evenodd" />
                            </svg>
                            단어장 삭제
                        </button>
                    </div>
                </div>
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
            </div>
            <div className="flex justify-center pt-5 pb-5">
                <button className="btn btn-ghost mr-24">«</button>
                <button className="btn btn-ghost w-16">page num</button>
                <button className="btn btn-ghost ml-24">»</button>
            </div>
        </div>
    )
}

export default MyWordList;