import { Link, useRouteError } from "react-router-dom";
import './error.css'


const ErrorPage = () => {
    const error=useRouteError();
    return (
        <div className="error">

        <h1 className="text-6xl font-semibold mb-8">Oops!</h1>
        <img className="mx-auto " src="https://internetdevels.com/sites/default/files/public/blog_preview/404_page_cover.jpg" alt="" />
        <p className="text-lg blur-text  my-4">
          Sorry, an unexpected error has occurred.
        </p>
        <p>
          <p className="font-semibold text-red-500 ">
            {error.statusText || error.message}
          </p>
        </p>
  
        <div className="mt-12">
          <Link to="/">
            <button className="border-2 rounded-3xl px-4 py-2 bg-sky-600 font-semibold text-white">
              Go To Home
            </button>
          </Link>
        </div>
        
      </div>
    );
};

export default ErrorPage;