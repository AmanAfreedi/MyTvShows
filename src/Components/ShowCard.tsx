import { FC } from "react";
import { Link } from "react-router-dom";
import { Show } from "../models/Show";
type props = {
  show:Show,
}
const ShowCard: FC<props>=({show})=> {
  return (
    <div className="max-w-xs   rounded-md shadow-md p-2 m-1">
      <img
        src={show.image?.medium || "https://www.dreamstime.com/grunge-textured-not-available-stamp-seal-not-available-stamp-seal-watermark-distress-style-blue-vector-rubber-print-not-image138792800"}
        alt=""
        className="object-cover object-center w-full rounded-t-md h-72"
      />
      <div className="flex flex-col  justify-between p-6 space-y-8">
        <div className="space-y-2 max-h-[60vh] overflow-hidden">
          <h2 className="text-3xl font-semibold tracking-wide">{show.name }</h2>
          <p dangerouslySetInnerHTML={{ __html: show.summary as string }} />
        </div>
        <Link
          to={"/show/"+show.id}
          className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}

export default ShowCard;
