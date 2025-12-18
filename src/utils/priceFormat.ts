export function formatPrice(price: number) {
  return (Number.isInteger(price) ? String(price) : price.toFixed(2)) + '$'
}