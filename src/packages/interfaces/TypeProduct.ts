import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from "contentful";

export interface TypeProductFields {
  name: EntryFieldTypes.Symbol;
  slug: EntryFieldTypes.Symbol;
}

export type TypeProductSkeleton = EntrySkeletonType<
  TypeProductFields,
  "product"
>;
export type TypeProduct<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode,
> = Entry<TypeProductSkeleton, Modifiers, Locales>;

export function isTypeProduct<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode,
>(
  entry: Entry<EntrySkeletonType, Modifiers, Locales>,
): entry is TypeProduct<Modifiers, Locales> {
  return entry.sys.contentType.sys.id === "product";
}
