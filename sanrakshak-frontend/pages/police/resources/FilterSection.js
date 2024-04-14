import React from 'react'

export default function FilterSection() {
  return (
    <div>
      <div className="rounded-md bg-[#212C47] border-3 border-[#6c71ff37]">
              <div class="flex flex-row justify-between p-2">
                <div class="flex items-center flex-row space-x-2">
                  <div class="px-[1rem] text-base ">District</div>
                  <select class="rounded-md px-[1rem] text-[white] bg-[#141D35] p-1">
                    <option value="bengaluru-city">All</option>
                    <option value="bengaluru-city">Bengaluru City</option>
                    <option value="bengaluru-city">Mysuru City</option>
                  </select>
                  <div class="px-[1rem] text-base ">Crime Type</div>
                  <select class="rounded-md px-[1rem] text-[white] bg-[#141D35] p-1">
                    <option value="all">All</option>
                    <option value="all">Theft</option>
                    <option value="all">Assault</option>
                    <option value="all">Property Crime</option>
                  </select>
                  <div class="px-[1rem] text-base ">
                    Show Crimes for the last
                  </div>
                  <select class="rounded-md px-[1rem] text-[white] bg-[#141D35] p-1">
                    <option value="28-days">28 Days</option>
                    <option value="28-days">7 Days</option>
                    <option value="28-days">24 hours</option>
                    <option value="28-days">1 hour</option>
                  </select>
                </div>
              </div>
            </div>
    </div>
  )
}
