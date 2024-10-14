const Card = ({ children }) => {

    return <div className="w-screen h-screen bg-slate-900">
        <div className="w-[480px] mx-auto py-12 px-16 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-white rounded shadow-xl">
            <div className="flex items-center mb-6 justify-center">
                <h1 className="text-3xl ml-2 font-bold">帳號登入</h1>
            </div>
            {children}
        </div>
    </div>
}

export default Card;
