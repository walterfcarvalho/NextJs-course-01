import Link from '../src/components/Link'
import PageTitle from '../src/components/PageTitle'

export async function getStaticProps() {

  const API = 'https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json'
  const faq =  await fetch(API)
    .then( answer1 => answer1.json())
    .then( answer2 => answer2 )

  return {
    props: {
      teste:'teste',
      faq:faq
    }
  }
}

const Faq = ({faq}) => {

  return <div>
    <PageTitle>AluraCase - FAQ</PageTitle>

    <h2>FAQ</h2>

    <Link
      href="/"
      text="Index"
      passHref
    >
      Ir para a home
    </Link>

    {faq.map( ({answer, question}) => (
      <article>
        <h2>{question}</h2>
        <p>{answer}</p>
      </article>

    ))}



  </div>
}

export default Faq