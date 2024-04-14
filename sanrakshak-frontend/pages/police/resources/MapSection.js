import React from 'react'

export default function MapSection() {
  return (
    <div>
      <div class="bg-[#212C47] rounded-md h-[85vh] card-scroll w-[35rem] px-4 py-2">
        <h2 className="text-2xl  font-bold">
          Crime Map - Bengaluru City
        </h2>
        <p className="text-base my-2">
          Areas with High Crimes in the last hour : Shivajinagara,
          Banaswadi, Indiranagar, Whitefield, Electronic City
        </p>

        <div id="map" className="h-[27rem] my-3 ">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15551.511067258734!2d77.57929294147874!3d12.979669006959814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16749c6f9dad%3A0x3f523b887a7b9b!2sBangalore%20Police%20Headquarters!5e0!3m2!1sen!2sin!4v1713110666268!5m2!1sen!2sin" 
          width='100%' height='100%' 
          style={{border: 0}} allowFullScreen loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade">
          </iframe>


        </div>
      </div>
    </div>
  )
}
