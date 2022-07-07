export interface Supplier {
  id?: string;
  document_type: string;
  document_number: string;
  full_name: string;
  address: string;
  email: string;
  active?: boolean;
  created_at?: string;
  update_ad?: string;
}

export interface SupplierAmountVeicle extends Supplier {
  count: string | null;
}
