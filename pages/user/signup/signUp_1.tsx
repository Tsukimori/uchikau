import Link from "next/link";

const SignUp_1 = () => {
  return (
    <div>
      <article className="text-xs text-center py-8 px-4 max-w-md mx-auto border shadow-md mt-32 ">
        <section className="">
          <h1 className=" text-base font-semibold text-gray-600">
            お客さま情報 <span className=" text-sm text-gray-400 ml-2">(氏名・ニックネーム)</span>
          </h1>
          <hr className=" border-gray-500 mt-2" />
        </section>

        <section className=" text-left">

          <div className=" text-sm space-y-2 bg-white border border-gray-50 p-4 mt-2">
            <dl className=" flex items-center gap-2 border-b pb-2">
              <dt className=" w-52 text-gray-400 py-4 px-4">お名前 <br /><span className=" text-xs text-red-300">※必須</span></dt>
              <dd className=" w-full py-4 px-4">山田 太郎</dd>
            </dl>
            <dl className=" flex items-center border-b gap-2 pb-2">
              <dt className=" w-52 text-gray-400 py-4 px-4">フリガナ<br /><span className=" text-xs text-red-300">※必須</span></dt>
              <dd className=" w-full py-4 px-4">ヤマダ タロウ</dd>
            </dl>
            <dl className=" flex items-center gap-2 pb-2">
              <dt className=" w-52 text-gray-400 py-4 px-4">ニックネーム<br /><span className=" text-xs text-red-300">※必須</span></dt>
              <dd className=" w-full py-4 px-4">ヤマタロ</dd>
            </dl>
          </div>
        </section>
        <div className=" mt-8">

            <Link href='/user/signup/signUp_2'>
          <button className=" bg-sky-500 text-white py-2 px-6">次へ</button>
          </Link>
        </div>
      </article>
    </div>
  );
};

export default SignUp_1;
