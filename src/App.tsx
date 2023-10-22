import { gql, useQuery } from '@apollo/client'
import './App.css'

// ここからgraphQLを叩く
const BOOKS = gql`
  query {
    test {
      title
      author
    }

  }
`
// ちゃんと取れているか確認する
function Books() {
  const {loading, error, data} = useQuery(BOOKS);

  if (loading) return <p>Loading...</p>
  if (error) return <p>エラー</p>

  return data.test.map(({title, author}: {title: string, author: string}) => (
    <div key={title}>
      <p>
        {author}: {title}
      </p>
    </div>
  ));
} 
function App() {
  return (
    <>
      <h2>graphQL</h2>
      <Books />
    </>
  )
}

export default App
