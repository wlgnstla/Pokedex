import NextLink from "next/link"
import { motion, AnimatePresence } from "framer-motion"

export default function Pokemon({ pokeman }) {
  return (
    <AnimatePresence exitBeforeEnter initial={true}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, type: "easeInOut" }}
      >
        <h1 className="text-4xl mb-2 text-center capitalize">{pokeman.name}</h1>
        <img className="mx-auto" src={pokeman.image} alt={pokeman.name} />
        <p>
          <span className="font-bold mr-2">Weight: </span>
          {pokeman.weight >= 1000
            ? JSON.stringify(pokeman.weight).slice(0, 3) +
              "." +
              JSON.stringify(pokeman.weight).slice(3)
            : pokeman.weight >= 100
            ? JSON.stringify(pokeman.weight).slice(0, 2) +
              "." +
              JSON.stringify(pokeman.weight).slice(2)
            : pokeman.weight >= 10
            ? JSON.stringify(pokeman.weight).slice(0, 1) +
              "." +
              JSON.stringify(pokeman.weight).slice(1)
            : "0." + JSON.stringify(pokeman.weight)}{" "}
          kg
        </p>
        <p>
          <span className="font-bold mr-2">Height: </span>
          {pokeman.height}
        </p>
        <h2 className="text-2xl  mt-6 mb-2"> Types</h2>
        {pokeman.types.map((type, index) => {
          return (
            <p className="capitalize" key={index}>
              {type.type.name}
            </p>
          )
        })}
        <p className="mt-10 text-center">
          <NextLink href="/">
            <a className="text-2xl underline">Back to Home</a>
          </NextLink>
        </p>
      </motion.div>
    </AnimatePresence>
  )
}

export async function getServerSideProps({ query }) {
  const id = query.id
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const pokeman = await res.json()
    const paddedIndex = ("00" + id).slice(-3)
    const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${paddedIndex}.png`
    pokeman.image = image
    return {
      props: { pokeman }
    }
  } catch (error) {
    console.log(error)
  }
}
