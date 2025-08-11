import { USER_ICON } from "../utils/constants";

const Comment = ({ info, size }) => {
  const { snippet } = info;
  const { authorDisplayName, authorProfileImageUrl, textOriginal } = snippet

  return (
    <div className="flex py-2 items-start">
      <img src={authorProfileImageUrl || USER_ICON} alt="user" className={"rounded-full w-" + size + " h-" + size}
        onError={(e) => { e.target.src = USER_ICON; }} />
      <div className="text-sm ml-4">
        <p className="font-medium ">{authorDisplayName}</p>
        <p>{textOriginal}</p>
      </div>
    </div>
  )
}

export default Comment
