import { Layout } from "../../../components/layout";

export default function DesiredDetail() {
  return (
    <Layout>
      <article className="text-xs py-8 px-4 ">
        <section>
          <h1 className=" text-base font-semibold text-gray-600">
            希望物件登録
          </h1>
          <hr className=" border-gray-500 mt-2" />
        </section>

        <section className=" text-center">
          <form action="" method="post">
            <div className=" text-right">
              <button className=" bg-sky-500 text-white py-2 px-6 mt-4 rounded-3xl">
                修正する
              </button>
            </div>
            <div className=" w-full text-center border-b mt-4">
              <p className="text-sm bg-gray-100 py-4 px-8">購入時期</p>
              <div className=" my-4">
                <p className=" text-sm font-semibold text-gray-600">
                  3ヶ月以内
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
                  placeholder="詳細をご記載いただくことで、メッセージが届きやすくなります。"
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
                  placeholder="詳細をご記載いただくことで、メッセージが届きやすくなります。"
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
                  placeholder="詳細をご記載いただくことで、メッセージが届きやすくなります。"
                  name=""
                  id=""
                ></textarea>
              </div>
            </div>

            {/* 購入検討のキッカケ */}
            <div className=" w-full text-center border-b mt-8">
              <p className="text-sm bg-gray-100  py-4 px-8">
                ご購入を検討したきっかけ
                <span className=" text-xs text-gray-500">(複数選択可)</span>
                <span className=" bg-red-600 text-white text-xs py-1 px-4 ml-4 rounded-full">
                  必須
                </span>
              </p>
              <div className="my-4">
                <div className=" flex justify-evenly ">
                  <p className=" bg-sky-500 text-white py-4 px-8 w-2/5">
                    家族構成の変化
                  </p>
                </div>

                <textarea
                  className=" w-full h-32 mx-auto border p-4 mt-4"
                  placeholder="詳細をご記載いただくことで、メッセージが届きやすくなります。"
                  name=""
                  id=""
                ></textarea>
              </div>
            </div>

            {/* 優先順位 */}
            <div className=" w-full text-center border-b mt-8">
              <p className="text-sm bg-gray-100  py-4 px-8">
                優先順位
                <span className=" bg-red-600 text-white text-xs py-1 px-4 ml-4 rounded-full">
                  必須
                </span>
              </p>
              <div className=" my-4">
                <div className=" my-4">
                  <p className=" mb-2">第一希望</p>
                  <select
                    className=" border border-gray-500 py-4 px-8"
                    name="date"
                    id=""
                  >
                    <option value="">広さ</option>
                    <option value="">価格</option>
                    <option value="">沿線</option>
                  </select>
                </div>

                <div className=" my-8">
                  <p className=" mb-2">第2希望</p>
                  <select
                    className=" border border-gray-500 py-4 px-8"
                    name="date"
                    id=""
                  >
                    <option value="">価格</option>
                    <option value="">沿線</option>
                  </select>
                </div>

                <div className=" mt-8">
                  <p className=" mb-2">第3希望</p>
                  <select
                    className=" border border-gray-500 py-4 px-8"
                    name="date"
                    id=""
                  >
                    <option value="">沿線</option>
                  </select>
                </div>

                <textarea
                  className=" w-full h-32 mx-auto border p-4 mt-4"
                  placeholder="詳細をご記載いただくことで、メッセージが届きやすくなります。"
                  name=""
                  id=""
                ></textarea>
              </div>
            </div>
          </form>

          <div className=" text-center">
            <button className=" bg-sky-500 text-white py-2 px-6 mt-4 rounded-3xl">
              一覧に戻る
            </button>
          </div>
        </section>
      </article>
    </Layout>
  );
}
