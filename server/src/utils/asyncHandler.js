
/**
 * Higher order function which returns a promise which is used to handle asynchronous nature of the function
 */
export const asyncHandler=(requestHandler)=>{
    return (req,res,next)=>{
        Promise.resolve(requestHandler(req,res,next)).catch(err=>next(err));
    }
}