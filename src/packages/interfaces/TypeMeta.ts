import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from "contentful";

export interface TypeMetaFields {
  title: EntryFieldTypes.Symbol;
  description: EntryFieldTypes.Text;
}

export type TypeMetaSkeleton = EntrySkeletonType<TypeMetaFields, "meta">;
export type TypeMeta<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode,
> = Entry<TypeMetaSkeleton, Modifiers, Locales>;

export function isTypeMeta<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode,
>(
  entry: Entry<EntrySkeletonType, Modifiers, Locales>,
): entry is TypeMeta<Modifiers, Locales> {
  return entry.sys.contentType.sys.id === "meta";
}
