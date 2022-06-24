import axios from "axios";
import CatsList from "./CatsList";
import '../App.css'
import AddCatBtn from "./AddCatBtn";


export default function AllCats({ setCats, cats, cookies, handleLikeCat}) {
  const getCat = () => {
    const URL = 'https://api.thecatapi.com/v1/images/search';
    const TOKEN = '83975818-689c-4821-a42e-87a48c31482a';
    axios.get(URL, {
      headers: {'x-api-key': TOKEN}
    })
      .then(resp => {
        cats.push(
          {
            id: resp.data[0].id,
            url: resp.data[0].url,
            isLiked: false
          }
        )
        setCats([...cats])
        cookies.set('cookie-cats', cats, {path: '/'})

      })
  };
 
  return (
    <>
      <ul className="list list-reset">
        <CatsList cats={cats} handleLikeCat={handleLikeCat} />
      </ul>
      <AddCatBtn getCat={getCat} />
    </>

  )
};



































// export default function MainTest({ setCats, cats, setCookie }) {
//   const getCat = () => {
//     const URL = 'https://api.thecatapi.com/v1/images/search';
//     const TOKEN = '83975818-689c-4821-a42e-87a48c31482a';
//     axios.get(URL, {
//       headers: {'x-api-key': TOKEN}
//     })
//       .then(resp => {
//         cats.push(
//           {
//             id: resp.data[0].id,
//             url: resp.data[0].url,
//             isLiked: false
//           }
//         )
//         setCats([...cats])
//         setCookie('cookie-cats', cats, {path:'/'})
//       })
//   };