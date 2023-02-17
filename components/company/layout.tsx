import Head from "next/head";
import { ReactNode } from "react";
import { CompanyNavgation } from "./navigation";

export const CompanyLayout = ({
  children,
  title = "default title",
}: {
  children?: ReactNode;
  title?: ReactNode;
}) => {
  return (
    <div>
      <Head>{title}</Head>
      <div className=" md:flex md:justify-center ">
        <header>
          <CompanyNavgation />
        </header>

        <main className=" max-w-md">{children}</main>
      </div>
    </div>
  );
};
