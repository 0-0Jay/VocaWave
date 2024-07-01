function Wordtest() {
    return (
        <div className="modal-box w-11/12 max-w-5xl">
            <h3 className="font-bold text-lg">단어 테스트</h3>
            <p className="py-4">Click the button below to close</p>
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