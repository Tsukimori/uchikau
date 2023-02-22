import { CompanyLayout } from "../../../components/company/layout";

export default function CompanyMyPage() {
  return (
    <CompanyLayout>
      <article className="text-xs py-8 px-4 max-w-full">
        <section>
          <h1 className=" text-base font-semibold text-gray-600">マイページ</h1>
          <hr className=" border-gray-500 mt-2" />

          <div className=" mt-8">
            <h2 className=" text-gray-600">基本情報</h2>
            <div className="w-full mt-4">
              <p className="py-4 px-4 text-left border mt-2">
                株式会社 ウチカウホームズ
              </p>
              <p className="py-4 px-4 text-left border mt-2"> abc@abc.com</p>
              <p className="py-4 px-4 text-left border mt-2"> 担当 次郎</p>
              <p className="py-4 px-4 text-left border mt-2"> 東京都港区</p>
              <p className="py-4 px-4 text-left border mt-2"> 03-1234-5678</p>
            </div>
          </div>
          <div className=" mt-12">
            <h2 className=" text-gray-600">プラン</h2>
            <div className="w-full mt-4">
              <div className="py-4 px-4 text-left border mt-2">
                <h3>月額有料会員</h3>
                <hr className=" mt-2 w-4/5" />
                <h4 className=" mt-4">プランの有効期限</h4>
                <p className=" text-gray-400 text-[10px] mt-2">2023年3月31日</p>
                <hr className=" mt-2 w-4/5" />
                <h5 className=" mt-4">自動更新:オン</h5>

                <button className=" bg-red-600 text-white text-xs py-2 px-6 mt-2 rounded-3xl ">
                  自動更新をオフにする
                </button>
                <hr className=" mt-2 w-4/5" />

                <dl className=" mt-4">
                  <dt>今月のメッセージ送信数</dt>
                  <dd className=" mt-2">( 120通 )</dd>
                </dl>
              </div>
              <div></div>
            </div>
          </div>
          <div className="mt-12">
            <h2 className=" text-gray-600">お支払い方法</h2>
            <div className="w-full mt-4">
              <div className="py-4 px-4 text-left border mt-2">
                <p className=" text-gray-400 text-[10px]">請求書支払い</p>
              </div>
              <button className=" border text-xs py-2 px-8 mt-4 rounded-3xl ">
                お支払い方法を変更
              </button>
            </div>
          </div>
        </section>
      </article>
    </CompanyLayout>
  );
}
