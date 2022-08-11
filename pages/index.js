import { useState } from "react"
import NextLink from "next/link"

export default function IndexPage({ pokemon }) {
  const [monster, setMonster] = useState("")

  const handleChange = event => {
    setMonster(event.target.value)
  }
  const pokemonToShow =
    monster === ""
      ? pokemon
      : pokemon.filter(pokeman => pokeman.name.includes(monster.toLowerCase()))
  console.log(pokemon)

  return (
    <>
      <h1 className="text-4xl text-center mb-2">Jeehoon&apos;s Mega Pokédex</h1>
      <h2 className="text-center mb-8">(From Gen I to Gen VIII)</h2>
      <div className="text-center">
        <label htmlFor="pokemon">
          <span className="mr-2">Search for Pokémon:</span>
          <input
            placeholder="Pikachu"
            className="rounded-md indent-1"
            id="pokemon"
            type="text"
            onChange={handleChange}
          />
        </label>
      </div>
      <ul>
        {pokemonToShow.map((pokeman, index) => {
          return (
            <li key={index}>
              <NextLink
                href={`/pokemon?id=${
                  pokeman.image.slice(-7, -5) === "00"
                    ? pokeman.image.slice(-5, -4)
                    : pokeman.image.slice(-7, -6) === "0"
                    ? pokeman.image.slice(-6, -4)
                    : pokeman.image.slice(-7, -4)
                }`}
              >
                <a className="border p-4 border-gray-400 my-2 capitalize flex items-center text-lg  rounded-full">
                  <img
                    className="w-20 h-20 mr-3"
                    src={pokeman.image}
                    alt={pokeman.name}
                  />
                  <span className="mr-2 font-bold">{index + 1}. </span>
                  {pokeman.name}
                </a>
              </NextLink>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export async function getStaticProps() {
  try {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=905")
    const { results } = await res.json()
    const pokemon = results.map((result, index) => {
      const paddedIndex = ("00" + (index + 1)).slice(-3)
      const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${paddedIndex}.png`
      return {
        ...result,
        image
      }
    })
    return {
      props: { pokemon }
    }
  } catch (error) {
    console.log(error)
  }
}
