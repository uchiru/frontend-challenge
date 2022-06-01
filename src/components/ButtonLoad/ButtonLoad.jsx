import '../ButtonLoad/ButtonLoad.css';
const ButtonLoad = ({loadMore}) => {
    return (
        <div className="ButtonCenter">
            <button className="Button" onClick={loadMore} type="button" >LoadMore</button>
        </div>
    )
}
export default ButtonLoad