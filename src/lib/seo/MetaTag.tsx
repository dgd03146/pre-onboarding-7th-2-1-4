import { Helmet } from "react-helmet-async";

interface MetaProps {
  description: string;
  title: string;
  imgsrc: string;
}

export const MetaTag = ({ title, description, imgsrc }: MetaProps) => {
  // props로 content 내용을 불러올 예정임
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {/* 
      <meta name="keywords" content={props.keywords} /> */}

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:site_name" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imgsrc} />
      {/* <meta property="og:url" content={props.url} /> */}

      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imgsrc} />

      {/* <link rel="canonical" href={props.url} /> */}
    </Helmet>
  );
};
