export function formatRupiah(angka: number) {
  const number = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "IDR",
  }).format(angka);
  return number;
}
