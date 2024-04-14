import React from 'react'
import { useState } from 'react';

const InputFilter = ({ fieldsToSearch, searchInData, searchResult, setSearchResult, searchPlaceholder }) => {

  const [search, setSearch] = useState('');
  console.log("search result in inout filter", searchResult)

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.length > 0) {
      const regex = new RegExp(search, 'i');
      const filteredCase = searchInData.filter((c) => {
        const fieldsSearch = fieldsToSearch;
        for (let key of fieldsSearch) {
          if (regex.test(c[key])) {
            return true;
          }
        }
        return false;
      });
      setSearchResult(filteredCase);
    } else {
      setSearchResult(searchInData);
    }
  };

  const handleFilterSelection = (crime) => {
    setSearch(crime);
    setSearchResult([])
  };

  return (
    <>
      <div className='relative text-[#AEB9E180] ' >
        <div className={`  `} >
          <form
            onSubmit={(e) => handleSearch(e)}

            className='flex flex-col gap-[1rem] w-[100%] '
          >
            <input
              type='text'
              onChange={(e) => {
                setSearch(e.target.value);
                handleSearch(e)
              }}
              value={search}
              autoComplete="off"
              placeholder={searchPlaceholder}
              className='bg-[#8C8C9A1F]  text-[#bcc8f080] px-[1rem] py-[.5rem] rounded-md outline-none focus:outline-[#6c71ff5c] text-[1rem] '
            />
          </form>
        </div>

        <div className={`${searchResult.length > 0 && search.length > 0 ? "py-[1rem]  " : ""} absolute z-[1] top-[2.7rem] rounded-md w-[100%] items-center flex flex-col gap-[.4rem] max-h-[11rem] overflow-y-auto bg-[#0a0f1c] text-[.9rem]`}>
          {
            searchResult.length > 0 && search.length > 0 && searchResult.map((data, index) => (
              <div key={index} onClick={() => handleFilterSelection(data.crime)} className="cursor-pointer select-none flex justify-between gap-[.5rem] w-[100%] max-h-[6rem] px-[.8rem] py-[.5rem] border-b-[1px] border-[#41434b]  rounded-md text-[.9rem]  ">

                <div className="flex flex-col gap-[.2rem] text-[.9rem] normal-case ">
                  <div className="flex " >
                    <h3>{data.crime}</h3>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default InputFilter
