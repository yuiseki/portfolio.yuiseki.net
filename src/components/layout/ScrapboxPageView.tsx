import { Line } from "@progfay/scrapbox-parser";
import Head from "next/head";
import Link from "next/link";
import { Lines } from "../scrapbox/Lines";

export const ScrapboxPageView: React.FC<{
  rawTitle: string;
  displayTitle: string;
  lines: Line[];
}> = ({ rawTitle, displayTitle, lines }) => {
  return (
    <>
      <Head>
        <title>
          {displayTitle} | {process.env.siteName}
        </title>
      </Head>
      <h2>{displayTitle}</h2>
      <Lines lines={lines} />
      <footer>
        <div>
          Source:{" "}
          <Link
            href={
              "https://scrapbox.io/" +
              process.env.scrapboxProject +
              "/" +
              rawTitle
            }
          >
            <a target="_blank" rel="noreferrer">
              https://scrapbox.io/{process.env.scrapboxProject}/{rawTitle}
            </a>
          </Link>
        </div>
      </footer>
    </>
  );
};
