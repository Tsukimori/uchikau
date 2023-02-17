import { Layout } from "../../../components/layout";
import Link from "next/link";

export default function UserMyPage() {
  return (
    <Layout>
      <article className="text-xs py-8 px-4">
        <section>
          <h1 className=" text-base font-semibold text-gray-600">マイページ</h1>
          <hr className=" border-gray-500 mt-2" />
        </section>

        <section className="mt-8">
        <h2 className=" text-sm">基本情報</h2>
          <div className=" space-y-2 bg-white shadow-sm border border-gray-50 p-4 mt-2">
            <dl className=" flex items-center gap-2 border-b pb-2">
              <dt className=" w-44 text-gray-400 py-4 px-4">お名前</dt>
              <dd className=" w-full py-4 px-4">山田 太郎</dd>
            </dl>
            <dl className=" flex items-center gap-2 border-b pb-2">
              <dt className="  w-44 text-gray-400 py-4 px-4">ニックネーム</dt>
              <dd className=" w-full py-4 px-4">ヤマタロ</dd>
            </dl>
            <dl className=" flex items-center gap-2 border-b pb-2">
              <dt className=" w-44 text-gray-400 py-4 px-4">メールアドレス</dt>
              <dd className=" w-full py-4 px-4">abc@abc.com</dd>
            </dl>

            <dl className=" flex items-center gap-2 border-b pb-2">
              <dt className=" w-44 text-gray-400 py-4 px-4">性別</dt>
              <dd className=" w-full py-4 px-4">男性</dd>
            </dl>
            <dl className=" flex items-center gap-2 border-b pb-2">
              <dt className=" w-44 text-gray-400 py-4 px-4">生年月日</dt>
              <dd className=" w-full py-4 px-4">1980年10月3日</dd>
            </dl>
            <dl className=" flex items-center gap-2 border-b pb-2">
              <dt className=" w-44 text-gray-400 py-4 px-4">住所</dt>
              <dd className=" w-full py-4 px-4">
                東京都世田谷区成城8丁目10 成城ハウス401号
              </dd>
            </dl>
            <dl className=" flex items-center gap-2 border-b pb-2 mb-8">
              <dt className=" w-44 text-gray-400 py-4 px-4">電話番号</dt>
              <dd className=" w-full py-4 px-4">080-1234-5678</dd>
            </dl>

            <div className=" space-x-4">
              <button className=" bg-green-600 text-white text-xs py-2 px-6 rounded-3xl ">
                LINE連携済み
              </button>

              <button className=" bg-sky-500 text-white text-xs py-2 px-6 rounded-3xl ">
                <Link href="/user/myPage/detail">詳細情報</Link>
              </button>
            </div>
          </div>
        </section>

        <section className=" mt-12">
          <h2 className="text-sm">プラン</h2>
          <div className=" bg-white shadow-sm border border-gray-50 p-4 mt-4">
            <div className="py-4 px-4 text-left mt-2">
              <h3>月額有料会員</h3>
              <h4 className=" mt-4">プランの有効期限</h4>
              <p className=" text-gray-400 text-[10px]">2023年3月31日</p>
              <h5 className=" mt-4">自動更新:オン</h5>

              <button className=" bg-red-600 text-white text-xs py-2 px-6 mt-2 rounded-3xl ">
                自動更新をオフにする
              </button>
            </div>
          </div>
        </section>

        <section className=" mt-12">
          <h2 className=" text-sm">お支払い方法</h2>
          <div className="  bg-white shadow-sm border border-gray-50 p-4 mt-2">
            <div className="py-4 px-4 text-left mt-2">
              <p className=" text-gray-400 text-[10px] mt-2">
                3258-32XXXXX-XXXXXX
              </p>
            </div>
            <button className=" border text-xs py-2 px-6 mt-4 rounded-3xl ">
              お支払い方法を変更
            </button>
          </div>
        </section>
      </article>
    </Layout>
  );
}
