import { TFunction, useTranslation } from 'next-i18next'


export const useLogic = (items: string[], label: string) => {
  // TODO[AliMoghimi] translate.
  const [translate] = useTranslation()

  const translateItems = (items: string[], translate: TFunction): string[] => {
    // TODO[AliMoghimi] translate.
    const itemsTexts: string[] = items.map((item: string): string =>
      translate(item),
    )

    return itemsTexts
  }

  const itemsTexts = translateItems(items, translate)

  // TODO[AliMoghimi] translate.
  const placeHolder: string = translate('انتخاب کنید')

  // TODO[AliMoghimi] translate.
  const titleText: string = translate(label)

  return { itemsTexts, placeHolder, titleText }
}