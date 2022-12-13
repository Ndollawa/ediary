import React from 'react';


const SiteSettings = ({pageProps}) => {
  return (
     
    <section className="max-w-7xl mx-auto py-4 px-5 h-full">
    <div className="flex justify-between items-center border-b border-gray-300">
        <h1 className="text-2xl font-semibold pt-2 pb-6">{pageProps.pageTitle}</h1>
    </div>
    <div>SiteSettings</div>
    </section>
  )
}

export default SiteSettings