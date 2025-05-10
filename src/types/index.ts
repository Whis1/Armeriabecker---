
export type MaterialType = {
  id: string;
  name: string;
  price: number;
};

export type ComponentType = {
  id: string;
  name: string;
  materials: {
    materialId: string;
    quantity: number;
  }[];
  variant?: string;
};

export type WeaponType = {
  id: string;
  name: string;
  components: {
    componentId: string;
    quantity: number;
  }[];
  image?: string;
};

export type AmmoType = {
  id: string;
  name: string;
  materials: {
    materialId: string;
    quantity: number;
  }[];
  count: number;
};

export type ItemType = MaterialType | ComponentType | WeaponType | AmmoType;

export type Category = "weapons" | "components" | "materials" | "ammo";
