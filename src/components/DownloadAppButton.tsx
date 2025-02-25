import { Link } from "react-router-dom";

export default function DownloadAppButton() {
  return (
    <Link to="/app">
      <button className="font-weight-700 h-[47px] w-[137px] flex-row-reverse rounded-full bg-neutral-800 transition duration-150 hover:bg-neutral-700">
        <p className="text-neutral-50">Download</p>
      </button>
    </Link>
  );
}
