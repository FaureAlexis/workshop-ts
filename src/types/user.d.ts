interface ShippingInfos {
  address: string;
  no: number | string;
  zip: number;
  city: string
}

interface User {
  name: string;
  role: "member" | "admin";
  email?: string;
}

export default User;
