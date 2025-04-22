import firstHouse from "@/assets/images/first-house.png";
import secondHouse from "@/assets/images/second-house.png";
import thirdHouse from "@/assets/images/third-house.png";
import firstApartment from "@/assets/images/first-apartment.png";
import secondApartment from "@/assets/images/second-apartment.png";
import thirdApartment from "@/assets/images/third-apartment.png";

export const content = {
  tabs: ["Houses", "Apartments"],
  title: "We make it easy for houses and apartments.",
  description:
    "Whether it’s selling your current home, getting financing, or buying a new home, we make it easy  and efficient. The best part? you’ll save a bunch of money and time with our services.",
  housesCards: [
    {
      image: firstHouse,
      price: 3440,
      name: "Palm Harbor",
      address: "2699 Green Valley, Highland Lake, FL",
    },
    {
      image: secondHouse,
      price: 6550,
      name: "St. Crystal",
      address: "210 US Highway, Highland Lake, FL",
    },
    {
      image: thirdHouse,
      price: 4950,
      name: "Faulkner Ave",
      address: "909 Woodland St, Michigan, IN",
    },
  ],
  apartmentsCards: [
    {
      image: firstApartment,
      price: 2140,
      name: "Tarpon Bay",
      address: "103 Lake Shores, Michigan, IN",
    },
    {
      image: secondApartment,
      price: 1450,
      name: "Cove Red",
      address: "243 Curlew Road, Palm Harbor, TX",
    },
    {
      image: thirdApartment,
      price: 3850,
      name: "Beverly Springfield",
      address: "2821 Lake Sevilla, Palm Harbor, TX",
    },
  ],
};
