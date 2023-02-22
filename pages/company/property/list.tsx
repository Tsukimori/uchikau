import { CompanyLayout } from "../../../components/company/layout";
import { StarIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

export default function PropertyList() {
  const propety = [
    {
      title: "ウチカウホームズ 芝公園前",
      company: "ウチカウホームズ",
      price: "2LDK:8,000万円〜3LDK:12,000万円",
      address: "東京都港区芝公園前4丁目23",
      completion: '2023年2月',
      model: 'あり',
      src: "/pr/image03.jpg",
    },
    {
      title: "ウチカウホームズ 芝公園前",
      company: "ウチカウホームズ",
      price: "2LDK:8,000万円〜3LDK:12,000万円",
      address: "東京都港区芝公園前4丁目23",
      completion: '2023年2月',
      model: '未完成',
      src: "/pr/image03.jpg",
    },
  ];

  return (
    <CompanyLayout>
      <article className=" text-xs py-8 px-4">
        <section>
          <div>
            <h1 className=" text-base font-semibold text-gray-600">
              登録物件一覧
            </h1>
            <hr className=" border-1 border-gray-500 mt-2" />
            <div className=" text-right mt-4">
            <Link href='/company/property/addNew' className=" bg-sky-500 text-white py-2 px-6 rounded-full">
              新規登録
            </Link>
            </div>
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
                  <dl>
                    <dt className="text-gray-400">完成時期</dt>
                    <dd>{item.completion}</dd>
                  </dl>
                  <dl>
                    <dt className="text-gray-400">モデルルーム</dt>
                    <dd>{item.model}</dd>
                  </dl>


                </div>
              </div>
            );
          })}
        </section>

      </article>
    </CompanyLayout>
  );
}
