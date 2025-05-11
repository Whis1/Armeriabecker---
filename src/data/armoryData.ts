
import { MaterialType, ComponentType, WeaponType, AmmoType } from "../types";

export const materials: MaterialType[] = [
  { id: "iron", name: "Ferro", price: 0.01 },
  { id: "wood", name: "Legno", price: 0.01 },
  { id: "sand", name: "Sabbia", price: 0.01 },
  { id: "sap", name: "Linfa", price: 0.01 },
  { id: "fiber", name: "Fibra", price: 0.01 },
  { id: "stone", name: "Pietra", price: 0.01 },
  { id: "copper", name: "Rame", price: 0.01 },
  { id: "coal", name: "Carbone", price: 0.01 },
  { id: "broken_tool", name: "Attrezzo Rotto", price: 0.50 },
  { id: "broken_weapon", name: "Arma Rotta", price: 2.50 },
  { id: "copper_tube", name: "Tubo di Rame", price: 0.50 },
];

export const components: ComponentType[] = [
  { 
    id: "functional_parts_1", 
    name: "Parti Funzionali", 
    variant: "1",
    materials: [
      { materialId: "iron", quantity: 5 },
      { materialId: "wood", quantity: 5 },
      { materialId: "sand", quantity: 5 },
    ]
  },
  { 
    id: "functional_parts_2", 
    name: "Parti Funzionali", 
    variant: "2",
    materials: [
      { materialId: "iron", quantity: 5 },
      { materialId: "sap", quantity: 5 },
      { materialId: "fiber", quantity: 5 },
    ]
  },
  { 
    id: "functional_parts_3", 
    name: "Parti Funzionali", 
    variant: "3",
    materials: [
      { materialId: "stone", quantity: 5 },
      { materialId: "copper", quantity: 5 },
      { materialId: "wood", quantity: 5 },
    ]
  },
  { 
    id: "work_tools_1", 
    name: "Attrezzi da Lavoro", 
    variant: "1",
    materials: [
      { materialId: "iron", quantity: 15 },
      { materialId: "wood", quantity: 15 },
      { materialId: "sand", quantity: 15 },
    ]
  },
  { 
    id: "work_tools_2", 
    name: "Attrezzi da Lavoro", 
    variant: "2",
    materials: [
      { materialId: "iron", quantity: 15 },
      { materialId: "sap", quantity: 15 },
      { materialId: "fiber", quantity: 15 },
    ]
  },
  { 
    id: "work_tools_3", 
    name: "Attrezzi da Lavoro", 
    variant: "3",
    materials: [
      { materialId: "stone", quantity: 15 },
      { materialId: "copper", quantity: 15 },
      { materialId: "wood", quantity: 15 },
    ]
  },
  { 
    id: "scrap", 
    name: "Rottami", 
    materials: [
      { materialId: "broken_tool", quantity: 1 },
    ]
  },
  { 
    id: "scrap_bulk", 
    name: "Rottami x30", 
    materials: [
      { materialId: "broken_weapon", quantity: 1 },
    ]
  },
  { 
    id: "maintenance_kit", 
    name: "Kit di Manutenzione", 
    materials: [
      { materialId: "copper", quantity: 1 },
      { componentId: "processed_minerals", quantity: 1 },
      { componentId: "functional_parts_1", quantity: 1 },
    ]
  },
  { 
    id: "processed_minerals", 
    name: "Minerali Lavorati", 
    materials: [
      { componentId: "functional_parts_1", quantity: 1 },
    ]
  },
  { 
    id: "improved_parts", 
    name: "Parti Migliorate", 
    materials: [
      { componentId: "processed_minerals", quantity: 3 },
    ]
  },
  { 
    id: "weapon_oil", 
    name: "Olio per Armi", 
    materials: [
      { componentId: "processed_minerals", quantity: 1 },
    ]
  },
];

export const weapons: WeaponType[] = [
  {
    id: "revolver_double_action",
    name: "Double Action Revolver",
    components: [
      { componentId: "processed_minerals", quantity: 5 },
      { componentId: "work_tools_1", quantity: 5 },
      { componentId: "maintenance_kit", quantity: 1 },
    ],
    image: "/revolver.png"
  },
  {
    id: "carbine_repeater",
    name: "Carabine Repeater",
    components: [
      { componentId: "processed_minerals", quantity: 10 },
      { componentId: "work_tools_1", quantity: 10 },
      { componentId: "maintenance_kit", quantity: 10 },
    ],
    image: "/carbine.png"
  },
  {
    id: "henry_repeater",
    name: "Henry Repeater",
    components: [
      { componentId: "processed_minerals", quantity: 40 },
      { componentId: "work_tools_1", quantity: 30 },
      { componentId: "maintenance_kit", quantity: 10 },
    ],
    image: "/henry.png"
  }
];

export const ammo: AmmoType[] = [
  {
    id: "revolver_ammo",
    name: "Revolver Ammo",
    count: 50,
    materials: [
      { materialId: "scrap", quantity: 10 },
      { materialId: "coal", quantity: 5 },
      { materialId: "fiber", quantity: 5 },
    ]
  },
  {
    id: "repeater_ammo",
    name: "Repeater Ammo",
    count: 30,
    materials: [
      { materialId: "scrap", quantity: 30 },
      { materialId: "coal", quantity: 10 },
      { materialId: "fiber", quantity: 10 },
    ]
  }
];

export const getAllItems = () => {
  return [
    ...materials.map(item => ({ ...item, category: "materials" })),
    ...components.map(item => ({ ...item, category: "components" })),
    ...weapons.map(item => ({ ...item, category: "weapons" })),
    ...ammo.map(item => ({ ...item, category: "ammo" }))
  ];
};

export const getItemById = (id: string) => {
  return [...materials, ...components, ...weapons, ...ammo].find(item => item.id === id);
};

export const getMaterialById = (id: string) => {
  return materials.find(material => material.id === id);
};

export const getComponentById = (id: string) => {
  return components.find(component => component.id === id);
};
