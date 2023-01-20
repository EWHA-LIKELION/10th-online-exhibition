// 메인 페이지
import Head from "next/head";
import Image from "next/image";

import test from "../assets/test.svg";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <p>메인 페이지</p>
    </>
  );
}
