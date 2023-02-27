import Link from "next/link";

const SignUp_4 = () => {
  return (
    <div>
      <article className="text-xs text-center py-8 px-4 max-w-md mx-auto border shadow-md mt-32 ">
        <section className="">
          <h1 className=" text-base font-semibold text-sky-500">
            お客さまの基本情報の登録は完了いたしました。
          </h1>

          <h2 className=" text-sm mt-8">
            引き続き、希望条件のご登録をご希望の方は <br />
            下記よりお進みください。
          </h2>
          <div className=" mt-4">
            <Link href="/user/desired/addNew">
              <button className=" bg-sky-500 text-white py-2 px-6">
                希望条件登録へ
              </button>
            </Link>
          </div>
        </section>
        <section className=" mt-8">

          <h2 className=" mt-12">
          ダッシュボードへ移動される方はこちらから
          </h2>
          <div className=" mt-2">
            <Link href="/user/home">
              <button className=" bg-wite text-gray-500 border border-gray-500 py-2 px-6">
                ダッシュボードへ
              </button>
            </Link>
          </div>
        </section>
      </article>
    </div>
  );
};

export default SignUp_4;
