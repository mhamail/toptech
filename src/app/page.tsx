import React from 'react'
import TanstackTable from '@/components/tanstackTable/TanstackTable'
import CreateUserForm from '@/components/form/CreateUserForm'
import { getUser } from '@/action/user'

//Graphql is working on "use client" 

// import { useQuery, gql } from '@apollo/client';

// const GET_LOCATIONS = gql`
//   query GetLocations {
//     locations {
//       id
//       name
//       description
//       photo
//     }
//   }
// `;

 const Home = async() => {
 const user:{data:[] } = await getUser()
  // const { loading, error, data } = useQuery(GET_LOCATIONS);
  // console.log(data)

  return (
    <div className='w-10/12 mx-auto mt-10'>
      <div className='grid lg:grid-cols-[1fr,2fr] grid-cols-[1fr] gap-y-10 gap-x-5'>
        <CreateUserForm />
        <TanstackTable data={user.data}/>
      </div>
    </div>
  )
}
export default Home

