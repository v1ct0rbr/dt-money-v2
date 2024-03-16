import { Search } from 'lucide-react'
import React from 'react'
import { SearchFormContainer } from './styles'

interface SearchFormProps {
  handleChangeFilter: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleSearchSubmit: (e: React.FormEvent) => void
  filter: string
}

export function SearchForm({
  filter,
  handleChangeFilter,
  handleSearchSubmit,
}: SearchFormProps) {
  return (
    <SearchFormContainer onSubmit={handleSearchSubmit}>
      <input
        type="text"
        placeholder="Busque por transações"
        value={filter}
        onChange={handleChangeFilter}
      />
      <button type="submit">
        <Search size={20} />
        <span>Search</span>
      </button>
    </SearchFormContainer>
  )
}
