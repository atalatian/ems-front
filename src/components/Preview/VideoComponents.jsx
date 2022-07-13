import Description from "./Description";
import Open from "./Open";


const VideoComponents = (props) => {

  const {open, description, name, url, id} = props

  const description_parameters = {
    render: description,
    name: name,
    url: url,
    id: id,
  }

  return(
      <>
          <Description {...description_parameters}/>
          <Open render={open} name={name} id={id}/>
      </>
  )
}

export default VideoComponents;
