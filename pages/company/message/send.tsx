import { CompanyLayout } from "../../../components/company/layout";

import Image from "next/image";

export default function MessageSend() {
  const propety = [
    {
      title: "ウチカウホームズ 芝公園前",
      company: "ウチカウホームズ",
      price: "2LDK:8,000万円〜3LDK:12,000万円",
      address: "東京都港区芝公園前4丁目23",
      src: "/pr/image03.jpg",
    },
    {
      title: "ウチカウホームズ 芝公園前",
      company: "ウチカウホームズ",
      price: "2LDK:8,000万円〜3LDK:12,000万円",
      address: "東京都港区芝公園前4丁目23",
      src: "/pr/image03.jpg",
    },
  ];

  return (
    <CompanyLayout>
      <article className=" text-xs py-8 px-4">
        <section className="mr-8">
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
            <p>登録物件を添付する</p>
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

         <section>
          <div className="flex gap-2 mt-8">
                {propety.map((item) => {
                  return (
                    <div
                      key={item.title}
                      className=" shadow-sm border border-gray-50 mt-4"
                    >
                      <figure className=" w-full">
                        <Image
                          className="inline-block"
                          src={item.src}
                          width={800}
                          height={800}
                          alt={"物件画像"}
                        />
                      </figure>
                      <div className=" space-y-2  py-4 px-4 ">
                        <p className="text-sm font-bold mb-4">
                          マッチ度 <span className=" text-red-600">92%</span>
                        </p>

                        <h2 className=" text-gray-600 font-bold border-b">
                          {item.title}
                        </h2>
                        <dl>
                          <dt className=" text-gray-400">販売会社</dt>

                          <dd>{item.company}</dd>
                        </dl>
                        <dl>
                          <dt className="text-gray-400">価格</dt>
                          <dd>{item.price}</dd>
                        </dl>
                        <dl>
                          <dt className="text-gray-400">所在地</dt>
                          <dd>{item.address}</dd>
                        </dl>
                        <div className=" text-right pt-2">
                          <button className=" bg-sky-500 text-white py-2 px-6 rounded-full">選択する</button>
                      </div>
                      </div>

                    </div>
                  );
                })}
              </div>
        </section>
      </article>
    </CompanyLayout>
  );
}
