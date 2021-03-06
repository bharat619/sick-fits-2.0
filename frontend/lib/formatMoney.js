export default function formatMoney(amount = 0) {
  const options = {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 2,
  };

  const formatter = new Intl.NumberFormat('en-IN', options);

  return formatter.format(amount);
}
