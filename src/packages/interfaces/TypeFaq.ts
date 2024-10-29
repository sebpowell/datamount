import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from "contentful";

export interface TypeFaqFields {
  title: EntryFieldTypes.Symbol;
  content: EntryFieldTypes.Text;
}

export type TypeFaqSkeleton = EntrySkeletonType<TypeFaqFields, "faq">;
export type TypeFaq<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode,
> = Entry<TypeFaqSkeleton, Modifiers, Locales>;

export function isTypeFaq<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode,
>(
  entry: Entry<EntrySkeletonType, Modifiers, Locales>,
): entry is TypeFaq<Modifiers, Locales> {
  return entry.sys.contentType.sys.id === "faq";
}
