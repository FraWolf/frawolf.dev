import { AppProps } from "next/app";
import DefaultLayout from "../components/Layout/DefaultLayout";

export default function FraWolfDev({ Component, pageProps }: AppProps) {
  return (
    <DefaultLayout>
      <Component {...pageProps} />
    </DefaultLayout>
  );
}
