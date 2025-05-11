
import { getAllItems } from "../data/armoryData";

export const searchItems = (query: string) => {
  if (!query || query.trim() === "") {
    return [];
  }
  
  const items = getAllItems();
  const lowerQuery = query.toLowerCase().trim();
  
  // Filtra gli elementi che iniziano con la query o la contengono
  return items.filter(item => {
    const itemName = item.name.toLowerCase();
    // Priorità agli elementi che iniziano con la query
    return itemName.startsWith(lowerQuery) || itemName.includes(lowerQuery);
  });
};
