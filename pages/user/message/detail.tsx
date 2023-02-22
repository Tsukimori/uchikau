import { Layout } from "../../../components/user/layout";
import Image from "next/image";
import Link from "next/link";
import { StarIcon } from "@heroicons/react/24/outline";

export default function MessageDeatail() {
  const message = [
    {
      name: "山田 太郎",
      content:
        "物件情報ありがとうございます。今週、25日（土）に現地確認に伺いたいのですが可能でしょうか？",
      date: "2022-11-16  10:00:25",
    },
    {
      name: "ウチカウホームズ",
      content:
        "初めまして、ウチカウホームズです。ご希望に近い物件がありますのでご案内をさせていただきます。近隣には、コンビニ、都市型スーパーがあり、南側には公園がある環境の良い物件となります。ご検討のほど、よろしくお願いいたします。",
      date: "2022-11-16  10:00:25",
    },
  ];

  return (
    <Layout>
      <article className="text-xs py-8 px-4">
        <section>
          <div>
            <h1 className=" text-base font-semibold text-gray-600">
              メッセージ 詳細
            </h1>
            <hr className=" border-1 border-gray-500 mt-2" />
          </div>
          <div className="py-2 px-4 border h-12 mt-4">
            <p>ウチカウホームズ</p>
          </div>
          <div className=" flex items-center justify-center bg-gray-200 text-gray-600 text-[10px] py-2 px-4 border h-8 mt-1">
            <p>過去のメッセージを読み込む</p>
          </div>

          {message.map((item) => {
            return (
              <div
                key={item.name}
                className="items-center py-3 px-4 border w-full mt-1"
              >
                <div className=" flex justify-between">
                  <h2>{item.name}</h2>
                  <p className=" text-gray-400">{item.date}</p>
                </div>
                <div className=" mt-4">
                  <h3>{item.content}</h3>
                </div>
              </div>
            );
          })}
          <div className="items-center py-3 px-4 border w-full h-28 mt-4">
            <p className=" text-gray-400">メッセージを入力する</p>
          </div>
          <div className=" flex items-center bg-gray-200 text-[10px] py-2 px-4 border h-8 mt-1">
            <p>ファイルを添付する</p>
          </div>
          <div className=" text-center mt-4">
            <button className="  bg-sky-500 text-white text-xs py-2 px-6 rounded-3xl ">
              送信する
            </button>
          </div>
        </section>

        <section className="shadow-sm border border-gray-50 mt-8 ">
          <div className="text-center">
            <Image
              className=" inline-block "
              src="/image01.jpeg"
              height={600}
              width={500}
              alt={"物件画像"}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className=" relative -top-40 left-96 text-gray-500 w-8 h-8"
            >
              <path
                fill-rule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z"
                clip-rule="evenodd"
              />
            </svg>
          </div>

          <div className=" space-y-2 py-4 px-4">
            <dl className=" flex items-center gap-4  py-2  ">
              <dt className="">
                希望との
                <br /> マッチ度
              </dt>
              <dd className=" text-lg text-rose-600">85%</dd>
              <p>
                <StarIcon className="w-5 h-5" />
              </p>
            </dl>

            <div className=" space-y-2">
              <h2 className=" text-gray-600 border-b ">
                ウチカウホームズ 芝公園前
              </h2>
              <dl className=" ">
                <dt className=" text-gray-400">販売会社</dt>
                <dd>ウチカウホームズ</dd>
              </dl>
              <dl className=" ">
                <dt className=" text-gray-400">価格</dt>
                <dd>2LDK:8,000万円〜3LDK : 12,000万円〜</dd>
              </dl>
              <dl className="">
                <dt className=" text-gray-400">所在地</dt>
                <dd>東京都港区芝公園前4丁目23</dd>
              </dl>
              <p className=" text-center mt-4">
                <Image
                  className=" inline-block"
                  src="/map.png"
                  width={350}
                  height={250}
                  alt={"マップ画像"}
                />
              </p>
            </div>
            <div className="text-center">
              <button className="  bg-sky-500 text-white text-xs py-2 px-6 rounded-3xl ">
                <Link href="/dashboard/propetyDetail">詳細</Link>
              </button>
            </div>
          </div>
        </section>
      </article>
    </Layout>
  );
}
