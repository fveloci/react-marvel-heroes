import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { CharacterDataWrapper } from "../../models/characterDataWrapper";
import { Hero } from "../../models/hero.model";
import { getHeroes } from "../../services/hero.service";
import { HeroCard } from "../HeroCard/HeroCard";
import "./HeroList.scss"

export const HeroList = () => {
  const [heroList, setHeroList] = useState<Hero[]>([]);

  useEffect(() => {
    getHeroesToList();
  }, []);

  const getHeroesToList = async () => {
    const result: AxiosResponse<CharacterDataWrapper> = await getHeroes();    
    setHeroList(result.data.data.results)
  }

  return (
    <div className="hero__list__container">
        <h1 id="hero__list__title">Marvel Heroes</h1>
        <div className="list">
            {
                heroList.length > 0
                ?
                heroList.map((hero: Hero) => {
                    return <HeroCard key={hero.id} {...hero}/>
                })
                : 
                <p>No heroes</p>
            }
        </div>
    </div>
  );
}