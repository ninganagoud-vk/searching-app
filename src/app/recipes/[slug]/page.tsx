'use client';

import { getRecipeById } from "@/apis/index";
import { useEffect, useState } from "react";
import { useParams, useRouter } from 'next/navigation';
import Loader from "@/components/loader";
import { IObject } from "@/interfaces/recipe";

const Recipies = () => {
  const { slug } = useParams()
  const router = useRouter()
  const [recipes, setRecipies] = useState<IObject>({})
  const [isLoading, setLoading] = useState(false)

  const getData = async () => {
    try {
      setLoading(true)
      const response = await getRecipeById(slug, {
        type: 'public',
        app_id: "b72bb112",
        app_key: 'c4615d10a88089afc5050da5f9f84f18',
      })
      if (response.status == 200) {
        setRecipies(response.data?.recipe)
        setLoading(false)

      }

    } catch (err) {
      setLoading(false)
    }
  }


  useEffect(() => {
    getData()
  }, [slug])

  return (
    <div>
      {isLoading ? <Loader /> :
        <>
          <div className="p-1" style={{ background: '#fdf1cb' }} >
            <button type="button" className="text-white m-3 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
              onClick={() => router.push('/')}>&#8592; Back</button>

            <div className=" shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row p-3">
              {/* Left Image */}
              <div className="md:w-1/5">
                <img
                  src={recipes?.image}
                  alt={'title'}
                  width={300}
                  height={100}
                  loading="lazy"
                  className="h-full object-cover rounded-lg"
                />
              </div>

              {/* Right Content */}
              <div className="p-6 md:w-4/5 flex flex-col justify-start">
                <h2 className="text-xl font-bold mb-4">{recipes?.label}</h2>
                <div className="flex">
                  <p className="text-green-600 font-bold">Source: {recipes?.source}&nbsp;&nbsp;/&nbsp;&nbsp;</p>
                  <p className="text-green-600 font-bold">Weight: {Math.floor(recipes?.totalWeight)}&nbsp;&nbsp;/&nbsp;&nbsp;</p>
                  <p className="text-green-600 font-bold">Dish Type:  {recipes?.dishType?.map((item: string) => <span>{item}</span>)}</p>
                </div>
                <div className="p-3">
                  <div className="w-1/6 flex justify-start align-center"><img src="/ing.png" width={30}
                    height={30} /><h2 className="text-xl font-bold mx-4">Ingredients:</h2>
                  </div>
                  {<div className="text-gray-600 mt-4">
                    {recipes?.ingredientLines?.map((item: string) => (<p>&#x2022;&nbsp;{item}</p>))}
                  </div>}
                </div>
              </div>
            </div>
          </div>

          <div className="p-3" style={{ background: '#FFEDE5' }} >
            <p className="text-gray-600">
              <span className="text-xl font-bold mt-4 mb-4">Total Nutrients</span>
              {recipes?.totalNutrients ? Object.keys(recipes?.totalNutrients).slice(0, 10).map(key =>
                <option className="my-2" value={key}>&#x2022;&nbsp;{recipes?.totalNutrients[key]['label']}
                  {recipes?.totalNutrients[key]['quantity']}:{recipes?.totalNutrients[key]['unit']}
                </option>) : ''}
            </p>
          </div>
        </>
      }
    </div>

  )
}

export default Recipies