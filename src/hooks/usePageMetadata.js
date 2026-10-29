import { useEffect } from "react";

const brand = "Houdini Adventures";

export function usePageMetadata(title, description) {
  useEffect(() => {
    document.title = `${title} | ${brand}`;

    let descriptionTag = document.querySelector('meta[name="description"]');
    if (!descriptionTag) {
      descriptionTag = document.createElement("meta");
      descriptionTag.setAttribute("name", "description");
      document.head.append(descriptionTag);
    }
    descriptionTag.setAttribute("content", description.slice(0, 160));
    setMetaProperty("og:title", document.title);
    setMetaProperty("og:description", description.slice(0, 160));

    const siteUrl = import.meta.env.VITE_SITE_URL;
    let canonicalTag = document.querySelector('link[rel="canonical"]');
    const canonicalBase = siteUrl && URL.canParse(siteUrl) ? new URL(siteUrl) : null;
    if (canonicalBase?.protocol === "https:") {
      if (!canonicalTag) {
        canonicalTag = document.createElement("link");
        canonicalTag.setAttribute("rel", "canonical");
        document.head.append(canonicalTag);
      }
      const canonicalUrl = new URL(window.location.pathname, canonicalBase).href;
      canonicalTag.setAttribute("href", canonicalUrl);
      setMetaProperty("og:url", canonicalUrl);
    } else {
      canonicalTag?.remove();
      document.querySelector('meta[property="og:url"]')?.remove();
    }
  }, [description, title]);
}

function setMetaProperty(property, content) {
  let metaTag = document.querySelector(`meta[property="${property}"]`);
  if (!metaTag) {
    metaTag = document.createElement("meta");
    metaTag.setAttribute("property", property);
    document.head.append(metaTag);
  }
  metaTag.setAttribute("content", content);
}
