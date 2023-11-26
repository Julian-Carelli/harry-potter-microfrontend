import { styled } from 'styled-components'

interface LanguageOptionProps {
  selected: boolean
}

export const LanguageSelectorWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

export const LanguageOption = styled.button<LanguageOptionProps>`
  background-color: ${(props) => (props.selected ? '#3498db' : '#ffffff')};
  color: ${(props) => (props.selected ? '#ffffff' : '#333333')};
  border: 2px solid #3498db;
  border-radius: 5px;
  padding: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #3498db;
    color: #ffffff;
  }
`
