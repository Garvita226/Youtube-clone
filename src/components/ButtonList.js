import Button from "./Button"

const ButtonList = () => {

  const list = ['Trailers', 'Music', 'Programming', 'Web Development', 'Movies', 'News']

  return (
    <div className="flex my-2">
      { list.map( item => <Button key={item} name={item} /> ) }
    </div>
  )
}

export default ButtonList
