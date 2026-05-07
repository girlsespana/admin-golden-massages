import clsx from "clsx";
import type {IconType} from "react-icons";
import {FaCircleCheck} from "react-icons/fa6";
import {AiFillWarning, AiOutlineLoading3Quarters} from "react-icons/ai";
import {HiInformationCircle} from "react-icons/hi";
import { ToastType } from "./toasType";

const icons: Record<ToastType, IconType> = {
    success: FaCircleCheck,
    error: AiFillWarning,
    loading: AiOutlineLoading3Quarters,
    info: HiInformationCircle,
}

const ToastIcon = ({ type }: { type: ToastType }) => {
    const Icon = icons[type]
    return (
        <div className="inline-flex shrink-0 me-2 text-lg">
            <Icon className={clsx([type === 'loading' && 'animate-spin'])}/>
        </div>
    )
}

export default ToastIcon