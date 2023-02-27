import Link from "next/link";

const SignUp_2 = () => {
  return (
    <div>
      <article className="text-xs text-center py-8 px-4 max-w-md mx-auto border shadow-md mt-32 ">
        <section className="">
          <h1 className=" text-base font-semibold text-gray-600">
            お客さま情報<span className=" text-sm text-gray-400 ml-2">(住所・電話番号)</span>
          </h1>
          <hr className=" border-gray-500 mt-2" />
        </section>

        <section className=" text-left">

          <div className=" space-y-2 bg-white border border-gray-50 p-4 mt-2">
            <dl className=" flex items-center gap-2 border-b pb-2">
              <dt className=" w-52 text-gray-400 py-4 px-4">郵便番号<br /><span className=" text-xs text-red-300">※必須</span></dt>
              <dd className=" w-full py-4 px-4">107-0061</dd>
            </dl>
            <dl className=" flex items-center gap-2 pb-2">
              <dt className=" w-52 text-gray-400 py-4 px-4">住所<br /><span className=" text-xs text-red-300">※必須</span></dt>
              <dd className=" w-full py-4 px-4">東京都港区北青山-7-20</dd>
            </dl>
          </div>
        </section>
        <div className=" flex justify-center gap-4 mt-8">
        <Link href='/user/signup/signUp_1'>
          <button className=" bg-white text-gray-300 border  border-gray-300 py-2 px-6">前へ</button>
          </Link>
            <Link href='/user/signup/signUp_3'>
          <button className=" bg-sky-500 text-white py-2 px-6">次へ</button>
          </Link>
        </div>
      </article>
    </div>
  );
};

export default SignUp_2;
