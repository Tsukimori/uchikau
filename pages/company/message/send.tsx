import { CompanyLayout } from "../../../components/company/layout";

import Image from "next/image";

export default function MessageSend() {
  return (
    <CompanyLayout>
      <article className=" md:flex justify-start text-xs py-8 px-4">
        <section className="md:w-2/4 mr-8">
          <div>
            <h1 className=" text-lg font-semibold text-gray-600">
              メッセージ 詳細
            </h1>
            <hr className=" border-1 border-gray-500 mt-2" />
            <div className=" text-right">
              <button className=" bg-gray-600 text-white py-2 px-6 mt-4 rounded-3xl">
                テンプレートから選ぶ
              </button>
            </div>
          </div>
          <div className=" flex items-center py-2 px-4 border h-12 mt-4">
            <p className="">ヤマタロ 様</p>
          </div>
          <div className="py-2 px-4 border h-12 mt-4">
            <p className=" text-gray-400">タイトルを入力</p>
          </div>

          <div className="items-center py-3 px-4 border w-full h-28 mt-4">
            <p className=" text-gray-400">メッセージを入力する</p>
          </div>
          <div className=" flex items-center bg-gray-600 text-white text-[10px] py-2 px-4 border h-8 mt-1">
            <p>登録物件から添付する</p>
          </div>
          <div className=" flex items-center bg-gray-200 text-[10px] py-2 px-4 border h-8 mt-1">
            <p>ファイルを添付する</p>
          </div>
          <div className=" text-center mt-4">
            <button className="  bg-sky-500 text-white text-xs py-2 px-8 rounded-3xl ">
              送信する
            </button>
          </div>

          <div className=" flex text-xs py-4 px-8 border shadow-sm rounded-2xl mt-16">
            <div className=" text-center">
              <p className="">
                マッチ度 <span className=" text-base text-gray-600">85％</span>
              </p>
              <Image
                className=" inline-block"
                src="/image01.jpeg"
                height={150}
                width={150}
                alt={"物件画像"}
              />
            </div>
            <div className=" mt-8">
              <dl className=" flex items-center pt-2 px-6">
                <dt className=" mr-4">物件名</dt>
                <dd>ウチカウホームズ 芝公園前</dd>
              </dl>
              <dl className=" flex items-center py-4 px-6">
                <dt className=" mr-4">価格</dt>
                <dd>2LDK:8,000万円〜3LDK : 12,000万円〜</dd>
              </dl>
              <dl className=" flex items-centerpy-4 px-6">
                <dt className=" mr-4">所在地</dt>
                <dd>東京都港区芝公園前4丁目23</dd>
              </dl>
              <div className="text-center w-full">
                <button className=" bg-sky-500 text-white py-2 px-6 mt-4 rounded-3xl">
                  選択
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-8 py-8 px-4 border">
          <div className="text-center mb-4">
            <h2>駅から、徒歩5分。南側が公園の日当たりの良い物件</h2>
          </div>

          <div>
            <Image
              className=" inline-block"
              src="/image01.jpeg"
              height={350}
              width={350}
              alt={"物件画像"}
            />

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className=" relative -top-36 left-[350px] text-gray-500 w-8 h-8"
            >
              <path
                fill-rule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z"
                clip-rule="evenodd"
              />
            </svg>
          </div>

          <div className=" flex">
            <dl className=" flex border p-2 text-center w-3/5">
              <dt className=" text-left w-1/2">
                希望との
                <br /> マッチ度
              </dt>
              <dd className=" w-1/2 text-2xl text-gray-600 font-medium ml-4">
                85%
              </dd>
            </dl>
          </div>
          <div className=" mt-2">
            <dl className=" flex items-center border py-4 px-6">
              <dt className=" mr-4">物件名</dt>
              <dd>ウチカウホームズ 芝公園前</dd>
            </dl>
            <dl className=" flex items-center border py-4 px-6">
              <dt className=" mr-4">価格</dt>
              <dd>2LDK:8,000万円〜3LDK : 12,000万円〜</dd>
            </dl>
            <dl className=" flex items-center border py-4 px-6">
              <dt className=" mr-4">所在地</dt>
              <dd>東京都港区芝公園前4丁目23</dd>
            </dl>
            <div className=" text-center mt-16">
              <button className="  bg-sky-500 text-white text-xs py-2 px-8 rounded-3xl ">
                詳細
              </button>
            </div>
          </div>
        </section>
      </article>
    </CompanyLayout>
  );
}
