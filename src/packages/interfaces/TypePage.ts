import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from "contentful";
import type { TypeMetaSkeleton } from "./TypeMeta";
import type { TypeModuleRichTextSkeleton } from "./TypeModuleRichText";

export interface TypePageFields {
  title: EntryFieldTypes.Symbol;
  slug: EntryFieldTypes.Symbol;
  meta: EntryFieldTypes.EntryLink<TypeMetaSkeleton>;
  modules?: EntryFieldTypes.Array<
    EntryFieldTypes.EntryLink<TypeModuleRichTextSkeleton>
  >;
}

export type TypePageSkeleton = EntrySkeletonType<TypePageFields, "page">;
export type TypePage<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode,
> = Entry<TypePageSkeleton, Modifiers, Locales>;

export function isTypePage<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode,
>(
  entry: Entry<EntrySkeletonType, Modifiers, Locales>,
): entry is TypePage<Modifiers, Locales> {
  return entry.sys.contentType.sys.id === "page";
}
