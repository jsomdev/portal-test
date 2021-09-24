import type {
  GetStaticProps,
  GetStaticPropsContext,
  GetStaticPropsResult,
  NextPage,
} from "next";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import React from "react";
import { useIntl } from "react-intl";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import { getMarkdownByFileName } from "../../../docs/data";
import { messageIds, supportedLocales } from "../../../services/i18n";
import { Head } from "../../../widgets/head/head";
interface II18NProps {
  markdown: string;
}

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
): Promise<GetStaticPropsResult<II18NProps>> => {
  const markdown = getMarkdownByFileName("i18n", ["content"]);
  return {
    props: {
      markdown: markdown.content,
    },
  };
};

const I18N: NextPage<II18NProps> = (props: II18NProps) => {
  const { formatMessage } = useIntl();
  const { pathname } = useRouter();

  return (
    <div>
      <Head
        title={formatMessage({ id: messageIds.pages.i18n.title })}
        description={formatMessage({ id: messageIds.pages.i18n.description })}
      />

      <div>
        <h1>I18N Applied</h1>
        <ReactMarkdown className={"reactMarkdown"}>
          {props.markdown}
        </ReactMarkdown>
        <h3>
          {formatMessage({
            id: messageIds.pages.i18n.title,
          })}
        </h3>
        <h4>
          {formatMessage({
            id: messageIds.pages.i18n.description,
          })}
        </h4>
        <h1>Supported Locales</h1>
        {supportedLocales?.map((locale) => (
          <Link key={locale} href={pathname} locale={locale} passHref>
            <a rel="canonical"> {locale}</a>
          </Link>
        ))}
      </div>
      <style jsx>{`
        button {
          margin: 8px;
          padding: 4px;
          font-size: 22px;
        }
      `}</style>
    </div>
  );
};

export default I18N;
