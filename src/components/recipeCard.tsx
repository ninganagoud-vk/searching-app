'use client';
import React from 'react';
import {Irecipe} from  '../interfaces/recipe'

const RecipieCard: React.FC<Irecipe>  = ({ detailApi, cuisineType, calories, recipeImg, label, source, handleView }) => {

    return (    
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-2 w-1/5 m-2">
            <div style={{ height: '120px' }} className="flex p-1 align-center">
                <img loading="lazy" className="rounded object-cover h-full w-70 " src={recipeImg} alt="recipe image" />
                <div className='px-2'>
                    <h5 className="mb-1 text-1xl font-semibold tracking-tight text-gray dark:text-white">{label}</h5>
                    <p className="mb-1 font-normal  text-sm dark:text-sm">Souce: {source}</p>
                    <p className="mb-1 font-normal text-sm dark:text-sm">{calories} Calories</p>
                    <p className="mb-1 font-normal text-sm  text-green dark:text-sm">{cuisineType}</p>
                </div>
            </div>
            <div className="py-5 mt-2">
                <button onClick={() => handleView(detailApi)}>
                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        View recipe &rarr;
                    </a>
                </button>
            </div>
        </div>
    )
}

export default RecipieCard