
export interface MaterialType {
  id: string;
  name: string;
  price: number;
}

export interface ComponentMaterial {
  materialId?: string;
  componentId?: string;
  quantity: number;
}

export interface ComponentType {
  id: string;
  name: string;
  variant?: string;
  materials: ComponentMaterial[];
}

export interface WeaponComponent {
  componentId: string;
  quantity: number;
}

export interface WeaponType {
  id: string;
  name: string;
  components: WeaponComponent[];
  image: string;
}

export interface AmmoType {
  id: string;
  name: string;
  count: number;
  materials: ComponentMaterial[];
}
