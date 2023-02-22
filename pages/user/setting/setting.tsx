import { Layout } from "../../../components/user/layout";

export default function UserSetting() {
  return (
    <Layout>
      <article className="text-xs py-8 px-4 md:w-3/4">
        <section>
          <h1 className=" text-lg font-semibold text-gray-600">マイページ</h1>
          <hr className=" border-gray-500 mt-2" />
        </section>

        <section className=" md:w-1/2 mt-8">
          <h2 className=" text-gray-600">基本情報</h2>
          <div className=" grid gap-2 w-full mt-4">
            <dl className=" flex items-center gap-2">
              <dt className=" w-52 bg-gray-200 py-4 px-4">お名前</dt>
              <dd className=" w-52 border py-4 px-4">山田 太郎</dd>
            </dl>
            <dl className=" flex items-center gap-2">
              <dt className=" w-52 bg-gray-200 py-4 px-4">ニックネーム</dt>
              <dd className=" w-52 border py-4 px-4">ヤマタロ</dd>
            </dl>
            <dl className=" flex items-center gap-2">
              <dt className=" w-52 bg-gray-200 py-4 px-4">メールアドレス</dt>
              <dd className=" w-52 border py-4 px-4">abc@abc.com</dd>
            </dl>

            <dl className=" flex items-center gap-2">
              <dt className=" w-52 bg-gray-200 py-4 px-4">性別</dt>
              <dd className=" w-52 border py-4 px-4">男性</dd>
            </dl>
            <dl className=" flex items-center gap-2">
              <dt className=" w-52 bg-gray-200 py-4 px-4">生年月日</dt>
              <dd className=" w-52 border py-4 px-4">1980年10月3日</dd>
            </dl>
            <dl className=" flex items-center gap-2">
              <dt className=" w-52 bg-gray-200 py-4 px-4">住所</dt>
              <dd className=" w-52 border py-4 px-4">東京都世田谷区</dd>
            </dl>
            <dl className=" flex items-center gap-2">
              <dt className=" w-52 bg-gray-200 py-4 px-4">電話番号</dt>
              <dd className=" w-52 border py-4 px-4">080-1234-5678</dd>
            </dl>

            <div className=" flex gap-4 mt-4 ">
              <div>
                <button className=" bg-green-600 text-white text-xs py-2 px-8 rounded-3xl ">
                  LINE連携済み
                </button>
              </div>
              <div className=" text-right"></div>
            </div>
          </div>
        </section>

        <section className=" md:w-1/2 mt-12">
          <h2 className=" text-gray-600">プラン</h2>
          <div className="w-full mt-4">
            <div className="py-4 px-4 text-left border mt-2">
              <h3>月額有料会員</h3>
              <h4 className=" mt-4">プランの有効期限</h4>
              <p className=" text-gray-400 text-[10px]">2023年3月31日</p>
              <h5 className=" mt-4">自動更新:オン</h5>

              <button className=" bg-red-600 text-white text-xs py-2 px-8 mt-2 rounded-3xl ">
                自動更新をオフにする
              </button>
            </div>
          </div>
        </section>

        <section className=" md:w-1/2 mt-12">
          <h2 className=" text-gray-600">お支払い方法</h2>
          <div className="w-full mt-4">
            <div className="py-4 px-4 text-left border mt-2">
              <p className=" text-gray-400 text-[10px] mt-2">
                3258-32XXXXX-XXXXXX
              </p>
            </div>
            <button className=" border text-xs py-2 px-8 mt-4 rounded-3xl ">
              お支払い方法を変更
            </button>
          </div>
        </section>
      </article>
    </Layout>
  );
}
