import { ChangeEvent } from "react"
import { MultiValue } from 'react-select';


export interface IObject {
  [key:string]:any
}


export interface ISelectedValues {
  label: string
  value: string
}

export interface IQuery{
  q: string
  cuisineType: MultiValue<ISelectedValues>
}

export interface IParams  {
  type: string
  app_id: string
  app_key: string
 
}

export interface IAllQueryCombined extends IQuery, IParams {
  
}





export interface ISelectedValues {
  label: string
  value: string
}

export interface ISearchBar {
  selectedValue: MultiValue<ISelectedValues>
  searchValue: string
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void
  handleSelect: (e: MultiValue<ISelectedValues>) => void
  handleOnBlur: (e: React.MouseEvent<HTMLButtonElement | HTMLDivElement | HTMLAnchorElement>) => void
}

export interface Irecipe {
  recipeImg: string
  label: string
  source: string,
  handleView: (e: string) => void;
  detailApi: string
  calories: number
  cuisineType: string
}