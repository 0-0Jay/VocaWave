
function WordListCard({ wtitle, cnt, cmt, rate, nick }) {
    return (
        <button className="btn btn-ghost m-0 p-0 rounded-2xl text-left" style={{ width: "280px", height: "210px" }}>
            <div className="card bg-base-100 p-0 m-0 shadow-xl rounded-2xl" style={{ border: '2px solid #DFD3B0', width: "280px", height: "210px" }}>
                <div className="card-body">
                    <h2 className="card-title">{wtitle}</h2>
                    <div className="flex">
                        <div style={{ overflowWrap: 'break-word', wordBreak: 'break-word' }}>
                            <p className="pb-2" style={{ fontSize: '10px', color: 'gray' }}>{cnt}개</p>
                            <p style={{ width: "135px", padding: "0px 10px 0px 0px" }}>{cmt}</p>
                        </div>
                        {rate !== null ? (
                            <div style={{ textAlign: 'center', margin: '0 auto' }}>
                                <p className="mb-3 p-0" style={{ fontWeight: 'bold' }} >학습률</p>
                                <div className="radial-progress" style={{ "--value": rate }} role="progressbar">
                                    <p style={{ fontWeight: 'bold' }}>{rate}%</p>
                                </div>
                            </div>
                        ) : (
                            <div style={{ textAlign: 'center', margin: '0 auto' }}>
                                <p className="mb-3 p-0" style={{ fontWeight: 'bold' }} >제작자</p>
                                <p style={{ fontWeight: 'bold' }}>{nick}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </button>
    )
}

export default WordListCard;