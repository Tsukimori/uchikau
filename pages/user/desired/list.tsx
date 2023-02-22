import { Layout } from "../../../components/user/layout";
import Link from "next/link";

export default function DesiredList() {
  return (
    <Layout title="">
      <article className="text-xs py-8 px-4 w-full ">
        <section>
          <h1 className=" text-base font-semibold text-gray-600">
            登録物件 一覧
          </h1>
          <hr className=" border-gray-500 mt-2" />
          <div className=" text-right">
            <button className=" bg-sky-500 text-white text-xs py-2 px-6 mt-4 rounded-3xl ">
              <Link href="/user/desired/addNew">新規登録</Link>
            </button>
          </div>
        </section>
        <section className="bg-white shadow-sm border border-gray-50 p-4 mt-4">
          <div className=" space-y-2 border-b py-2">
            <p className="text-gray-400">0221025ABCDE</p>
            <ul className=" grid grid-cols-4 gap-2 text-center">
              <li className=" bg-gray-300 text-white text-xs py-1 px-2 rounded-3xl  ">
                港区
              </li>
              <li className=" bg-gray-300 text-white text-xs py-1 px-2 rounded-3xl  ">
                2LDK
              </li>
              <li className=" bg-gray-300 text-white text-xs py-1 px-2 rounded-3xl  ">
                2階以上
              </li>
              <li className=" bg-gray-300 text-white text-xs py-1 px-2 rounded-3xl  ">
                東急東横線
              </li>
              <li className=" bg-gray-300 text-white text-xs py-1 px-2 rounded-3xl  ">
                駐車場有
              </li>
            </ul>
            <div className=" text-right">
              <button className=" bg-sky-500 text-white text-xs py-2 px-6 mt-4 rounded-3xl ">
                <Link href="/user/desired/detail">修正する</Link>
              </button>
            </div>
          </div>
          <div className=" space-y-2 border-b py-2">
            <p className="text-gray-400">0221025ABCDE</p>
            <ul className=" grid grid-cols-4 gap-2 text-center">
              <li className=" bg-gray-300 text-white text-xs py-1 px-2 rounded-3xl  ">
                港区
              </li>
              <li className=" bg-gray-300 text-white text-xs py-1 px-2 rounded-3xl  ">
                2LDK
              </li>
              <li className=" bg-gray-300 text-white text-xs py-1 px-2 rounded-3xl  ">
                2階以上
              </li>
              <li className=" bg-gray-300 text-white text-xs py-1 px-2 rounded-3xl  ">
                東急東横線
              </li>
              <li className=" bg-gray-300 text-white text-xs py-1 px-2 rounded-3xl  ">
                駐車場有
              </li>
            </ul>
            <div className=" text-right">
              <button className=" bg-sky-500 text-white text-xs py-2 px-6 mt-4 rounded-3xl ">
                <Link href="/user/desired/detail">修正する</Link>
              </button>
            </div>
          </div>
        </section>
      </article>
    </Layout>
  );
}
