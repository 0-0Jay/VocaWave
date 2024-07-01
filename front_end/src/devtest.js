import ShareItemList from "./component/ShareItemList";

function devtest() {
    return (
        <div className="pt-24">
            <button className="btn" onClick={() => document.getElementById('my_modal_3').showModal()}>open modal</button>
            <dialog id="my_modal_3" className="modal">
                <ShareItemList />
            </dialog>
        </div>
    )
}

export default devtest;