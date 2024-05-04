import './index.css'

const ImagesList = props => {
  const {imagesList, onClickChechBtn} = props
  const {id, thumbnailUrl} = imagesList
  const onclikbtn = () => {
    onClickChechBtn(id)
  }
  return (
    <li className="imageListItems">
      <button type="button" onClick={onclikbtn} className="btn">
        <img src={thumbnailUrl} alt="thumbnail" className="imageList_Image" />
      </button>
    </li>
  )
}
export default ImagesList
