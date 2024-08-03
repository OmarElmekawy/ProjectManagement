import { forwardRef } from "react";

export default forwardRef(function Input ({textarea, label, ...props},ref){
    const classes= "w-full p-1 border-b-2 bg-stone-200 text-stone-600 border-stone-300 focus:outline-none focus:border-stone-600"
    return (
    <p className="flex flex-col gap-1 my-4">
    <label className="uppercase font-bold text-sm text-stone-500">{label}</label>
    {textarea ? <textarea ref={ref} className={classes} {...props} /> : <input ref={ref} className={classes} {...props} /> }
    </p>
    );
})