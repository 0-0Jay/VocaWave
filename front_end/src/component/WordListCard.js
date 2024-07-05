import { useNavigate } from 'react-router-dom';

function WordListCard({wtitle, cnt, cmt, rate}) {
    const navigate = useNavigate();

    const selectWords = () => {
        navigate("/words");
    }

    return (
        <a className="btn btn-ghost w-72 h-52 m-0 p-0 rounded-2xl text-left" onClick={selectWords}>
            <div className="card bg-base-100 w-80 h-52 p-0 m-0 shadow-xl rounded-2xl" style={{ border: '2px solid #DFD3B0' }}>
                <div className="card-body">
                    <h2 className="card-title">{wtitle}</h2>
                    <div className="flex">
                        <div>
                            <p className="pb-2" style={{ fontSize: '10px', color: 'gray'}}>{cnt}개</p>
                            <p>{cmt}</p>
                        </div>
                        <div style={{ textAlign: 'center', margin: '0px 0px 0px 5px' }}>
                            <p className="mb-3 p-0" style={{ fontWeight: 'bold'}} >학습률</p>
                            <div className="radial-progress" style={{ "--value": rate }} role="progressbar">
                                <p style={{ fontWeight: 'bold' }}>{rate}%</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    )
}

export default WordListCard;