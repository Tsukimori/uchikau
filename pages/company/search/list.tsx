import { CompanyLayout } from "../../../components/company/layout";
import Link from "next/link";

export default function SearchList() {
  const message = [
    {
      id: "2023OKIJ",
      name: "ヤマタロ",
      match: "95%",
      content: "敷地内で、駐車場を確保したい",
      detail: "詳細を見る",
      date: "1日前",
      href: "/developers/serachPropetyDetail",
    },
    {
      id: "2022PLKJ",
      name: "はなこ",
      match: "90%",
      content: "食洗機の付いているキッチンが必須条件となります",
      detail: "詳細を見る",
      date: "3日前",
      href: "#",
    },
    {
      id: "2023OKIJ",
      name: "家探しおじさん",
      match: "82%",
      content: "引き渡し時期による",
      detail: "詳細を見る",
      date: "1日前",
      href: "#",
    },
  ];

  return (
    <CompanyLayout>
      <article className="md:w-3/4 text-xs py-8 px-4">
        <section>
          <div>
            <h1 className=" text-lg font-semibold text-gray-600">
              ユーザー検索
            </h1>
            <hr className=" border-1 border-gray-500 mt-2" />
          </div>
          <div className=" mt-4">
            <select className=" w-32 text-xs mr-8" name="" id="">
              <option value="">マッチ順</option>
              <option value="">購入時期</option>
              <option value="">価格</option>
              <option value="">広さ</option>
              <option value="">エリア</option>
            </select>
            <select className=" w-32 text-xs" name="" id="">
              <option value="">30件</option>
              <option value="">50件</option>
              <option value="">100件</option>
            </select>
          </div>
          <div className=" flex justify-start mt-8">
            <div className=" flex items-center bg-sky-100 py-2 px-4 mr-4">
              <input className="inline-block border scale-60" type="checkbox" />
              <p className=" text-xs ml-2">すべてチェック</p>
            </div>
            <Link href="/company//message/send">
              <button className=" bg-sky-500 text-white py-4 px-8">
                まとめてメッセージ送信
              </button>
            </Link>
          </div>
        </section>
        <section>
          {message.map((item) => {
            return (
              <div key={item.id} className=" mt-4 border py-2 px-4 w-full ">
                <div className=" flex bg-sky-100 py-2 px-4">
                  <input
                    className="inline-block border scale-60"
                    type="checkbox"
                  />
                  <p className=" text-xs ml-2">チェック</p>
                </div>

                <div className=" flex items-center mt-4">
                  <div className="grid gap-2">
                    <dl className=" flex w-full">
                      <dt className="w-32">会員番号 :</dt>
                      <dd className="ml-4">{item.id}</dd>
                    </dl>
                    <dl className=" flex  w-full">
                      <dt className=" w-32">ニックネーム :</dt>
                      <dd className="ml-4 w-40">{item.name}</dd>
                    </dl>
                    <dl className=" flex  w-full">
                      <dt className=" w-32">マッチ度 :</dt>
                      <dd className=" text-red-600 ml-4">{item.match}</dd>
                    </dl>
                    <dl className=" flex  w-full">
                      <dt className=" w-32">コメント :</dt>
                      <dd className="w-60 ml-4">{item.content}</dd>
                    </dl>
                    <dl className=" flex  w-full">
                      <dt className=" w-32">登録日 :</dt>
                      <dd className=" ml-4">{item.date}</dd>
                    </dl>
                  </div>
                  <div className=" w-full">
                    <div className=" flex justify-end">
                      <input
                        className="inline-block border scale-60"
                        type="checkbox"
                      />
                      <p className=" text-xs ml-2">お気に入りに追加する</p>
                    </div>
                    <div className="flex justify-end w-full mt-8">
                      <p className=" mr-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-3 h-3 text-gray-600"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </p>

                      <Link href="/company/search/detail">
                        <p> 詳細確認</p>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
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
