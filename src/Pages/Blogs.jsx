import { Helmet } from "react-helmet-async";

const Blogs = () => {
    return (
        <div className="bg-[#000B33]   text-white">
            <Helmet>
                <title>
                    FoodieFleet | Blogs
                </title>
            </Helmet>
            <div className="max-w-6xl space-y-10 py-10 mx-auto">
                <div className="space-y-6 mx-6 text-justify">
                    <h3 className="text-3xl font-bold">What is One way data binding?</h3>
                    <p >
                        One way data binding is a concept which explains or describes how the data flow/pass from its parents element  to its children / child elements. It is also known a unidirectional data flow. Parent pass the data to its children and children use it. Parents do this data passing process using props. But in this process children can not pass the data to its parents. thats why it is called unidirectional data flow or one way data binding. Children can not modify the data. only parent can change/modify the data.
                        <br />
                        If anything changes in the parents it will automatically change the state in children and re render the ui.

                    </p>
                </div>
                <div className="space-y-6 mx-6 text-justify">
                    <h3 className="text-3xl font-bold">What is NPM in node.js?</h3>
                    <p >NPM is stand for Node Package Manager. It is a javascript runtime environment which allow us to use JS in the server side. It is the default package manager for Node.js . It is used to install different libraries of node.js  </p>
                </div>
                <div className="space-y-6 mx-6 text-justify">
                    <h3 className="text-3xl font-bold">Different between Mongodb database vs mySQL database</h3>
                    <p >There are significant difference between Mongodb & mySQL database system . Some of them are discussed bellow:
                        <br />
                        <li>
                            MongoDB is a No-SQL database system. It is a document based data structure. On the other hand mySQL is a relational Database system. Here data is stored in a tabular format.
                        </li>
                        <li>
                            Changing or altering data in MongoDB is more flexible than mySQL.  mySQL uses fixed schema.
                        </li>
                        <li>
                            Both DB system have their own query system. MongoDB uses MongoDB Query Language & mySQL uses Structured Query Language
                        </li>
                        <li className="list-inside">
                            In terms of scalability MongoDB is designed for horizontal scalability while mySQL is designed for vertical scalability. Vertical scalability refers increasing the ability of single component like upgrading the CPU, RAM, HARD DISK for a single server  while horizontal scalability  refers to increase the number of components like increasing the number of server.
                        </li>
                        <li>
                            While handling unstructured data, MongoDB is used. It is mainly used for application which require real-time analytics. It can handle big data. It is also used in content management systems. <br />
                            mySQLis normally used in financial system, e-commerce. it is used where traditional relational DBMS is required.
                        </li>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;