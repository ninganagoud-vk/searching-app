import { ChangeEvent } from "react"
import { MultiValue } from 'react-select';


export interface ILinks {
  [key: string]: any; 
}

// Define the interface for the response
export interface IListingResponse {
  from: string;
  hits: any[]; 
  count: number;
  __links: ILinks;
}


// Define the interface for the response
export interface IDetailResponse {
  recipe: ILinks 
  __links: ILinks;
}


export interface IErrorResponse {
  status: number;
}

export interface IErrorObject {
  response?: IErrorResponse; 
}

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