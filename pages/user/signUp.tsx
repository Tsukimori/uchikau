

const SignUp = () => {
    return (
        <div>
            <article className="text-xs text-center py-8 px-4 max-w-sm mx-auto border shadow-md mt-32 ">
                <section className="">
                    <h1 className=" text-base font-semibold text-gray-600">
                        希望条件登録
                    </h1>
                    <hr className=" border-gray-500 mt-2" />
                </section>

                <section className=" text-center">

                    <div className=" w-full text-center mt-4">
                        <p className="text-sm bg-gray-100 py-4 px-8">購入時期</p>
                        <div className=" my-4">
                            <select
                                className=" border border-gray-500 py-4 px-8"
                                name="date"
                                id=""
                            >
                                <option value="">選択してください。</option>
                                <option value="">すぐに</option>
                                <option value="">1ヶ月〜3ヶ月以内</option>
                                <option value="">3ヶ月〜6ヶ月以内</option>
                            </select>
                        </div>
                    </div>
                </section>
                <div className=" mt-8">
                    <button className=" bg-sky-500 text-white py-2 px-6">次へ</button>
                </div>
            </article>
        </div>
    )
}

export default SignUp