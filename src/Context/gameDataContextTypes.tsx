//villagers Data
import { EncyclopediaType } from "../Routes/Encyclopedias";
import { CollectionType } from "../Routes/Collections";

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
  real_info?: {
    image_url: string;
  };
  location?: string;
  shadow_size?: string;
  image_url: string;
  sell_nook?: string;
  buy?: string | { price: string }[];
  variations?: {
    variation: string;
    image_url: string;
  }[];

  size?: string;
}

export interface ItemsData {
  id: number;
  name: string;
  imageUrl: string;
  north?: string;
  south?: string;
  location?: string;
  shadow?: string;
  sellNook?: string;
  buy?: string;
  variations?: string[];

  size?: string;
  artPic?: string;
}

function getPicture(response: ItemsResponse) {
  if (response.real_info) {
    return response.real_info?.image_url;
  } else if (response.variations?.length && response.variations[0]) {
    return response.variations[0].image_url;
  }
}
function getBuyPrice(response: ItemsResponse) {
  if (typeof response.buy === "string") {
    return response.buy;
  } else if (Array.isArray(response.buy) && response.buy[0]) {
    return response.buy[0].price;
  }
}

export function mapItemsData(response: ItemsResponse): ItemsData {
  return {
    buy: getBuyPrice(response),
    id: response.id,
    imageUrl: response.image_url,
    location: response.location,
    name: response.name,
    north: response.north?.availability_array[0]?.months,
    sellNook: response.sell_nook,
    shadow: response.shadow_size,
    south: response.south?.availability_array[0]?.months,
    artPic: getPicture(response),
    size: response.size,
    variations: response.variations?.length
      ? response.variations.map(({ image_url }) => image_url)
      : [],
  };
}

export const endpoints: Record<EncyclopediaType | CollectionType, string> = {
  [EncyclopediaType.BUGS]: "bugs",
  [EncyclopediaType.FOSSILS]: "fossils/individuals",
  [EncyclopediaType.ARTS]: "art",
  [EncyclopediaType.FISH]: "fish",
  [EncyclopediaType.SEA_CREATURES]: "sea",
  [CollectionType.FURNITURE]: "furniture",
  [CollectionType.INTERIOR]: "interior",
  [CollectionType.ITEMS]: "items",
};
