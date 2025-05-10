
import { getAllItems } from "../data/armoryData";

export const searchItems = (query: string) => {
  if (!query || query.trim() === "") {
    return [];
  }
  
  const items = getAllItems();
  const lowerQuery = query.toLowerCase().trim();
  
  return items.filter(item => {
    return item.name.toLowerCase().includes(lowerQuery);
  });
};
