function AddWord() {
    return (
        <div className="modal-box w-2/5 max-w-5xl">
            <h3 className="font-bold text-lg pb-5">단어 추가</h3>
            <div className="collapse bg-base-200 items-center">
                <input type="radio" name="my-accordion-1" defaultChecked />
                <div className="collapse-title text-xl font-medium ml-4">직접 입력</div>
                <div className="collapse-content">
                    <div className="form-control p-2">
                        <input type="text" placeholder="단어" className="input input-bordered" required />
                    </div>
                    <div className="form-control p-2">
                        <textarea className="textarea textarea-bordered resize-none" placeholder="뜻 / 정의" required></textarea>
                    </div>
                    <button className="btn btn-primary w-24">추가하기</button>
                </div>
            </div>
            <div className="collapse bg-base-200">
                <input type="radio" name="my-accordion-1" />
                <div className="collapse-title text-xl font-medium ml-4">코드 입력</div>
                <div className="collapse-content">
                    <div className="form-control p-2 items-center">
                        <input type="text" placeholder="공유 코드" className="input input-bordered m-2 w-64" required />
                        <button className="btn btn-primary w-24">추가하기</button>
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

export default AddWord;