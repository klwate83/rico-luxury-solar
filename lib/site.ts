export const siteConfig = {
  name: "RICO Luxury Solar Energy",
  phoneDisplay: "+27 00 000 0000",
  phoneHref: "+27000000000",
  whatsappNumber: "27000000000",
  email: "hello@ricoluxurysolar.co.za",
  serviceArea: "Cape Town and selected Western Cape areas"
};

export const whatsappLink = (message: string) =>
  `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
