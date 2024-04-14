import React from 'react'
const eventData = [
  {
      title: "Robbery",
      date: "22/03/23, 11:23",
      location: "KR Puram",
  },
  
  {
      title: "MV Theft",
      date: "24/03/23, 09:15",
      location: "Indiranagar",
  },
  {
      title: "MV Theft",
      date: "25/03/23, 14:30",
      location: "Koramangala",
  },
  {
      title: "Robbery",
      date: "26/03/23, 18:00",
      location: "Jayanagar",
  },
  {
      title: "Drug Abuse",
      date: "27/03/23, 12:45",
      location: "Whitefield",
  },
  {
      title: "Assault",
      date: "28/03/23, 08:10",
      location: "Marathahalli",
  },
  {
    title: "MV Theft",
    date: "23/03/23, 22:45",
    location: "MG Road",
},
  {
      title: "Assault",
      date: "29/03/23, 17:20",
      location: "HSR Layout",
  },
  {
      title: "MV Theft",
      date: "30/03/23, 13:55",
      location: "Banashankari",
  },
  {
      title: "MV Theft",
      date: "31/03/23, 10:45",
      location: "Malleshwaram",
  },
  {
      title: "Assault",
      date: "01/04/23, 22:00",
      location: "Basavanagudi",
  },
  {
      title: "Drug Abuse",
      date: "02/04/23, 15:30",
      location: "Electronic City",
  },
  {
      title: "Robbery",
      date: "03/04/23, 08:20",
      location: "Kengeri",
  },
  {
      title: "Robbery",
      date: "04/04/23, 19:10",
      location: "Hebbal",
  },
  {
      title: "Drug Abuse",
      date: "05/04/23, 11:55",
      location: "Yelahanka",
  },
  {
      title: "MV Theft",
      date: "06/04/23, 16:35",
      location: "Peenya",
  },
  {
      title: "Drug Abuse",
      date: "07/04/23, 09:40",
      location: "Bommanahalli",
  },
  {
      title: "MV Theft",
      date: "08/04/23, 14:25",
      location: "Banerghatta Road",
  },
  {
      title: "Drug Abuse",
      date: "09/04/23, 18:55",
      location: "Silk Board",
  },
  {
      title: "Robbery",
      date: "10/04/23, 12:00",
      location: "Bellandur",
  },
  {
      title: "Drug Abuse",
      date: "11/04/23, 20:30",
      location: "Domlur",
  },
];
export default function ThirdAnalysis() {
  return (
    <div>
      <div class="bg-[#212C47] rounded-md w-[18rem] h-[83vh] py-2 ">
        <div className="px-4">
          <h2 className="text-xl  font-bold">Reports Last 24 hrs</h2>
          <h2 className="text-6xl text-center font-bold my-5">143</h2>
        </div>
        <div className="card-scroll  h-[62vh] px-2 w-[100%]">
          <div className=" items-center  my-3 justify-between">
            {/* loop cases here */}
            <div>
              {eventData.map((event, index) => (
                <>
                  <div
                    key={index}
                    className="flex justify-between border-[1px] border-[#2f3241] bg-[#141D35] p-2 rounded-md   align-middle mt-2"
                  >
                    <div className="flex  justify-between">
                      <div className={`p-1 mt-3 w-3 h-3 x rounded-full shadow-md ${event.title == 'MV Theft' ? 'shadow-[#078893] bg-[#078893]' : event.title == 'Robbery' ? 'shadow-[#B06341] bg-[#B06341]' : event.title == 'Drug Abuse' ? 'shadow-[#6853ac] bg-[#6853ac]' : event.title == 'Assault' ?'shadow-[#c03232] bg-[#c03232]' : 'shadow-[#505979] bg-[#505979]'}`}></div>
                      <h3 className="text-base items-center mt-2 font-semibold px-[1rem] text-left">
                        {event.title}
                      </h3>
                    </div>
                    <div className=" ">
                      <div className="text-sm text-right ">
                        {event.date}
                      </div>
                      <div className="text-sm   text-right">
                        {event.location.length > 13
                          ? `${event.location.slice(0, 10)}...`
                          : event.location}
                      </div>
                    </div>
                  </div>
                  {/* <div className="flex-grow ml-2 border mt-2 w-[15rem] border-[#505979] pl-2" /> */}
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
