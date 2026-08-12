export const SITE = 
{
      name: 'BYTE'
    , titleTemplate: "%s | BYTE"
    , description: "blank"
    , url: "https://bytesym.link"

    , twitterHandle: '@BYTE_SYLK'

    , lang: "en"
    , locale: "en_UK"
} as const;

export type SiteConfig = typeof SITE;