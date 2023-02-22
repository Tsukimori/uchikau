import { Layout } from "../../../components/user/layout";
import Image from "next/image";
import Link from "next/link";
import { StarIcon } from "@heroicons/react/24/outline";

export default function OfferList() {
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
      <article className=" text-xs py-8 px-4">
        <section>
          <div>
            <h1 className=" text-base font-semibold text-gray-600">
              提案された物件一覧
            </h1>
            <hr className=" border-1 border-gray-500 mt-2" />
          </div>
        </section>
        <section className=" flex gap-2">
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
    </Layout>
  );
}
