import { CompanyLayout } from "../../../components/company/layout";

export default function PropertyDetail() {
  return (
    <CompanyLayout>
      <article className="text-xs py-8 px-4 md:w-3/4 ">
        <section>
          <h1 className=" text-lg font-semibold text-gray-600">登録物件</h1>
          <hr className=" border-gray-500 mt-2" />
        </section>

        <section className=" text-center">
          <form action="" method="post">
            <div className=" text-right">
              <button className=" bg-sky-500 text-white py-4 px-8 mt-4 rounded-3xl">
                修正する
              </button>
            </div>
            <div className=" w-full text-center border-b mt-4">
              <p className="text-sm bg-gray-100 py-4 px-8">竣工月</p>
              <div className=" my-4">
                <p className=" text-sm font-semibold text-gray-600">
                  2023年7月
                </p>
              </div>
            </div>

            <div className=" w-full text-center border-b mt-4">
              <p className="text-sm bg-gray-100 py-4 px-8">募集開始日</p>
              <div className=" my-4">
                <p className=" text-sm font-semibold text-gray-600">
                  2022年7月
                </p>
              </div>
            </div>

            <div className=" w-full text-center border-b mt-8">
              <p className="text-sm bg-gray-100  py-4 px-8">
                価格　
                <span className=" bg-red-600 text-white text-xs py-1 px-4 ml-4 rounded-full">
                  必須
                </span>
              </p>
              <div className=" my-4">
                <p className=" text-sm font-semibold text-gray-600">
                  5,000万円
                </p>

                <p className=" my-4"> 〜　</p>

                <p className=" text-sm font-semibold text-gray-600">
                  9,000万円
                </p>
              </div>
            </div>

            <div className=" w-full text-center border-b mt-8">
              <p className="text-sm bg-gray-100  py-4 px-8">
                エリア・沿線
                <span className=" bg-red-600 text-white text-xs py-1 px-4 ml-4 rounded-full">
                  必須
                </span>
              </p>
              <div className="my-4">
                <div className=" flex justify-evenly ">
                  <p className=" text-sm font-semibold text-gray-600">
                    港区元麻布
                  </p>
                  <p className=" text-sm font-semibold text-gray-600">
                    地下鉄 日比谷線 広尾駅
                  </p>
                </div>
                <textarea
                  className=" w-full h-32 mx-auto border p-4 mt-4"
                  placeholder="補足事項をご記載ください。"
                  name=""
                  id=""
                ></textarea>
              </div>
            </div>

            <div className=" w-full text-center border-b mt-8">
              <p className="text-sm bg-gray-100  py-4 px-8">
                広さ
                <span className=" bg-red-600 text-white text-xs py-1 px-4 ml-4 rounded-full">
                  必須
                </span>
              </p>
              <div className=" my-4">
                <p className=" text-sm font-semibold text-gray-600">80㎡</p>
                <p className=" my-4"> 〜　</p>
                <p className=" text-sm font-semibold text-gray-600">100㎡</p>
              </div>
            </div>

            {/* 間取り選択 */}
            <div className=" w-full text-center border-b mt-8">
              <p className="text-sm bg-gray-100  py-4 px-8">
                間取り
                <span className=" text-xs text-gray-500">(複数選択可)</span>
                <span className=" bg-red-600 text-white text-xs py-1 px-4 ml-4 rounded-full">
                  必須
                </span>
              </p>
              <div className="my-4">
                <div className=" flex justify-evenly mt-4 ">
                  <p className=" bg-sky-500 text-white py-4 px-8 w-2/5">2DK</p>
                  <p className=" bg-sky-500 text-white py-4 px-8 w-2/5">2LDK</p>
                </div>
                <textarea
                  className=" w-full h-32 mx-auto border p-4 mt-4"
                  placeholder="補足事項をご記載ください。"
                  name=""
                  id=""
                ></textarea>
              </div>
            </div>

            {/* 駅徒歩 */}
            <div className=" w-full text-center border-b mt-8">
              <p className="text-sm bg-gray-100  py-4 px-8">
                駅徒歩
                {/* <span className=" bg-red-600 text-white text-xs py-1 px-4 ml-4 rounded-full">
                  必須
                </span> */}
              </p>

              <div className="my-4">
                <div className=" flex justify-evenly mt-4 ">
                  <p className=" bg-sky-500 text-white py-4 px-8 w-2/5">
                    3分以内
                  </p>
                  <p className=" bg-sky-500 text-white py-4 px-8 w-2/5">
                    5分以内
                  </p>
                </div>
              </div>
            </div>

            {/* こだわり条件 */}
            <div className=" w-full text-center border-b mt-8">
              <p className="text-sm bg-gray-100  py-4 px-8">
                こだわり条件
                {/* <span className=" bg-red-600 text-white text-xs py-1 px-4 ml-4 rounded-full">
                  必須
                </span> */}
              </p>

              <div className="my-4">
                <div className=" flex justify-evenly ">
                  <p className=" bg-sky-500 text-white py-4 px-8 w-2/5">
                    近隣に公園
                  </p>
                  <p className=" bg-sky-500 text-white py-4 px-8 w-2/5">
                    敷地内、駐車場
                  </p>
                </div>

                <textarea
                  className=" w-full h-32 mx-auto border p-4 mt-4"
                  placeholder="補足事項をご記載ください。"
                  name=""
                  id=""
                ></textarea>
              </div>
            </div>

            <div className=" w-full text-center border-b mt-8">
              <p className="text-sm bg-gray-100  py-4 px-8">特記事項</p>

              <textarea
                className=" w-full h-32 mx-auto border p-4 mt-4"
                placeholder="特記事項を記載してください。"
                name=""
                id=""
              ></textarea>
            </div>
          </form>
        </section>
      </article>
    </CompanyLayout>
  );
}
