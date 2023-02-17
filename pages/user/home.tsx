import { Layout } from "../../components/layout";
import Link from "next/link";
import Image from "next/image";
import { ArrowDownCircleIcon, StarIcon } from "@heroicons/react/24/outline";

export default function UserHome() {
  const messageList = [
    "初めまして１ご提案したい物件がいくつかありまして....",
    "初めまして２ご提案したい物件が....",
  ];

  const propety = [
    {
      title: "ウチカウホームズ 芝公園前",
      company: "ウチカウホームズ",
      price: "2LDK:8,000万円〜3LDK:12,000万円",
      address: "東京都港区芝公園前4丁目23",
      src: "/pr/image02.jpg",
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
    <Layout>
      <div>
        <article className=" space-y-6 text-xs py-8 px-4 w-full">
          <section className=" bg-white shadow-sm border border-gray-50 p-4">
            <div className="">
              <h1 className="  text-gray-600 text-base font-semibold ml-2">
                新着メッセージ
              </h1>
              <hr className=" border-gray-500 border-1 mt-2" />

              {messageList.map((item) => {
                return (
                  <div
                    key={item}
                    className=" flex items-center gap-4 py-2 px-4 border-b mt-4"
                  >
                    <div className=" bg-gray-50 text-center  px-2 py-4 w-24 ">
                      <h2 className=" ">マッチ度</h2>
                      <p className=" text-red-600 text-base">90%</p>
                    </div>
                    <div className=" grid gap-2 w-full">
                      <p>
                        <span className=" bg-red-500 px-2 text-white mr-2">
                          未読
                        </span>
                        1日前
                      </p>
                      <h3 className="text-sm">{item}</h3>
                      <p className=" text-gray-400">ウチカウホームズ</p>
                    </div>
                  </div>
                );
              })}

              <Link href="/user/message/list">
                <div className=" flex items-center justify-end gap-2  mt-4">
                  <p className=" font-bold text-gray-600">
                    メッセージ一覧を見る
                  </p>
                  <ArrowDownCircleIcon className=" text-gray-500 w-5 h-5" />
                </div>
              </Link>
            </div>
          </section>

          <section className=" bg-white shadow-sm border border-gray-50 p-4">
            <div className="">
              <h1 className="  text-gray-600 text-base font-semibold ml-2">
                提案されている物件
              </h1>
              <hr className=" border-gray-500 border-1 mt-2" />

              <div className="flex gap-2">
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

                        <div className="text-center mt-4">
                          <StarIcon className=" w-4 h-5" />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <Link href="/user/message/list">
                <div className=" flex items-center justify-end gap-2  mt-4">
                  <p className=" font-bold text-gray-600">提案一覧を見る</p>
                  <ArrowDownCircleIcon className=" text-gray-500 w-5 h-5" />
                </div>
              </Link>
            </div>
          </section>
        </article>
      </div>
    </Layout>
  );
}
