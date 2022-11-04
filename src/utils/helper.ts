import parse from 'html-react-parser'

export const parserToHtml = (htmlStr: string) => {
  return parse(htmlStr)
}

export function calculateDiscount(sale_price: number, regular_price: number) {
  const discount = Math.floor((sale_price / regular_price) * 100)
  return discount
}

export function calculateSalePrice(regular_price: number, discount: number) {
  const salePrice = Math.floor(regular_price * (discount / 100))
  return salePrice
}
