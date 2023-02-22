import Head from "next/head";
import { ReactNode } from "react";
import { Navgation } from "./navigaiton";
import Image from "next/image";

export const Layout = ({
  children,
  title = "default title",
}: {
  children?: ReactNode;
  title?: ReactNode;
}) => {
  const promotion = [
    {
      title: "ウチカウホームズ 芝公園前",
      company: "ウチカウホームズ",
      price: "2LDK:8,000万円〜3LDK:12,000万円",
      address: "東京都港区芝公園前4丁目23",
      src: "/pr/image01.jpg",
    },
    {
      title: "プレステージ 世田谷成城",
      company: "ウチカウホームズ",
      price: "2LDK:8,000万円〜3LDK:12,000万円",
      address: "東京都世田谷区成城8丁目10 ",
      src: "/pr/image02.jpg",
    },
    {
      title: "パークホームズ 西新宿",
      company: "ウチカウホームズ",
      price: "2LDK:8,000万円〜3LDK:12,000万円",
      address: "東京都新宿区西新宿2丁目34",
      src: "/pr/image03.jpg",
    },
  ];

  return (
    <div>
      <Head>{title}</Head>
      <div className=" md:flex md:justify-center ">
        <header>
          <Navgation />
        </header>

        <main className=" max-w-md">{children}</main>
        <footer className=" border-l">
          <article className=" space-y-6 text-xs text-left py-8 px-4">
            <section className=" border-b py-4">
              <h2 className=" text-gray-600 font-bold text-sm">
                公式アカウント
              </h2>
              <ul className=" flex gap-2">
                <li>note</li>
                <li>instagram</li>
                <li>twitter</li>
                <li>YouTube</li>
                <li>TikTok</li>
              </ul>
            </section>
            <section>
              <ul className=" space-y-4">
                <li>利用規約</li>
                <li>プライバシーポリシー</li>
                <li>採用情報</li>
                <li>お問い合わせ</li>
                <li>運営会社</li>
              </ul>
            </section>

            <section>
              <div>
                <h1 className=" text-gray-600  text-sm font-semibold">
                  おすすめキャンペーン物件
                  <span className=" bg-sky-500 text-white text-xs px-2 py-1 ml-2">
                    PR
                  </span>
                </h1>
                <hr className=" border-1 mt-2" />
                <div className=" space-y-4 mt-4">
                  {promotion.map((item) => {
                    return (
                      <div className=" shadow-sm border border-gray-50 text-left py-2 px-4">
                        <div className=" space-y-4 mt-2">
                          <Image
                            src={item.src}
                            width={200}
                            height={150}
                            alt={"画像"}
                          />
                          <h2 className="  text-gray-600 font-bold text-xs border-b">
                            {item.title}
                          </h2>
                          <div className=" space-y-2">
                            <dl>
                              <dt className=" text-gray-500">販売会社</dt>
                              <dd>{item.company}</dd>
                            </dl>
                            <dl>
                              <dt className=" text-gray-500">価格</dt>
                              <dd>{item.price}</dd>
                            </dl>
                            <dl>
                              <dt className=" text-gray-500">所在地</dt>
                              <dd>{item.address}</dd>
                            </dl>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
          </article>
        </footer>
      </div>
    </div>
  );
};
