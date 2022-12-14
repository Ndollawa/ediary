import React from 'react';


const Category= ({pageProps}) => {
  return (
     
    <section className="max-w-7xl mx-auto py-4 px-5 h-full">
    <div className="flex justify-between items-center border-b border-gray-300">
        <h1 className="text-2xl font-semibold pt-2 pb-6">{pageProps.pageTitle}</h1>
    </div>
      <div className='w-full card py-5 rounded-xl'>
      Category
      
      </div>
    </section>
  )
}

export default Category