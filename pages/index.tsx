import Head from "next/head";
import { ToastContainer } from "react-toastify";

import { copySignatureToClipboard } from "../utilities";
import Signature from "../components/Signature";

export default function Home() {
  return (
    <>
      <Head>
        <title>VmX Email Signature</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <section className="fixed top-0 left-0 overflow-y-scroll flex justify-center items-center bg-primary w-full h-full">
        <div className="bg-white p-8 lg:p-12 xl:p-16">
          <h1 className="text-3xl font-bold text-gray-700 mb-6">VmX Email Signature</h1>
          <div className="my-12">
            <a
              onClick={copySignatureToClipboard}
              className="uppercase text-white bg-primary cursor-pointer font-bold py-6 px-10 rounded-full hover:bg-brand-dark"
            >
              Copy
            </a>
          </div>
          <Signature />
        </div>
      </section>
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}
