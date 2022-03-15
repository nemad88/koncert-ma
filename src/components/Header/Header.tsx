import {
  TopLine,
  FilterBox,
  FilterWrapper,
  Checkbox,
  SearchBox,
  SearchInput,
  SearchButton,
} from "./Header.style";

const Header = () => {
  return (
    <div>
      <TopLine />
      <FilterBox>
        <FilterWrapper>
          <Checkbox /> Minden koncert
        </FilterWrapper>
        <FilterWrapper>
          <Checkbox />
          Budapest Park
        </FilterWrapper>
        <FilterWrapper>
          <Checkbox />
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
