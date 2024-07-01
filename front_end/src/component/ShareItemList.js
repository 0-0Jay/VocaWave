import ItemListRow from "./ItemListRow";

function ShareItemList() {
    return (
        <div className="modal-box w-3/5 max-w-5xl h-5/6">
            <h3 className="font-bold text-lg">단어 리스트 제목</h3>
            <div className="flex">
                <div className="overflow-x-auto w-11/12" style={{height:'31rem'}}>
                    <table className="table table-xs table-pin-rows table-pin-cols table-zebra text-center">
                        <thead>
                            <tr>
                                <th className="w-10">No.</th>
                                <td className="w-30">Word</td>
                                <td className="w-50">Mean</td>
                            </tr>
                        </thead>
                        <tbody>
                            <ItemListRow />
                            <ItemListRow />
                            <ItemListRow />
                            <ItemListRow />
                            <ItemListRow />
                            <ItemListRow />
                            <ItemListRow />
                            <ItemListRow />
                            <ItemListRow />
                            <ItemListRow />
                            <ItemListRow />
                            <ItemListRow />
                            <ItemListRow />
                            <ItemListRow />
                            <ItemListRow />
                            <ItemListRow />
                            <ItemListRow />
                            <ItemListRow />
                            <ItemListRow />
                            <ItemListRow />
                            <ItemListRow />
                            <ItemListRow />
                            <ItemListRow />
                            <ItemListRow />
                            <ItemListRow />
                            <ItemListRow />
                            <ItemListRow />
                            <ItemListRow />
                            <ItemListRow />
                            <ItemListRow />
                            <ItemListRow />
                            <ItemListRow />
                            <ItemListRow />
                            <ItemListRow />
                            <ItemListRow />
                            <ItemListRow />
                        </tbody>
                    </table>
                </div>
                <div className="card-body">
                    <h2 className="card-title">단어장 제목</h2>
                    <h3 className="text-xs m-1 text-slate-500">단어 수</h3>
                    <p>단어장 설명---------------------------------------------------------------------------------------------------</p>
                    <div className="items-center text-center m-10">
                        <button className="btn btn-primary w-48 m-2">추천하기</button><br />
                        <p className="font-bold m-3">공유 코드</p>
                        <input type="text" value="123456" className="input input-bordered text-slate-500 text-center bg-base-300 w-48" readOnly />
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