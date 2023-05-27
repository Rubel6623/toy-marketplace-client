
const Blogs = () => {
  return (
    <div className="grid md:grid-cols-3 gap-6 mt-5">

      <div className="card w-96 bg-[#c5edee]">
        <div className="card-body">
          <h2 className="card-title">What is an access token and refresh token?</h2>
          <p>
            <span className="font-semibold">Access token: </span>
            It contains all the information the server needs to know if the user / device can access the resource you are requesting or not. They are usually expired tokens with a short validity period.<br/>
            <span className="font-semibold">Refresh token : </span>
            The refresh token is used to generate a new access token. Typically, if the access token has an expiration date, once it expires, the user would have to authenticate again to obtain an access token.
          </p>
        </div>
      </div>

      <div className="card w-96 bg-[#c5edee] ">
        <div className="card-body">
          <h2 className="card-title">How do access token and refresh token work and where should we store them on the client-side?</h2>
          <p>The application receives an access token after a user successfully authenticates and authorizes access, then passes the access token as a credential when it calls the target API.Store it in a cookie in client side, it can be safer than local browser storage. <br/>
          A refresh token is a special token that is used to obtain additional access tokens. This allows you to have short-lived access tokens without having to collect credentials every time one expires.And store the access token and refresh token in the server-side session.
          </p>
        </div>
      </div>

      <div className="card w-96 bg-[#c5edee] ">
        <div className="card-body">
          <h2 className="card-title">Compare SQL and NoSQL databases?</h2>
          <p>
            1.SQL databases are relational, and NoSQL databases are non-relational.<br/>
            2.SQL databases use structured query language (SQL) and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data.<br/>
            3.SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.<br/>
            4.SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.<br/>
            5.SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p>
        </div>
      </div>

      <div className="card w-96 bg-[#c5edee]">
        <div className="card-body">
          <h2 className="card-title">What is express js?</h2>
          <p>Express.js, sometimes also referred to as “Express,” is a minimalist, fast, and Sinatra-like Node.js backend framework that provides robust features and tools for developing scalable backend applications. It gives you the routing system and simplified features to extend the framework by developing more powerful components and parts depending on your application use cases.It is designed to build single-page, multi-page, and hybrid web applications, it has also become the standard for developing backend applications with Node.js</p>
        </div>
      </div>

      <div className="card w-96 bg-[#c5edee]">
        <div className="card-body">
          <h2 className="card-title">What is Nest JS?</h2>
          <p>Nest.js is one of the fastest-growing Node.js frameworks for building efficient, scalable, and enterprise-grade backend applications using Node.js. It is known for producing highly testable, maintainable, and scalable applications using modern JavaScript and TypeScript.Nest.js, on the other hand, was built to offer solutions to code structure and code organization strategy problems. It combines modern and modular approaches to software engineering principles.</p>
        </div>
      </div>

      <div className="card w-96 bg-[#c5edee]">
        <div className="card-body">
          <h2 className="card-title">What is MongoDB aggregate and how does it work?
          </h2>
          <p>Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline.Mongooses aggregate() function returns an instance of Mongooses Aggregate class. Aggregate instances are thenable, so you can use them with await and promise chaining. The Aggregate class also supports a chaining interface for building aggregation pipelines.</p>
        </div>
      </div>

    </div>
  );
};

export default Blogs;
