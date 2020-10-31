import { toast } from "react-toastify";

export const copySignatureToClipboard = () => {
  window.getSelection()?.removeAllRanges();
  let range = document.createRange();
  const element = document.getElementById("signature");

  if (element) {
    range.selectNode(element);
    window.getSelection()?.addRange(range);
    document.execCommand("copy");
    window.getSelection()?.removeAllRanges();

    toast.dark("Copied 🎉");
  }
};
