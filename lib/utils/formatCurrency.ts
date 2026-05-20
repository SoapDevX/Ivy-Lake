export function formatCurrency(amount: number, currency = 'LKR'): string {
  if (currency === 'LKR') return `LKR ${amount.toLocaleString()}`
  return new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(amount)
}
