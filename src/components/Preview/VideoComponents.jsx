import Description from "./Description";
import MainControl from "./MainControl";


const VideoComponents = (props) => {

  const {description, name, url, id, isActive, videoUrl} = props

  const description_parameters = {
    render: description,
    name: name,
    url: url,
    id: id,
  }

  return(
      <>
          <MainControl name={name} id={id} url={videoUrl} isActive={isActive}/>
          <Description {...description_parameters}/>
      </>
  )
}

export default VideoComponents;
