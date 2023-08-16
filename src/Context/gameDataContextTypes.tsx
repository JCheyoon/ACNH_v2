//villagers Data
interface VillagerResponse {
  id: number;
  name: string;
  personality: string;
  birthday_month: string;
  birthday_day: string;
  species: string;
  gender: string;
  phrase: string;
  image_url: string;
}

export interface VillagerData {
  id: number;
  name: string;
  personality: string;
  birthdayMonth: string;
  birthdayDay: string;
  species: string;
  gender: string;
  phrase: string;
  imageUrl: string;
}

export function mapVillagerData(response: VillagerResponse): VillagerData {
  return {
    id: response.id,
    birthdayMonth: response.birthday_month,
    birthdayDay: response.birthday_day,
    phrase: response.phrase,
    gender: response.gender,
    imageUrl: response.image_url,
    name: response.name,
    personality: response.personality,
    species: response.species,
  };
}

//Items Data
export interface ItemsResponse {
  id: number;
  name: string;
  north?: {
    availability_array: {
      months: string;
      time: string;
    }[];
  };
  south?: {
    availability_array: {
      months: string;
      time: string;
    }[];
  };
  location?: string;
  shadow?: string;
  price: number;
  image_url: string;
  sell_nook?: string;
  buy?: string;
  variant?: string;
  size?: string;
  isDIY?: boolean;
}

export interface ItemsData {
  id: number;
  name: string;
  imageUrl: string;
  price?: number;
  north?: string;
  south?: string;
  time?: string;
  location?: string;
  shadow?: string;
  sell_nook?: string;
  buy?: string;
  isAllDay?: boolean;
  isAllYear?: boolean;
  variants?: string[];
  size?: string;
  isDIY?: boolean;
}

export function mapItemsData(response: ItemsResponse): ItemsData {
  return {
    buy: response.buy,
    id: response.id,
    imageUrl: response.image_url,
    location: response.location,
    name: response.name,
    north: response.north?.availability_array[0]?.months,
    price: response.price,
    sell_nook: response.sell_nook,
    shadow: response.shadow,
    south: response.south?.availability_array[0]?.months,
    size: response.size,
    isDIY: response.isDIY,
  };
}
