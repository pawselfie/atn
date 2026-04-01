import siteData from "../public/assets/data.json";

export interface Project {
  name: string;
  type: string;
  url: string;
  discordExclusive?: boolean;
}

export interface Guide {
  name: string;
  url: string;
  image?: string;
}

export interface DataSheet {
  name: string;
  url: string;
  image?: string;
}

export interface SiteData {
  projects: Project[];
  discordInvite: string;
  guides: Guide[];
  dataSheets: DataSheet[];
}

export const data = siteData as SiteData;

export function toSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function toEmbedUrl(url: string): string {
  if (url.includes("docs.google.com/document")) {
    return url.replace(/\/edit.*$/, "/preview");
  }
  if (url.includes("docs.google.com/spreadsheets")) {
    return url.replace(/\/edit.*$/, "/htmlview?widget=true");
  }
  return url;
}
