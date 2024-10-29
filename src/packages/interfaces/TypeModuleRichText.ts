import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from "contentful";

export interface TypeModuleRichTextFields {
  title: EntryFieldTypes.Symbol;
  content?: EntryFieldTypes.RichText;
}

export type TypeModuleRichTextSkeleton = EntrySkeletonType<
  TypeModuleRichTextFields,
  "moduleRichText"
>;
export type TypeModuleRichText<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode,
> = Entry<TypeModuleRichTextSkeleton, Modifiers, Locales>;

export function isTypeModuleRichText<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode,
>(
  entry: Entry<EntrySkeletonType, Modifiers, Locales>,
): entry is TypeModuleRichText<Modifiers, Locales> {
  return entry.sys.contentType.sys.id === "moduleRichText";
}
