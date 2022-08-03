import Description from "./Description";
import Open from "./Open";
import MainControl from "./MainControl";


const VideoComponents = (props) => {

  const {open, description, name, url, id, enable, setEnable, openDisable} = props

  const description_parameters = {
    render: description,
    name: name,
    url: url,
    id: id,
  }

  return(
      <>
          <MainControl name={name} id={id} url={url} enable={enable} setEnable={setEnable}/>
          <Description {...description_parameters}/>
      </>
  )
}

export default VideoComponents;
