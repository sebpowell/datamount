import { INavigationLink } from "@/packages/apps/docs/layouts/LayoutDocs/Links";

type ILink = { title: string; path: string; links?: ILink[] };
function getPaths(links: INavigationLink[], currentPath = "") {
  let paths: string[] = [];

  links.forEach((link) => {
    const newPath = `${currentPath}${link.path}`;
    paths.push(newPath);

    if (link.links) {
      paths = paths.concat(getPaths(link.links, `${newPath}/`));
    }
  });

  return paths;
}

const findLinkByFullPath = (
  links: ILink[],
  currentPath: string,
  fullPath: string | null,
): ILink | undefined => {
  for (const link of links) {
    const newPath = `${currentPath}${link.path}`;
    if (`/docs${newPath}` === fullPath) {
      return link;
    }
    if (link.links) {
      const foundLink = findLinkByFullPath(link.links, newPath, fullPath);
      if (foundLink) {
        return foundLink;
      }
    }
  }
  return undefined;
};

const findFirstPage = (
  links: INavigationLink[],
  basePath: string = "",
): string => {
  for (const link of links) {
    const currentPath = `${basePath}/${link.path}`;
    if (link.links && link.links.length > 0) {
      // If there are nested links, dive deeper
      const nestedPath = findFirstPage(link.links, currentPath);
      if (nestedPath) return nestedPath;
    } else {
      // Found a leaf node, return its path
      return currentPath;
    }
  }
  // In case there are no links or an empty array was passed
  return "";
};

function findPage(
  links: INavigationLink[],
  slug: string[],
  currentPath = "",
): INavigationLink | null {
  for (let link of links) {
    const newPath = `${currentPath}${link.path}`;
    if (newPath === slug.join("/")) {
      return link;
    }
    if (link.links) {
      const foundLink = findPage(link.links, slug, `${newPath}/`);
      if (foundLink) {
        return foundLink;
      }
    }
  }
  return null;
}

export { findPage, getPaths, findFirstPage, findLinkByFullPath };
