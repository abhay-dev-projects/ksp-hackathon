import React from 'react'
import { TestPoliceImage } from '@/public/assetsManager'
import TeamCard from './TeamCard'

const AllTeam = () => {

  const teamData = [
    {
      name: "Kamla Prasad Tiwari",
      available: true,
      src: TestPoliceImage,
    },
    {
      name: "Kamla Prasad Tiwari",
      available: true,
      src: TestPoliceImage,
    },
    {
      name: "Kamla Prasad Tiwari",
      available: true,
      src: TestPoliceImage,
    },
    {
      name: "Kamla Prasad Tiwari",
      available: true,
      src: TestPoliceImage,
    },
    {
      name: "Kamla Prasad Tiwari",
      available: true,
      src: TestPoliceImage,
    },
    {
      name: "Kamla Prasad Tiwari",
      available: true,
      src: TestPoliceImage,
    },
    {
      name: "Kamla Prasad Tiwari",
      available: true,
      src: TestPoliceImage,
    },
    {
      name: "Kamla Prasad Tiwari",
      available: true,
      src: TestPoliceImage,
    },
    {
      name: "Kamla Prasad Tiwari",
      available: true,
      src: TestPoliceImage,
    },
    {
      name: "Kamla Prasad Tiwari",
      available: true,
      src: TestPoliceImage,
    },
    {
      name: "Kamla Prasad Tiwari",
      available: true,
      src: TestPoliceImage,
    },
    {
      name: "Kamla Prasad Tiwari",
      available: true,
      src: TestPoliceImage,
    },
    {
      name: "Kamla Prasad Tiwari",
      available: true,
      src: TestPoliceImage,
    },
    {
      name: "Kamla Prasad Tiwari",
      available: true,
      src: TestPoliceImage,
    },
    {
      name: "Kamla Prasad Tiwari",
      available: true,
      src: TestPoliceImage,
    },
    {
      name: "Kamla Prasad Tiwari",
      available: true,
      src: TestPoliceImage,
    },
    {
      name: "Kamla Prasad Tiwari",
      available: true,
      src: TestPoliceImage,
    },
    {
      name: "Kamla Prasad Tiwari",
      available: true,
      src: TestPoliceImage,
    },
    {
      name: "Kamla Prasad Tiwari",
      available: true,
      src: TestPoliceImage,
    },
    {
      name: "Kamla Prasad Tiwari",
      available: true,
      src: TestPoliceImage,
    },
    {
      name: "Kamla Prasad Tiwari",
      available: true,
      src: TestPoliceImage,
    },
    {
      name: "Kamla Prasad Tiwari",
      available: true,
      src: TestPoliceImage,
    },
  ]

  return (
    <div className=' flex flex-wrap w-[100%] h-[80vh] gap-[1.5rem] overflow-auto pb-[1.5rem] ' >
      {
        teamData && teamData.map((data, index) => {
          return (
            <TeamCard data={data} key={index} />
          )
        })
      }
    </div>
  )
}

export default AllTeam
