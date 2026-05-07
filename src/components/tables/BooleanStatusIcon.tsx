import {FaRegCheckCircle} from "react-icons/fa";
import {IoCloseSharp} from "react-icons/io5";

interface Props {
  status: boolean
}

const BooleanStatusIcon = ({status}: Props) => {
  return (
    <>
      {
        status
          ? <FaRegCheckCircle className="text-green-600 text-lg"/>
          : <IoCloseSharp className="text-red-600 text-lg"/>
      }
    </>
  )
}

export default BooleanStatusIcon