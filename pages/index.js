import Base from '../layouts/base'
import Head from 'next/head'
import axios from 'axios'
import Link from 'next/link'

export default class extends React.Component {
  static async getInitialProps ({ query }) {
    const pagina = query.pagina ? Number(query.pagina) : 1
    const respuesta = await axios.get(
      `http://www.omdbapi.com/?apikey=ced989f5&s=batman&page=${pagina}`
    )
    const peliculas = respuesta.data.Search
    console.log(peliculas)

    return { peliculas, pagina }
  }

  renderPaginacion () {
    const anterior = this.props.pagina > 1
      ? <Link href={`/?pagina=${this.props.pagina - 1}`}>
        <a className='btn btn-primary btn-sm'>Anterior </a>
      </Link>
      : null

    return (
      <div className='row'>
        <div className='mx-auto'>
          {anterior}
          <Link href={`/?pagina=${this.props.pagina + 1}`}>
            <a className='btn btn-primary btn-sm ml-5'> Siguiente</a>
          </Link>
        </div>
      </div>
    )
  }

  render () {
    return (
      <Base>
        <Head>
          <title>App con Next.js</title>
          <link
            rel='stylesheet'
            href='https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css'
            integrity='sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm'
            crossorigin='anonymous'
          />
        </Head>
        <h1>hello friend..</h1>
        <div className='row'>

          {this.props.peliculas.map(peli => (
            <div key={peli.imdbID} className='col-lg-3 col-sm-6'>
              <div className='card mb-5'>

                <img
                  className='card-img-top'
                  src={peli.Poster}
                  alt='Card image cap'
                />
                <div className='card-body'>
                  <h5 className='card-title'>{peli.Title}</h5>
                  <p className='card-text'>
                    {peli.Year}
                  </p>
                  <a href='#' className='btn btn-primary btn-sm'>
                    {' '}ver detalles
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>
        {this.renderPaginacion()}
      </Base>
    )
  }
}
