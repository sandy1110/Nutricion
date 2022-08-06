import "./WeDoCard.css"

export const WeDoCard = ({tasks}) => {

    const {
        img,
        id,
        description

    } = tasks
  return (
    <div>
        {img}
        <div>{id}</div>
        <div>{description}</div>
    </div>
  )
}
