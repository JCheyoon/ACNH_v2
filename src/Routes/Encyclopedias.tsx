import { useParams } from "react-router-dom";
import Arts from "../Components/Encyclopedia/Arts.component";
import Bugs from "../Components/Encyclopedia/Bugs.component";
import Fish from "../Components/Encyclopedia/Fish.component";
import Fossils from "../Components/Encyclopedia/Fossils.component";
import SeaCreatures from "../Components/Encyclopedia/SeaCreatures.component";

export enum EncyclopediaType {
  BUGS = "bugs",
  FISH = "fish",
  FOSSILS = "fossils",
  SEA_CREATURES = "seaCreatures",
  ARTS = "arts",
}

const Encyclopedias = () => {
  const { type } = useParams<{ type: string }>();

  return (
    <>
      {type === EncyclopediaType.ARTS && <Arts />}
      {type === EncyclopediaType.BUGS && <Bugs />}
      {type === EncyclopediaType.FISH && <Fish />}
      {type === EncyclopediaType.FOSSILS && <Fossils />}
      {type === EncyclopediaType.SEA_CREATURES && <SeaCreatures />}
    </>
  );
};

export default Encyclopedias;
