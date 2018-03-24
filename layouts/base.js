import Link from 'next/prefetch'

export default ({ children }) => (
  <div className='container'>
    <div className='logo'>
      <h2>
        <Link href='/'><a>App</a></Link>
      </h2>
    </div>

    {children}

    {/* estilos globales */}

    <style jsx>{`
    .main {
      padding:10px 20px;
    }

    .logo a{color:inherit;}

    a{text-decoration: none;}

    `}</style>

  </div>
)
