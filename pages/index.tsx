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
        <div className="bg-white p-8 lg:p-12">
          <h1 className="text-3xl font-bold text-gray-700 mb-4">VmX Email Signature</h1>
          <h3 className="text-xl font-bold text-gray-600 mb-4">Step 1</h3>
          <p className="mb-4">Fill in your details.</p>
          <p className="font-bold text-gray-600">Preview</p>
          <Signature />
          <h3 className="text-xl font-bold text-gray-600 mb-4">Step 2</h3>
          <div className="my-12">
            <a
              onClick={copySignatureToClipboard}
              className="uppercase text-white bg-primary cursor-pointer font-bold py-6 px-10 rounded-full hover:bg-brand-dark"
            >
              Copy
            </a>
          </div>
          <h3 className="text-xl font-bold text-gray-600 mb-4">Step 3</h3>
          <p>
            Paste into your email client. Example instructions for&nbsp;
            <a
              href="https://support.microsoft.com/en-us/office/create-and-add-an-email-signature-in-outlook-com-776d9006-abdf-444e-b5b7-a61821dff034"
              className="font-bold text-primary"
              target="_blank"
              rel="noopener"
            >
              Outlook
            </a>
            {" and "}
            <a
              href="https://support.google.com/mail/answer/8395?co=GENIE.Platform%3DDesktop&hl=en"
              className="font-bold text-primary"
              target="_blank"
              rel="noopener"
            >
              Gmail
            </a>
            .
          </p>
        </div>
      </section>
      <ToastContainer
        position="top-right"
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
