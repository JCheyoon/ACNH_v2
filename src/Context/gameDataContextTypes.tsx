//villagers Data
interface VillagerResponse {
  id: number;
  name: { "name-USen": string };
  personality: string;
  ["birthday-string"]: string;
  species: string;
  gender: string;
  ["catch-phrase"]: string;
  icon_uri: string;
  image_uri: string;
}

export interface VillagerData {
  id: number;
  name: string;
  personality: string;
  birthdayString: string;
  species: string;
  gender: string;
  catchPhrase: string;
  iconUrl: string;
  imageUrl: string;
}

export function mapVillagerData(response: VillagerResponse): VillagerData {
  return {
    id: response.id,
    birthdayString: response["birthday-string"],
    catchPhrase: response["catch-phrase"],
    gender: response.gender,
    iconUrl: response.icon_uri,
    imageUrl: response.image_uri,
    name: response.name["name-USen"],
    personality: response.personality,
    species: response.species,
  };
}

//Items Data
export interface ItemsResponse {
  id: number;
  name: { "name-USen": string };
  availability?: {
    "month-northern": string;
    "month-southern": string;
    time: string;
    location: string;
    isAllDay: boolean;
    isAllYear: boolean;
  };
  shadow?: string;
  price: number;
  image_uri: string;
  icon_uri: string;
  "sell-price"?: string;
  "buy-price"?: string;
  variant?: string;
  size?: string;
  isDIY?: boolean;
}

export interface ItemsData {
  id: number;
  name: string;
  imageUrl: string;
  price?: number;
  northern?: string;
  southern?: string;
  time?: string;
  location?: string;
  shadow?: string;
  sellPrice?: string;
  buyPrice?: string;
  isAllDay?: boolean;
  isAllYear?: boolean;
  variants?: string[];
  size?: string;
  isDIY?: boolean;
}

export function mapItemsData(response: ItemsResponse): ItemsData {
  return {
    buyPrice: response["buy-price"],
    id: response.id,
    imageUrl: response.icon_uri ?? response.image_uri,
    location: response.availability?.location,
    name: response.name["name-USen"],
    northern: response.availability?.["month-northern"],
    price: response.price,
    sellPrice: response["sell-price"],
    shadow: response.shadow,
    southern: response.availability?.["month-southern"],
    time: response.availability?.time,
    isAllDay: response.availability?.isAllDay,
    isAllYear: response.availability?.isAllYear,
    size: response.size,
    isDIY: response.isDIY,
  };
}
