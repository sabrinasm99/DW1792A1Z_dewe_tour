import payment from "../image/payment.png";
import qrcode from "../image/qrcode.svg";
import icon2 from "../image/icon2.svg";
import sydneydetail from "../image/sydneydetail.png";
import sydney1 from "../image/sydney1.png";
import sydney2 from "../image/sydney2.png";
import sydney3 from "../image/sydney3.png";
export const userDataTrip = [
  {
    id: 1,
    icon: icon2,
    name: "Radif Ganteng",
    gender: "Male",
    phone: "083896833112",
    destination: "6D/4N Fun Tassie Vacation",
    country: "Australia",
    bookingDay: "Saturday",
    bookingDate: "22 July 2020",
    qrcode: qrcode,
    barcode: "TCK0101",
    paymentProof: payment,
    qty: 1,
    total: "12,398,000",
    dateTrip: "26 August 2020",
    duration: "6 Days 4 Nights",
    accomodation: "Hotel 4 Nights",
    transportation: "Qatar Airways",
  },
];
export const detailTrip = [
  {
    id: 1,
    title: "6D/4N Fun Tassie Vacation + Sydney",
    country: "Australia",
    photo1: sydneydetail,
    photo2: sydney1,
    photo3: sydney2,
    photo4: sydney3,
    accomodation: "Hotel 4 Nights",
    transportation: "Qatar Airways",
    eat: "Included as Itinerary",
    duration: "6 Days 4 Nights",
    dateTrip: "26 August 2020",
    headDescription: 'Lorem Ipsum',
    description:
      "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    price: 12398000,
  },
];

export const countryOptions = ['Indonesia', 'South Korea', 'Japan', 'Australia']