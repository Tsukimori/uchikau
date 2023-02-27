import { CompanyLayout } from "../../../components/company/layout";

export default function PropertyAddNew() {
  return (
    <CompanyLayout title="新規会員登録画面 | ウチカウ">
      <article className="text-xs py-8 px-4 ">
        <section>
          <h1 className=" text-base font-semibold text-gray-600">物件登録</h1>
          <hr className=" border-gray-500 mt-2" />
        </section>

        <section className=" text-center">
          <form action="" method="post">
            <div className=" w-full text-center border-b mt-4">
              <p className="text-sm bg-gray-100 py-4 px-8">完成時期</p>
              <div className=" my-4">
                <select
                  className=" border border-gray-500 py-4 px-8"
                  name="date"
                  id=""
                >
                  <option value="">未定</option>
                  <option value="">1ヶ月〜3ヶ月以内</option>
                  <option value="">3ヶ月〜6ヶ月以内</option>
                  <option value="">6ヶ月〜1年以内</option>
                  <option value="">完成済み</option>
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
                  <option value="">下限なし</option>
                  <option value="">1,000万円以上</option>
                  <option value="">2,000万円以上</option>
                  <option value="">3,000万円以上</option>
                  <option value="">4,000万円以上</option>
                  <option value="">5,000万円以上</option>
                  <option value="">6,000万円以上</option>
                  <option value="">7,000万円以上</option>
                  <option value="">8,000万円以上</option>
                  <option value="">9,000万円以上</option>
                  <option value="">10,000万円以上</option>
                  <option value="">15,000万円以上</option>
                  <option value="">20,000万円以上</option>
                </select>
                <p className=" my-4"> 〜</p>
                <select
                  className=" border border-gray-500 py-4 px-8"
                  name="date"
                  id=""
                >
                  <option value="">1,000万円未満</option>
                  <option value="">2,000万円未満</option>
                  <option value="">3,000万円未満</option>
                  <option value="">4,000万円未満</option>
                  <option value="">5,000万円未満</option>
                  <option value="">6,000万円未満</option>
                  <option value="">7,000万円未満</option>
                  <option value="">8,000万円未満</option>
                  <option value="">9,000万円未満</option>
                  <option value="">10,000万円未満</option>
                  <option value="">15,000万円未満</option>
                  <option value="">20,000万円未満</option>
                  <option value="">上限なし</option>
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
                  placeholder="詳細をご記載いただくことで、返信率が高くなります。"
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
                  <option value="">下限なし</option>
                  <option value="">40㎡以上</option>
                  <option value="">50㎡以上</option>
                  <option value="">60㎡以上</option>
                  <option value="">70㎡以上</option>
                  <option value="">80㎡以上</option>
                  <option value="">90㎡以上</option>
                  <option value="">100㎡以上</option>
                </select>
                <p className=" my-4"> 〜</p>
                <select
                  className=" border border-gray-500 py-4 px-8"
                  name="date"
                  id=""
                >
                  <option value="">40㎡未満</option>
                  <option value="">50㎡未満</option>
                  <option value="">60㎡未満</option>
                  <option value="">70㎡未満</option>
                  <option value="">80㎡未満</option>
                  <option value="">90㎡未満</option>
                  <option value="">100㎡未満</option>
                  <option value="">上限なし</option>
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
              <div className="my-4 space-y-4">
                <div className=" flex justify-evenly">
                  <p className=" bg-sky-500 text-white py-4 px-8 w-2/5">1R</p>
                  <p className=" bg-sky-500 text-white py-4 px-8 w-2/5">
                    1K/1DK/1LDK
                  </p>
                </div>
                <div className=" flex justify-evenly">
                  <p className=" bg-sky-500 text-white py-4 px-8 w-2/5">
                    2K/2DK/2LDK
                  </p>
                  <p className=" bg-sky-500 text-white py-4 px-8 w-2/5">
                    3K/3DK/3LDK
                  </p>
                </div>
                <div className=" flex justify-evenly ">
                  <p className=" bg-sky-500 text-white py-4 px-8 w-2/5">
                    4K/4DK/4LDK
                  </p>
                  <p className=" bg-sky-500 text-white py-4 px-8 w-2/5">
                    5K以上
                  </p>
                </div>
                <textarea
                  className=" w-full h-32 mx-auto border p-4"
                  placeholder="詳細をご記載いただくことで、返信率が高くなります。"
                  name=""
                  id=""
                ></textarea>
              </div>
            </div>

            {/* 駅徒歩 */}
            <div className=" w-full text-center border-b mt-8">
              <p className="text-sm bg-gray-100  py-4 px-8">駅徒歩</p>

              <div className="my-4 space-y-4">
                <div className=" flex justify-evenly ">
                  <p className=" bg-sky-500 text-white py-4 px-8 w-2/5">
                    指定なし
                  </p>
                  <p className=" bg-sky-500 text-white py-4 px-8 w-2/5">
                    1分以内
                  </p>
                </div>
                <div className=" flex justify-evenly">
                  <p className=" bg-sky-500 text-white py-4 px-8 w-2/5">
                    3分以内
                  </p>
                  <p className=" bg-sky-500 text-white py-4 px-8 w-2/5">
                    5分以内
                  </p>
                </div>
                <div className=" flex justify-evenly">
                  <p className=" bg-sky-500 text-white py-4 px-8 w-2/5">
                    7分以内
                  </p>
                  <p className=" bg-sky-500 text-white py-4 px-8 w-2/5">
                    10分以内
                  </p>
                </div>
                <div className=" flex justify-evenly">
                  <p className=" bg-sky-500 text-white py-4 px-8 w-2/5">
                    15分以内
                  </p>
                  <p className=" bg-sky-500 text-white py-4 px-8 w-2/5">
                    20分以内
                  </p>
                </div>
              </div>
            </div>

            {/* こだわり条件 */}
            <div className=" w-full text-center border-b mt-8">
              <p className="text-sm bg-gray-100  py-4 px-8">こだわり条件</p>

              <div className="my-4 space-y-4">
                <div className=" flex justify-evenly ">
                  <p className=" bg-sky-500 text-white py-4 px-8 w-2/5">
                    ペットと暮らせる
                  </p>
                  <p className=" bg-sky-500 text-white py-4 px-8 w-2/5">
                    敷地内、駐車場
                  </p>
                </div>
                <div className=" flex justify-evenly">
                  <p className=" bg-sky-500 text-white py-4 px-8 w-2/5">
                    近隣に公園があり
                  </p>
                  <p className=" bg-sky-500 text-white py-4 px-8 w-2/5">
                    子育て環境充実
                  </p>
                </div>
                <div className=" flex justify-evenly">
                  <p className=" bg-sky-500 text-white py-4 px-8 w-2/5">
                    セキュリティ充実
                  </p>
                  <p className=" bg-sky-500 text-white py-4 px-8 w-2/5">
                    角部屋
                  </p>
                </div>
                <div className=" flex justify-evenly">
                  <p className=" bg-sky-500 text-white py-4 px-8 w-2/5">
                    性能評価書取得
                  </p>
                  <p className=" bg-sky-500 text-white py-4 px-8 w-2/5">
                    地震対策
                  </p>
                </div>
                <div className=" flex justify-evenly">
                  <p className=" bg-sky-500 text-white py-4 px-8 w-2/5">
                    ディスポーザー
                  </p>
                  <p className=" bg-sky-500 text-white py-4 px-8 w-2/5">
                    ゴミ出し24時間可能
                  </p>
                </div>
                <div className=" flex justify-evenly">
                  <p className=" bg-sky-500 text-white py-4 px-8 w-2/5">
                    スーバーまで徒歩５分以内
                  </p>
                  <p className=" bg-sky-500 text-white py-4 px-8 w-2/5">
                    リビングダイニング15畳以上
                  </p>
                </div>
                <textarea
                  className=" w-full h-32 mx-auto border p-4"
                  placeholder="詳細をご記載いただくことで、返信率が高くなります。"
                  name=""
                  id=""
                ></textarea>
              </div>
            </div>

            <div className="mt-4">
              <button className=" bg-sky-500 text-white py-2 px-6 rounded-full">
                登録する
              </button>
            </div>
          </form>
        </section>
      </article>
    </CompanyLayout>
  );
}
