import Base from '../layouts/base'
import Head from 'next/head'
import axios from 'axios'

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
        {this.props.peliculas.map(peli => (
          <p key={peli.imdbID}>{peli.Title}</p>
        ))}
      </Base>
    )
  }
}
