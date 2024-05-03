import React,{useEffect, useState} from "react"
// import { useQuery } from "@apollo/client"
// import { GET_REPOSITORIES } from '../graphql/queries.js'

const useRepositories = () => {
  // const {data = {},loading, refetch} = useQuery(GET_REPOSITORIES)
  // const { repositories = null } = data


  const [ repositories, setRepositories ] = useState(null)

  const fetchRepositories = async () => {
    const response = await globalThis.fetch('http://10.0.2.2:5000/api/repositories')
    const JSON = await response.json()
    setRepositories(JSON)
  }

  useEffect(() => {
    fetchRepositories();
    console.log(repositories)
  }, [])

  const nodeRepositories = repositories ? repositories.edges.map(edge => edge.node) : []

  return { repositories: nodeRepositories }
}

export default useRepositories;