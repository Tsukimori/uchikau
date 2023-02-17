import { CompanyLayout } from "../../../components/company/layout";
import Image from "next/image";
import Link from "next/link";

export default function MessageDeatail() {
  const message = [
    {
      name: "ヤマタロ様",
      content:
        "物件情報ありがとうございます。今週、25日（土）にモデルルームへ伺いたいのですが可能でしょうか？",
      date: "2022-11-16  10:00:25",
    },
    {
      name: "ウチカウホームズ",
      content:
        "初めまして、ウチカウホームズです。ご希望に近い物件がありますので、ご案内をさせていただきます。近隣には、コンビニ、都市型スーパーがあり、南側には公園がある環境の良い物件となります。ご検討のほど、よろしくお願いいたします。",
      date: "2022-11-16  10:00:25",
    },
  ];

  return (
    <CompanyLayout>
      <article className="text-xs py-8 px-4">
        <section className="mr-8">
          <div>
            <h1 className=" text-base font-semibold text-gray-600">
              メッセージ 詳細
            </h1>
            <hr className=" border-1 border-gray-500 mt-2" />
          </div>
          <div className="py-2 px-4 border h-12 mt-4">
            <p>ヤマタロ様</p>
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
            <button className="  bg-sky-500 text-white text-xs py-2 px-8 rounded-3xl ">
              送信する
            </button>
          </div>
        </section>
      </article>
    </CompanyLayout>
  );
}
