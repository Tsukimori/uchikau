import { Layout } from "../../../components/layout";

export default function DesiredAddNew() {
  return (
    <Layout title="新規会員登録画面 | ウチカウ">
      <article className="text-xs py-8 px-4">
        <section>
          <h1 className=" text-base font-semibold text-gray-600">
            希望物件登録
          </h1>
          <hr className=" border-gray-500 mt-2" />
        </section>

        <section className=" text-center">
          <form action="" method="post">
            <div className=" w-full text-center border-b mt-4">
              <p className="text-sm bg-gray-100 py-4 px-8">購入時期</p>
              <div className=" my-4">
                <select
                  className=" border border-gray-500 py-4 px-8"
                  name="date"
                  id=""
                >
                  <option value="">選択してください。</option>
                  <option value="">すぐに</option>
                  <option value="">1ヶ月〜3ヶ月以内</option>
                  <option value="">3ヶ月〜6ヶ月以内</option>
                </select>
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
                <select
                  className=" border border-gray-500 py-4 px-8"
                  name="date"
                  id=""
                >
                  <option value="">選択してください。</option>
                  <option value="">すぐに</option>
                  <option value="">2,000万円</option>
                  <option value="">3,000万円</option>
                </select>
                <p className=" my-4"> 〜　</p>
                <select
                  className=" border border-gray-500 py-4 px-8"
                  name="date"
                  id=""
                >
                  <option value="">選択してください。</option>
                  <option value="">すぐに</option>
                  <option value="">2,000万円</option>
                  <option value="">3,000万円</option>
                </select>
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
                  <p className=" bg-sky-500 text-white py-4 px-8 w-2/5">
                    エリアを選択
                  </p>
                  <p className=" bg-sky-500 text-white py-4 px-8 w-2/5">
                    沿線を選択
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
                <select
                  className=" border border-gray-500 py-4 px-8"
                  name="date"
                  id=""
                >
                  <option value="">選択してください。</option>
                  <option value="">すぐに</option>
                  <option value="">2,000万円</option>
                  <option value="">3,000万円</option>
                </select>
                <p className=" my-4"> 〜　</p>
                <select
                  className=" border border-gray-500 py-4 px-8"
                  name="date"
                  id=""
                >
                  <option value="">選択してください。</option>
                  <option value="">すぐに</option>
                  <option value="">2,000万円</option>
                  <option value="">3,000万円</option>
                </select>
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
                <div className=" flex justify-evenly ">
                  <p className=" bg-sky-500 text-white py-4 px-8 w-2/5">1R</p>
                  <p className=" bg-sky-500 text-white py-4 px-8 w-2/5">1K</p>
                </div>
                <div className=" flex justify-evenly mt-4 ">
                  <p className=" bg-sky-500 text-white py-4 px-8 w-2/5">1DK</p>
                  <p className=" bg-sky-500 text-white py-4 px-8 w-2/5">1LDK</p>
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
                <div className=" flex justify-evenly ">
                  <p className=" bg-sky-500 text-white py-4 px-8 w-2/5">
                    指定なし
                  </p>
                  <p className=" bg-sky-500 text-white py-4 px-8 w-2/5">
                    1分以内
                  </p>
                </div>
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
                    ペットと暮らせる
                  </p>
                  <p className=" bg-sky-500 text-white py-4 px-8 w-2/5">
                    敷地内、駐車場
                  </p>
                </div>
                <div className=" flex justify-evenly mt-4 ">
                  <p className=" bg-sky-500 text-white py-4 px-8 w-2/5">
                    近隣に公園
                  </p>
                  <p className=" bg-sky-500 text-white py-4 px-8 w-2/5">
                    子育て環境
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
                  <p className=" bg-sky-500 text-white py-4 px-8 w-2/5">転勤</p>
                  <p className=" bg-sky-500 text-white py-4 px-8 w-2/5">
                    家族構成の変化
                  </p>
                </div>
                <div className=" flex justify-evenly mt-4 ">
                  <p className=" bg-sky-500 text-white py-4 px-8 w-2/5">
                    結婚・出産
                  </p>
                  <p className=" bg-sky-500 text-white py-4 px-8 w-2/5">
                    その他
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
                    <option value="">選択してください。</option>
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
                    <option value="">選択してください。</option>
                    <option value="">広さ</option>
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
                    <option value="">選択してください。</option>
                    <option value="">広さ</option>
                    <option value="">価格</option>
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
            <button className=" bg-sky-500 text-white py-2 px-6 mt-8 rounded-3xl">
              登録する
            </button>
          </form>
        </section>
      </article>
    </Layout>
  );
}
