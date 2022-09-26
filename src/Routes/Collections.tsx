import { useParams } from "react-router-dom";
import HouseWares from "../Components/Collection/HouseWares.component";
import WallMounted from "../Components/Collection/WallMounted.component";
import Miscellaneous from "../Components/Collection/Miscellaneous.component";

export enum CollectionType {
  HOUSEWARES = "houseWares",
  WALL_MOUNTED = "wallMounted",
  MISC = "Miscellaneous",
}

const Collections = () => {
  const { type } = useParams<{ type: string }>();

  return (
    <div>
      {type === CollectionType.HOUSEWARES && <HouseWares />}
      {type === CollectionType.WALL_MOUNTED && <WallMounted />}
      {type === CollectionType.MISC && <Miscellaneous />}
    </div>
  );
};

export default Collections;
