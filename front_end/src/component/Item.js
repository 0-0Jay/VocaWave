function Item({ }) {
    return (
        <div className="diff aspect-[16/9]">
            <div className="diff-item-1">
                <div className="bg-base-100 text-primary-content grid place-content-center text-5xl font-black">
                    영어
                </div>
            </div>
            <div className="diff-item-2">
                <div className="bg-base-200 grid place-content-center text-5xl font-black">english</div>
            </div>
            <div className="diff-resizer"></div>
        </div>
    )
}

export default Item;