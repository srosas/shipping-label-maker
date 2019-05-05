export function getShippingOption(shippingOption) {
  if (shippingOption === "1") return "Ground Shipping"
  else if (shippingOption === "2") return "Express Shipping"
  else return "No Shipping Selected"
}

export function getShippingCost(weight, shippingOption) {
  const shippingRate = 0.40
  return (Number(weight) * shippingRate * (shippingOption === "1" ? 1 : 1.5)).toFixed(2);
}