export const getBaseUrl = () => {
  return `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api`;
};

const SiteConfig = {
  google_tag_id: "",
  site_name: "Datamount",
  cs_email: "support@datamount.io",
  company_legal_name: "Datamount",
  base_url: getBaseUrl(),
  contentful_page_ids: {
    home: "N95TcPqb0M4GuQzGNukIv",
    privacy_policy: "5mDkushsmafnF2auW8vmgn",
    terms: "2A7gHXn4kqQlglSGAiFeAu",
  },
};

export { SiteConfig };
