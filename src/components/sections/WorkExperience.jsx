import { RevealOnScroll } from "../RevealOnScroll";
import Amex from '../assets/amex.jpg';
import Deloitte from '../assets/Deloitte.jpg';
import HV from '../assets/HV.jpg';
import FM from '../assets/FM.jpg';

export const WorkExperience = () => {
    return (
        <section
            id="workexperience"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
                <div className="max-w-3xl mx-auto px-4 ">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center ">
                        {" "}
                        Work Experience
                    </h2>
                    <div className="max-w-3xl mx-auto px-4">
                        <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                            <div className="flex space-x-8">

                                <div className="text-gray-300">
                                    <div className="flex items-center space-x-2">
                                        {/* Logo */}
                                        <img
                                            src={Amex}  // Adjust the path to where your logo is located
                                            alt="American Express Logo"
                                            className="w-8 h-8"  // Adjust the size as needed
                                        />
                                        {/* Text */}
                                        <h4 className="font-semibold">American Express (Contract)</h4>
                                    </div>
                                    <p> Software Engineer II - Full Stack Java/Python Developer (July 2023-Present)</p>
                                    <p className="mt-2">
                                        <strong>Achievements:</strong>
                                        <span className="block mt-2">Developed a microservice using Python and Dhango  to capture latency metrics, helping upstream teams access request performace.</span>
                                        <span className="block mt-2">Built a GraphQL API serving as a gateway for multiple portals, improving request handling and persistence using Java, Spring, and Oracle SQL.</span>
                                        <span className="block mt-2">Automated Apigee Gateway SSL certificate installation, reducing manual efforts by 40% and streamlining change requests.</span>
                                        <span className="block mt-2">Designed a dashboard to showcase application metrics for SRE leadership using React, TypeScript, and Grafana.</span>
                                        <span className="block mt-2">Developed Kafka consumer services with Avro schema validation to improve data reliability and processing.</span>
                                        <span className="block mt-2">Provided production support by diagnosing and resolving incidents, optimizing system performance, mitigating customer impact through ServiceNow, participating in EMIM bridges, and offering on-call support.</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="max-w-3xl mx-auto px-4">
                        <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                            <div className="flex space-x-8">

                                <div className="text-gray-300">
                                    <div className="flex items-center space-x-2">
                                        {/* Logo */}
                                        <img
                                            src={Deloitte}  // Adjust the path to where your logo is located
                                            alt="Deloitte Logo"
                                            className="w-8 h-8"  // Adjust the size as needed
                                        />
                                        {/* Text */}
                                        <h4 className="font-semibold">Deloitte (Full Time)</h4>
                                    </div>
                                    <p> DC Solution Specialist - Full Stack Java/Python Developer (Feb 2022-June 2023)</p>
                                    <p className="mt-2">
                                        <strong>Achievements:</strong>
                                        <span className="block mt-2">Developed a GraphQL API for court-ordered case linkage using Java, Spring Boot, and Postgres.</span>
                                        <span className="block mt-2">Implemented a real-time ingestion microservice processing customer journey data with Python, Django, and Postgres.</span>
                                        <span className="block mt-2">Involved in the migration of the system from a legacy application to a developing application using technologies such as React, Java, Spring, and Postgres.
                                        Improved batch processing performance using Java, Spring Batch, and Postgres, reducing execution time by 30%.</span>
                                        <span className="block mt-2">Designed and implemented a frontend microservice for the Eligibility System using React, TypeScript/JavaScript, HTML, and CSS to process citizen eligibility details efficiently.</span>
                                        <span className="block mt-2">Built a Rest API for data routing and Integration with the Oracle OPA tool to determine citizen eligibility using Java 8, Spring, and Oracle SQL.</span>
                            
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="max-w-3xl mx-auto px-4">
                        <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                            <div className="flex space-x-8">

                                <div className="text-gray-300">
                                    <div className="flex items-center space-x-2">
                                        {/* Logo */}
                                        <img
                                            src={HV}  // Adjust the path to where your logo is located
                                            alt="Hitachi Vantara Logo"
                                            className="w-8 h-8"  // Adjust the size as needed
                                        />
                                        {/* Text */}
                                        <h4 className="font-semibold">Hitachi Vantara (Contract)</h4>
                                    </div>
                                    <p> Software Engineer - Full Stack Java/Python Developer (Feb 2021-Feb 2022)</p>
                                    <p className="mt-2">
                                        <strong>Achievements:</strong>
                                        <span className="block mt-2">Optimized data routing microservices, increasing throughput from 800 msgs/sec to 25,000 msgs/sec using Java, Spring, and RabbitMQ.</span>
                                        <span className="block mt-2">Developed a metadata ingestion microservice using Python, Django, and InfluxDB.</span>
                                        <span className="block mt-2">Designed and exposed REST APIs for analytics, enhancing data accessibility using Java and Spring framework. </span>
                                        <span className="block mt-2">Implemented UI functionalities based on requirements and integrated external APIs to fetch necessary data using React(hooks)  and TypeScript/JavaScript.</span>
                                        <span className="block mt-2">Fixed security vulnerabilities including NoSQL injection and path traversal, improving system security and functional related bugs in the system. </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="max-w-3xl mx-auto px-4">
                        <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                            <div className="flex space-x-8">

                                <div className="text-gray-300">
                                    <div className="flex items-center space-x-2">
                                        {/* Logo */}
                                        <img
                                            src={FM}  // Adjust the path to where your logo is located
                                            alt="Freedom Mortgage Logo"
                                            className="w-8 h-8"  // Adjust the size as needed
                                        />
                                        {/* Text */}
                                        <h4 className="font-semibold">Freedom Mortgage (Contract)</h4>
                                    </div>
                                    <p> Software Engineer -Java Developer (July 2020-Feb 2021)</p>
                                    <p className="mt-2">
                                        <strong>Achievements:</strong>
                                        <span className="block mt-2">Involved in SDLC requirements gathering, analysis, design, development and testing of application developed using Agile methodology</span>
                                        <span className="block mt-2">Developed a loan process REST API in order to efficiently process the customer loan details using Java 8, Spring, and Postgres.</span>
                                        <span className="block mt-2">Integrated a microservice to retrieve customer details using Java and MongoDB.</span>
                                        <span className="block mt-2">Delivered features in an Agile environment, collaborating with cross-functional teams in a fast paced environment.</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                   

                </div>
            </RevealOnScroll>
        </section>
    )
}
