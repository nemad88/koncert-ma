import { Dispatch, SetStateAction, useEffect } from "react";
import {
  TopLine,
  FilterBox,
  FilterWrapper,
  Checkbox,
  SearchBox,
  SearchInput,
  SearchButton,
} from "./Header.style";

interface IHeader {
  setSelectedPlaces: Dispatch<SetStateAction<string[]>>;
  selectedPlaces: string[];
}

const Header = ({ setSelectedPlaces, selectedPlaces }: IHeader) => {
  useEffect(() => {
    console.log(selectedPlaces);
  }, [selectedPlaces]);

  const handleCheckBox = (place: string) => {
    setSelectedPlaces((actualSelected) => {
      if (actualSelected.includes(place)) {
        return [...actualSelected].filter((el) => el !== place);
      }
      return [...actualSelected, place];
    });
  };

  return (
    <div>
      <TopLine />
      <FilterBox>
        <FilterWrapper>
          <Checkbox
            isSelected={
              selectedPlaces.includes("park") &&
              selectedPlaces.includes("akvarium")
            }
            onClick={() => {
              setSelectedPlaces((actualSelected) => {
                if (
                  actualSelected.includes("park") &&
                  actualSelected.includes("akvarium")
                ) {
                  return [];
                }
                return ["park", "akvarium"];
              });
            }}
          />
          Minden koncert
        </FilterWrapper>
        <FilterWrapper>
          <Checkbox
            isSelected={selectedPlaces.includes("park")}
            onClick={() => handleCheckBox("park")}
          />
          Budapest Park
        </FilterWrapper>
        <FilterWrapper>
          <Checkbox
            isSelected={selectedPlaces.includes("akvarium")}
            onClick={() => handleCheckBox("akvarium")}
          />
          Akvárium klub
        </FilterWrapper>
      </FilterBox>
      <SearchBox>
        <SearchInput />
        <SearchButton>Keresés</SearchButton>
      </SearchBox>
    </div>
  );
};

export default Header;
