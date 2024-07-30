import ItemListRow from "./ItemListRow";

function ItemList({ code, list, updateWord }) {
    return (
        <div className="modal-box w-3/5 max-w-5xl">
            <h3 className="font-bold text-lg">단어 리스트</h3>
            <div className="overflow-x-auto h-96">
                <table className="table table-xs table-pin-rows table-pin-cols table-zebra text-center">
                    <thead>
                        <tr>
                            <th className="w-5">No.</th>
                            <td className="w-40">Word</td>
                            <td className="w-50">Mean</td>
                            <td className="w-5">수정</td>
                            <td className="w-5">삭제</td>
                        </tr>
                    </thead>
                    <tbody>
                        {list.map((it, index) => (<ItemListRow key={it.wordcode} wordcode={it.wordcode} num={index} code={code} word={it.word} mean={it.mean} updateWord={updateWord}/>))}
                    </tbody>
                </table>
            </div>
            <div className="modal-action">
                <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => {window.location.reload()}}>✕</button>
                </form>
            </div>
        </div>
    )
}

export default ItemList;