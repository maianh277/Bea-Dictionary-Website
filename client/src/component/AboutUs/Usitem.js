import React from 'react';


// ----------------------------------------------------------------------

export default function CastItem({ cast }) {

  return (
    <div className="relative movie__item h-44 bg-cover bg-center bg-no-repeat group duration-200 my-3 mx-3 shadow-lg hover:shadow-lg border-l-0 hover:border-l-4 border-red-600 overflow-hidden rounded-md">
        <div className="absolute flex top-0 left-0 w-full h-full">
            <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fhtmlcolorcodes.com%2Fcolors%2Fpastel-pink%2F&psig=AOvVaw34PzzpcZQGIfeKp1S85T7d&ust=1686745593008000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCPD4vZGfwP8CFQAAAAAdAAAAABAD" className="w-2/5 h-full object-cover" alt="" />
            <div className="text-gray-300 h-full p-5">
            <div className="line-6">
                <h3 className="text-lg">{cast.name}</h3>
                <h4 className="text-red-600 font-semibold">{cast.character}</h4>
            </div>
            </div>
        </div>
      <div className="absolute top-0 left-0 w-full h-full overlay overlay-2" />
    </div>
  );
}