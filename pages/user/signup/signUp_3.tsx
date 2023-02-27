import Link from "next/link";

const SignUp_3 = () => {
  return (
    <div>
      <article className="text-xs text-center py-8 px-4 max-w-md mx-auto border shadow-md mt-32 ">
        <section className="">
          <h1 className=" text-base font-semibold text-gray-600">
            お客さま情報
            <span className=" text-sm text-gray-400 ml-2">
              (性別・生年月日)
            </span>
          </h1>
          <hr className=" border-gray-500 mt-2" />
        </section>

        <section className=" text-left">
          <div className=" space-y-2 bg-white border border-gray-50 p-4 mt-2">
            <dl className=" flex items-center gap-2 border-b pb-2">
              <dt className=" w-52 text-gray-400 py-4 px-4">
                性別
                <br />
              </dt>
              <dd className=" w-full py-4 px-4">
                <select className="border py-4 px-4" name="" id="">
                  <option value="">男性</option>
                  <option value="">女性</option>
                  <option value="">その他</option>
                </select>
              </dd>
            </dl>
            <dl className=" flex items-center gap-2 pb-2">
              <dt className=" w-52 text-gray-400 py-4 px-4">
                生年月日
                <br />
              </dt>
              <dd className=" flex items-center gap-2 w-full py-4 px-4">
                <p className=" border py-4 px-8"></p>
                <span>年</span>
                <p className=" border py-4 px-4"></p>
                <span>月</span>
                <p className=" border py-4 px-4"></p>
                <span>日</span>
              </dd>
            </dl>
          </div>
        </section>
        <div className=" flex justify-center gap-4 mt-8">
          <Link href="/user/signup/signUp_2">
            <button className=" bg-white text-gray-300 border  border-gray-300 py-2 px-6">
              前へ
            </button>
          </Link>
          <Link href="/user/signup/signUp_4">
            <button className=" bg-sky-500 text-white py-2 px-6">次へ</button>
          </Link>
        </div>
      </article>
    </div>
  );
};

export default SignUp_3;
