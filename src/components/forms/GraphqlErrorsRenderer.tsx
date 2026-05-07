import {FC} from "react";

interface Props {
    errors: string[] | null
}

const GraphqlErrorsRenderer: FC<Props> = ({errors}) => {
    if (!errors || errors.length === 0) return null;
    return (
        <div>
            {
                errors &&
                errors.map((error, index) => (
                    <div
                        className="text-red-700 font-thin text-sm my-2"
                        key={index}>
                        {error}
                    </div>
                ))
            }
        </div>
    )
}

export default GraphqlErrorsRenderer