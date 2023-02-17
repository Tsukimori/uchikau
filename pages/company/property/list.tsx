import { CompanyLayout } from "../../../components/company/layout";
import Link from "next/link";

export default function PropertyList() {
  return (
    <CompanyLayout title="">
      <article className=" md:w-3/4 text-xs py-8 px-4">
        <section>
          <h1 className=" text-lg font-semibold text-gray-600">登録物件一覧</h1>
          <hr className=" border-gray-500 mt-2" />
          <div className=" text-right">
            <Link href="/company/property/addNew">
              <button className=" bg-sky-500 text-white text-xs py-2 px-8 mt-4 rounded-3xl ">
                新規登録
              </button>
            </Link>
          </div>
          <div className=" flex items-center py-4 px-4 border w-full mt-4">
            <Link href="/company/property/detail">
              <div className=" flex items-center ">
                <p className=" mr-2">
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
                </p>
                <dl className=" flex gap-2 w-full">
                  <dt>ウチカウホーム 芝公園前 </dt>
                  <dd className="">港区</dd>
                  <dd className="">3LDK</dd>
                  <dd>竣工前</dd>
                  <dd>モデルルームOPEN済み</dd>
                </dl>
              </div>
            </Link>
          </div>
          <div className=" flex items-center py-4 px-4 border w-full mt-4">
            <p className=" mr-2">
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
            </p>
            <dl className=" flex gap-2 w-full">
              <dt>ウチカウホーム 芝公園前 </dt>
              <dd className="">港区</dd>
              <dd className="">2LDK</dd>
              <dd>竣工前</dd>
              <dd>モデルルームOPEN済み</dd>
            </dl>
          </div>
        </section>
      </article>
    </CompanyLayout>
  );
}
