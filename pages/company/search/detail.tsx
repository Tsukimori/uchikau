import Link from "next/link";
import { CompanyLayout } from "../../../components/company/layout";

export default function SearchDetail() {
  return (
    <CompanyLayout>
      <article className="text-xs py-8 px-4">
        <section>
          <h1 className=" text-base font-semibold text-gray-600">
            ユーザー詳細
          </h1>
          <hr className=" border-gray-500 mt-2" />
          <div className=" flex justify-end mt-4">
            <input className="inline-block border scale-60" type="checkbox" />
            <p className=" text-xs ml-2">お気に入りに追加する</p>
          </div>
        </section>

        {/* <section className="mt-8">
          <h2 className=" text-sm">基本情報</h2>
          <div className=" space-y-2 bg-white shadow-sm border border-gray-50 p-4 mt-2">
            <dl className=" flex items-center gap-2 border-b pb-2">
              <dt className=" w-44 text-gray-400 py-4 px-4">お名前</dt>
              <dd className=" w-full py-4 px-4">山田 太郎</dd>
            </dl>
            <dl className=" flex items-center gap-2 border-b pb-2">
              <dt className="  w-44 text-gray-400 py-4 px-4">ニックネーム</dt>
              <dd className=" w-full py-4 px-4">ヤマタロ</dd>
            </dl>
            <dl className=" flex items-center gap-2 border-b pb-2">
              <dt className=" w-44 text-gray-400 py-4 px-4">メールアドレス</dt>
              <dd className=" w-full py-4 px-4">abc@abc.com</dd>
            </dl>

            <dl className=" flex items-center gap-2 border-b pb-2">
              <dt className=" w-44 text-gray-400 py-4 px-4">性別</dt>
              <dd className=" w-full py-4 px-4">男性</dd>
            </dl>
            <dl className=" flex items-center gap-2 border-b pb-2">
              <dt className=" w-44 text-gray-400 py-4 px-4">生年月日</dt>
              <dd className=" w-full py-4 px-4">1980年10月3日</dd>
            </dl>
            <dl className=" flex items-center gap-2 border-b pb-2">
              <dt className=" w-44 text-gray-400 py-4 px-4">住所</dt>
              <dd className=" w-full py-4 px-4">
                東京都世田谷区成城8丁目10 成城ハウス401号
              </dd>
            </dl>
            <dl className=" flex items-center gap-2 border-b pb-2 mb-8">
              <dt className=" w-44 text-gray-400 py-4 px-4">電話番号</dt>
              <dd className=" w-full py-4 px-4">080-1234-5678</dd>
            </dl>
          </div>
        </section> */}

        {/* <section className="mt-8">
          <h2 className=" text-sm">希望物件</h2>
          <div className=" space-y-2 bg-white shadow-sm border border-gray-50 p-4 mt-2">
            <dl className=" flex items-center gap-2 border-b pb-2">
              <dt className=" w-44 text-gray-400 py-4 px-4">購入時期</dt>
              <dd className=" w-full py-4 px-4">3ヶ月以内</dd>
            </dl>
            <dl className=" flex items-center gap-2 border-b pb-2">
              <dt className="  w-44 text-gray-400 py-4 px-4">価格</dt>
              <dd className=" w-full py-4 px-4">5,000万円〜9,000万円</dd>
            </dl>
            <dl className=" flex items-center gap-2 border-b pb-2">
              <dt className=" w-44 text-gray-400 py-4 px-4">エリア・沿線</dt>
              <dd className=" w-full py-4 px-4">港区元麻布 <br />地下鉄 日比谷線 広尾駅 </dd>

            </dl>

            <dl className=" flex items-center gap-2 border-b pb-2">
              <dt className=" w-44 text-gray-400 py-4 px-4">広さ</dt>
              <dd className=" w-full py-4 px-4">80㎡〜100㎡</dd>
            </dl>
            <dl className=" flex items-center gap-2 border-b pb-2">
              <dt className=" w-44 text-gray-400 py-4 px-4">間取り</dt>
              <dd className=" w-full py-4 px-4">2LDK</dd>
            </dl>
            <dl className=" flex items-center gap-2 border-b pb-2">
              <dt className=" w-44 text-gray-400 py-4 px-4">駅徒歩</dt>
              <dd className=" w-full py-4 px-4">
                5分以内
              </dd>
            </dl>
            <dl className=" flex items-center gap-2 border-b pb-2 mb-8">
              <dt className=" w-44 text-gray-400 py-4 px-4">電話番号</dt>
              <dd className=" w-full py-4 px-4">080-1234-5678</dd>
            </dl>
          </div>
        </section> */}


        <section className=" text-center">
          <div className=" w-full text-center border-b mt-4">
            <p className="text-sm bg-gray-100 py-4 px-8">購入時期</p>
            <div className=" my-4">
              <p className=" text-sm font-semibold text-gray-600">3ヶ月以内</p>
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
              <p className=" text-sm font-semibold text-gray-600">5,000万円</p>

              <p className=" my-4"> 〜</p>

              <p className=" text-sm font-semibold text-gray-600">9,000万円</p>
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

          <div className=" flex justify-center gap-2 mt-4">
            <button className=" bg-sky-500 text-white py-2 px-6  rounded-3xl">
              <Link href="/company/message/send">メッセージを送る</Link>
            </button>

            <div className=" flex items-center">
              <input className="inline-block border scale-60" type="checkbox" />
              <p className=" text-xs ml-2">お気に入りに追加する</p>
            </div>
          </div>
        </section>
      </article>
    </CompanyLayout>
  );
}
