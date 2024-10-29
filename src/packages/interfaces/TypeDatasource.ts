import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from "contentful";

export interface TypeDatasourceFields {
  name: EntryFieldTypes.Symbol;
  description: EntryFieldTypes.Text;
}

export type TypeDatasourceSkeleton = EntrySkeletonType<
  TypeDatasourceFields,
  "datasource"
>;
export type TypeDatasource<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode,
> = Entry<TypeDatasourceSkeleton, Modifiers, Locales>;

export function isTypeDatasource<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode,
>(
  entry: Entry<EntrySkeletonType, Modifiers, Locales>,
): entry is TypeDatasource<Modifiers, Locales> {
  return entry.sys.contentType.sys.id === "datasource";
}
