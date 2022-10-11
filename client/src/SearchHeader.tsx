import { useEffect, useState } from "react";
import "./App.styles.ts";
import { SCheckboxContainer, SSearch, SSearchHeader } from "./App.styles";
import { SUBTYPES, TYPES } from "./constants";

const SearchHeader = ({
  handleSubtypeCheckbox,
  handleTypeCheckbox,
  fetchCards,
  cards,
  subtypeQuery,
  typeQuery,
  loading,
}: any) => {
  const [nameQuery, setNameQuery] = useState<string>("arceus");

  useEffect(() => {
    fetchCards({ nameQuery });
  }, []);

  return (
    <SSearchHeader>
      <h2>Welcome to Pokemon Card Search!</h2>
      <div>
        <SSearch style={{ height: "200px", overflow: "hidden" }}>
          <div>
            <label htmlFor="name">
              <h3>Name</h3>
            </label>
            <input
              id="name"
              type="text"
              placeholder="Name search"
              value={nameQuery}
              onChange={(event) => setNameQuery(event.target.value)}
            />
          </div>
          <div>
            <h3>Sub-Types</h3>
            <SCheckboxContainer>
              {SUBTYPES.map((subtype: string) => {
                return (
                  <div className="checkbox-option" key={`subtype-${subtype}`}>
                    <label htmlFor={`subtype-${subtype}`}>{subtype}</label>
                    <input
                      type="checkbox"
                      onChange={handleSubtypeCheckbox}
                      name={subtype}
                      checked={subtypeQuery?.[subtype] || false}
                      id={`subtype-${subtype}`}
                    />
                  </div>
                );
              })}
            </SCheckboxContainer>
          </div>
          <div>
            <h3>Types</h3>
            <SCheckboxContainer>
              {TYPES.map((type: string) => {
                return (
                  <div className="checkbox-option" key={`type-${type}`}>
                    <label htmlFor={`type-${type}`}>{type}</label>
                    <input
                      type="checkbox"
                      onChange={handleTypeCheckbox}
                      name={type}
                      checked={typeQuery?.[type] || false}
                      id={`type-${type}`}
                    />
                  </div>
                );
              })}
            </SCheckboxContainer>
          </div>
        </SSearch>
      </div>
      <button onClick={() => fetchCards({ nameQuery })}>Get card!</button>
      <div>{loading ? "Loading..." : `Found ${cards.length}`}</div>
    </SSearchHeader>
  );
};

export default SearchHeader;
