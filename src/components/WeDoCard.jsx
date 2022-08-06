import "./WeDoCard.css"

export const WeDoCard = ({tasks}) => {

    const {
        img,
        id,
        description

    } = tasks
  return (
    <div>

        <div>{id}</div>
        <div>{description}</div>
    </div>
  )
}
