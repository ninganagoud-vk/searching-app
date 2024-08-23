'use client';

import { getRecipies } from "@/apis/index";
import RecipieCard from "@/components/recipeCard";
import SearchBar from "@/components/searchBar/search";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import Loader from "./loader";
import { MultiValue } from "react-select";
import {ISelectedValues, IAllQueryCombined,IObject } from '../interfaces/recipe'
import PreviousMap from "postcss/lib/previous-map";

const Recipies: React.FC = () => {
  const router = useRouter()
  const [recipes, setRecipies] = useState([])
  const [searchVal, setSearchVal] = useState('')
  const [isLoading, setLoading] = useState(false)
  const [params, setParams] = useState<IAllQueryCombined>({
    type: 'public',
    app_id: "b72bb112",
    app_key: 'c4615d10a88089afc5050da5f9f84f18',
    q: 'q',
    cuisineType: []
  })

  

  const getData = async () => {
    try {
      setLoading(true)
      let tempParams = { ...params }
      if(!tempParams?.q)tempParams={...tempParams,q:'q'}

      const newparams = new URLSearchParams({
        type: tempParams?.type,
        app_id: tempParams?.app_id,
        app_key: tempParams?.app_key,
        q: tempParams?.q
      })
      tempParams.cuisineType.forEach((type: ISelectedValues) => newparams.append('cuisineType', type.value))
      const response = await getRecipies(newparams.toString())
      if (response.data?.hits) {
        setRecipies(response.data?.hits)
        setLoading(false)
      }
    }
    catch (err) {
      setLoading(false)
    }
  }

  useEffect(() => {
    getData()
  }, [params])


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) {
      setSearchVal(e.target.value);
    } else {
      setSearchVal('');
      setParams(prev=>({...prev,q:'q'}))
    }
  };

  const handleSelect = (e: MultiValue<ISelectedValues>) => {
    if (e) {
      setParams(prev => ({ ...prev, cuisineType: e }))
    } else {
      setParams(prev => ({ ...prev, cuisineType: [] }))
    }
  }

  const handleOnBlur = () => {
    setParams(prev => ({ ...prev, q: searchVal }))
  }

  const handleView = (url: string) => {

    const regex = /\/v2\/([^/?]+)/;
    const match = url.match(regex);

    if (match && match[1]) {
      const id = match[1];
      router.push(`recipes/${id}`)
    }

  }

  return (
    <>
      
      <SearchBar selectedValue={params?.cuisineType} searchValue={searchVal} handleOnBlur={handleOnBlur} handleChange={handleChange} handleSelect={handleSelect} />
      {isLoading ? <Loader />: recipes?.length ? <div className="flex justify-center flex-wrap w-full my-4 flex-wrap">{recipes.map((item: IObject) =>
      <RecipieCard

        calories={Math.floor(item?.recipe?.calories)}
        detailApi={item?._links?.self?.href ?? ""} handleView={handleView} cuisineType={item?.recipe?.cuisineType?.[0]} key={item?.recipe?.externalId} source={item?.recipe?.source} label={item?.recipe?.label} recipeImg={item?.recipe?.image} />
      )}</div> : <div style={{ background: 'white', height: '100vh', margin: '3rem 0' }} className="flex flex-col items-center	">
        <h1 className="text-green">Please Search Your favorite Recipes</h1>
        <img src="/search.png" width={400} height={400} />
      </div>}
    </>
  )
}

export default Recipies