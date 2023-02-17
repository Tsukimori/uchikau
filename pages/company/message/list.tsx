import { CompanyLayout } from "../../../components/company/layout";
import Link from "next/link";

export default function MessageList() {
  const message = [
    {
      titel: "20221025ABCDに返信がありました。",
      content: "初めまして、山田太郎です。物件のモデルルームへ・・・",
      send: "未送信",
      date: "1日前",
      user: "ヤマタナ",
    },
    {
      titel: "20221001OPKJDに返信がありました。",
      content: "初めまして、田中花子と申します。リビングが南向きの・・・",
      send: "返信済み",
      date: "2011.11.01",
      user: "はなこ",
    },
    {
      titel: "20221001OPKJDに返信がありました",
      content: "先日は、ありがとうござしました。申し込みを行い・・・",
      send: "返信済み",
      date: "2022.10.31",
      user: "タロウ",
    },
  ];

  return (
    <CompanyLayout>
      <article className="text-xs py-8 px-4">
        <section>
          <div>
            <h1 className=" text-base font-semibold text-gray-600">
              メッセージ一覧
            </h1>
            <hr className=" border-1 border-gray-500 mt-2" />
          </div>
        </section>
        <section>
          <Link href="/company/message/detail">
            {message.map((item) => {
              return (
                <div key={item.titel} className=" flex gap-2 p-4 border-b mt-4">
                  <div className=" bg-gray-50 text-center  px-2 py-4 w-28 ">
                    <h2 className=" ">マッチ度</h2>
                    <p className=" text-red-600 text-base">90%</p>
                  </div>
                  <div className=" space-y-2">
                    <div className=" flex gap-2">
                      <p className=" bg-red-500 text-white px-2">{item.send}</p>
                      <p>{item.date}</p>
                    </div>
                    <dl className="">
                      <dt className=" text-gray-400">{item.titel}</dt>
                      <dd className=" text-sm">{item.content}</dd>
                      <dd className=" text-gray-400">{item.user}</dd>
                    </dl>
                  </div>
                </div>
              );
            })}
          </Link>
        </section>
        <section className=" mt-12">
          <div className=" flex justify-center items-center py-2 px-4 border w-full h-32 mt-4">
            <p>5件中</p>
            <p className=" mx-4">1-5件</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4 text-gray-600"
            >
              <path
                fill-rule="evenodd"
                d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </section>
      </article>
    </CompanyLayout>
  );
}
