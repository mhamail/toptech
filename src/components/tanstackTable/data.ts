import {
    createColumnHelper,
  } from '@tanstack/react-table'
export type Person = {
    firstName: string
    lastName: string
    age: number
    visits: number
    status: string
    progress: number
  }
  
  export const data: Person[] = [
    {
      firstName: 'tanner',
      lastName: 'linsley',
      age: 24,
      visits: 100,
      status: 'In Relationship',
      progress: 50,
    },
    {
      firstName: 'tandy',
      lastName: 'miller',
      age: 40,
      visits: 40,
      status: 'Single',
      progress: 80,
    },
    {
      firstName: 'joe',
      lastName: 'dirte',
      age: 45,
      visits: 20,
      status: 'Complicated',
      progress: 10,
    },
  ]

   export const columns =[
  {
    header:"Name",
    accessorKey:'name',
    footer:'name'
  },
    {
        header: 'Email',
        accessorKey:'email',
        footer:'email'
    },
    {
        header: 'Phone',
        accessorKey:'phone',
        footer:'phone'
    },
    {
        header: 'Linkedin',
        accessorKey:'linkedin',
        footer:'linkedin'
    },
    {
        header: 'Company',
        accessorKey:'company',
        footer:'company'
    },
  ]