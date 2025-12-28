// submit.js

export const SubmitButton = ({ onClick, isSubmitting }) => {




    return (
        <>

            <button
                onClick={onClick}
                disabled={isSubmitting}
                className="
              bg-[#A78BFA] 
              hover:bg-[#7C3AED] 
              disabled:bg-gray-600 
              disabled:cursor-not-allowed
              text-white 
              font-semibold 
              px-6 
              py-2.5 
              rounded-lg 
              transition-all 
              duration-300 
              hover:shadow-sm 
              hover:shadow-[#A78BFA]/10
              flex items-center gap-2
            "
            >Submit</button>


        </>

    );
}
