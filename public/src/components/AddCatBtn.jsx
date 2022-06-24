export default function AddCatBtn({ getCat }) {

  return (
    <button className="add-btn btn-reset" onClick={ () => getCat() }>
      ... загружаем еще котиков ...
    </button>
  )
};