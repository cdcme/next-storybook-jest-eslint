import { Header } from './Header'

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}

const withLayout = Page => {
  const WithLayout = props => (
    <div style={layoutStyle}>
      <Header />
      <Page {...props} />
    </div>
  )

  WithLayout.getInitialProps = async context => {
    return {
      ...(Page.getInitialProps ? await Page.getInitialProps(context) : {})
    }
  }

  return WithLayout
}

export default withLayout
