export interface Vehicle {
  id?: string;
  license_plate: string;
  model: string;
  sub_brand: string;
  id_brand: string;
  active?: boolean;
  created_at?: string;
  update_ad?: string;
}

export interface VehicleDriver extends Vehicle {
  document_number: string | null;
  full_name: string | null;
  denomination: string;
}
