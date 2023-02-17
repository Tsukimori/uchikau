import { Layout } from "../../../components/layout";
import Link from "next/link";

export default function MyPageDetail() {
  return (
    <Layout>
      <article className="text-xs py-8 px-4 ">
        <section>
          <h1 className=" text-lg font-semibold text-gray-600">
            マイページ 詳細情報
          </h1>
          <hr className=" border-gray-500 mt-2" />
        </section>

        <section className=" mt-8">
          <h2 className=" text-gray-600">現在のご状況</h2>
          <div className=" space-y-2  mt-4">
            <dl className=" flex items-center gap-2">
              <dt className=" w-52 bg-gray-200 py-4 px-4">現在のお住まい</dt>
              <dd className=" w-52 border">
                <select
                  className=" w-full border border-gray-500 py-4 px-8"
                  name="date"
                  id=""
                >
                  <option value="">賃貸</option>
                  <option value="">持ち家</option>
                  <option value="">その他</option>
                </select>
              </dd>
            </dl>
            <dl className=" flex items-center gap-2">
              <dt className=" w-52 bg-gray-200 py-4 px-4">お車の所有</dt>
              <dd className=" w-52 border">
                <select
                  className=" w-full border border-gray-500 py-4 px-8"
                  name="date"
                  id=""
                >
                  <option value="">あり</option>
                  <option value="">なし</option>
                </select>
              </dd>
            </dl>
            <dl className=" flex items-center gap-2">
              <dt className=" w-52 bg-gray-200 py-4 px-4">
                購入を検討し始めた時期
              </dt>
              <dd className=" flex w-52 border">
                <select
                  className=" w-full border border-gray-500 py-4 px-8"
                  name="date"
                  id=""
                >
                  <option value="">1週間前</option>
                  <option value="">1ヶ月前</option>
                  <option value="">3ヶ月前</option>
                  <option value="">未実施</option>
                </select>
              </dd>
            </dl>

            <dl className=" flex items-center gap-2">
              <dt className=" w-52 bg-gray-200 py-4 px-4">検討のご状況</dt>
              <dd className=" w-52 border">
                <select
                  className=" w-full border border-gray-500 py-4 px-8"
                  name="date"
                  id=""
                >
                  <option value="">内覧したことがない</option>
                  <option value="">内覧予定が決まっている</option>
                  <option value="">内覧したことがある</option>
                </select>
              </dd>
            </dl>
          </div>
        </section>

        <section className=" mt-8">
          <h2 className=" text-gray-600">資金計画</h2>
          <div className=" space-y-2 w-full mt-4">
            <dl className=" flex items-center gap-2">
              <dt className=" w-52 bg-gray-200 py-4 px-4">年収 (世帯年収)</dt>
              <dd className=" w-52 border py-4 px-4">1,000万円</dd>
            </dl>
            <dl className=" flex items-center gap-2">
              <dt className=" w-52 bg-gray-200 py-4 px-4">自己資金</dt>
              <dd className=" w-52 border py-4 px-4">500万円</dd>
            </dl>
            <dl className=" flex items-center gap-2">
              <dt className=" w-52 bg-gray-200 py-4 px-4">月々のお支払い</dt>
              <dd className=" w-52 border py-4 px-4">8万円</dd>
            </dl>
            <dl className=" flex items-center gap-2">
              <dt className=" w-52 bg-gray-200 py-4 px-4">ローンの審査状況</dt>
              <dd className=" w-52 border">
                <select
                  className=" w-full border border-gray-500 py-4 px-8"
                  name="date"
                  id=""
                >
                  <option value="">審査済み</option>
                  <option value="">審査中</option>
                  <option value="">未実施</option>
                </select>
              </dd>
            </dl>
          </div>
        </section>
      </article>
    </Layout>
  );
}
