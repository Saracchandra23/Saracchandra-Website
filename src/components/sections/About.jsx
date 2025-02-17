import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const languages = [
    "Java",
    "Python",
    "TypeScript",
    "Javascript",
    "Golang",
  ];

  const frameworks = ["Spring Boot", "Spring Data JPA", "Hibernate", "Spring Batch", "Swagger","Spring AOP","Django","Junit","Log4j","PyTest","Jest","numpy","Pandas","Maven","Ant",
    "Gradle","React","Vue", "TailwindCSS"];
  const databasesAndGateways = ["Oracle SQL","MySQL ","MongoDB","AramgoDB","InfluxDB","Apigee","Gloo"];
  const cloudAndDevOps = ["AWS","AWS EC2","AWS S3","AWS DynamoDB","AWS EKS","AWS RDS","AWS SNS","AWS SQS","AWS IAM","AWS Lambda","Docker","Kubernetes","Openshift","Terraform","Jenkins,CI/CD"];
  const messagingAndAPI = ["Kafka","RabbitMQ","Mosquito Broker","GRAPHQL","REST"];
  const softwareConceptsAndOperatingSystems = ["SOLID principles","Design Patterns","OSI Layer","Networking Protocols"
    ,"Data Structures Advanced","Multithreading","System Design","Synchronous","Asynchronous",
    "OAUTH","JWT","HMAC","Authorization and Authentication","OKTA","Windows","Linux","Unix"];
  const monitoringAndLogging =["Splunk","Kibana","Grafana","Windows","Linux","Unix"];
  const softwareToolsAndMethodologies =["Intellij","JIRA","Atlissan","Confluence","Slack","Agile","kanban","Pair Programming XP","Postman","GIT","Eclipse","Pycharm","ServiceNow","Tomcat"]
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4 ">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center ">
            {" "}
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all mb-4">
            <p className="text-gray-300 mb-6">
            Software Engineer with 5 years of experience developing scalable microservices and cloud based applications.
            Proven Expertise in Optimizing System Performance, Automating WorkFlows and Driving Efficiency.
            Passionate about delivering innovative solutions that enhance business outcomes.
            Committed to delevering seamless,scalable solutions that drive business success.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Programming Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {languages.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Frameworks</h3>
                <div className="flex flex-wrap gap-2">
                  {frameworks.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            
          
          <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Databases And Gateways</h3>
                <div className="flex flex-wrap gap-2">
                  {databasesAndGateways.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
          
          

          <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Messaging And API</h3>
                <div className="flex flex-wrap gap-2">
                  {messagingAndAPI.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Cloud And DevOps</h3>
                <div className="flex flex-wrap gap-2">
                  {cloudAndDevOps.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>


              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Software Concepts and Operating Systems</h3>
                <div className="flex flex-wrap gap-2">
                  {softwareConceptsAndOperatingSystems.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>



              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Monitoring And Logging</h3>
                <div className="flex flex-wrap gap-2">
                  {monitoringAndLogging.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Software Tools And Methodologies</h3>
                <div className="flex flex-wrap gap-2">
                  {softwareToolsAndMethodologies.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              </div>
              </div>

          
        </div>
      </RevealOnScroll>
    </section>
  );
};
