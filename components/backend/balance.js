export async function getStaticProps(context) {
  const res = await fetch(`https://rest.cryptoapis.io/v2/blockchain-data/ethereum/ropsten/addresses/0x20fb9686f8c10ecdf8df67563e901e606c5eec03`)
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { data }, // will be passed to the page component as props
  }
}