import { Search } from "lucide-react";
import { SearchFormContainer } from "./styles";

export function SearchForm() {


    return (
        <SearchFormContainer>
            <input type="text" placeholder="Busque por transações" />
            <button type="submit">
                <Search size={20} />
                <span>Search</span></button>
        </SearchFormContainer>
    );
}