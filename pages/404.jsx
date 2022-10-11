import Link from '../src/components/Link'

function Page404() {
  return <div>
    <h2>Pagina de erro !</h2>

    <Link 
      href="/"
      text="Index"
      passHref
    > 
      <></>
    </Link> 
    
  </div>
}

export default Page404