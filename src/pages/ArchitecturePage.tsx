import Card from '@/components/ui/Card';
import {
  faAngular,
  faBootstrap,
  faCss3,
  faDocker,
  faFontAwesome,
  faGitAlt,
  faGulp,
  faHtml5,
  faJs,
  faLess,
  faNodeJs,
  faReact,
  faSass,
  faSlack
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function AchitecturePage() {
  return (
    <>
      <h1 className="text-center">Architecture &amp; Technology</h1>
      <br />
      <section className="gap-8 space-y-12 lg:block lg:columns-2 max_lg:flex max_lg:w-full max_lg:flex-col max_lg:items-stretch">
        <Card>
          <Card.Body>
            <Card.Title>Architectural Patterns &amp; Practices</Card.Title>
            <div className="prose max-w-none">
              <ul>
                <li>MVVM</li>
                <li>Component-based Architecture</li>
                <li>Flux</li>
                <li>SPA</li>
                <li>Isomorphic</li>
                <li>RESTful Web APIs</li>
                <li>N-Tier</li>
                <li>Cloud & Distributed</li>
                <li>CI/CD</li>
              </ul>
            </div>
          </Card.Body>
        </Card>

        <Card>
          <Card.Body>
            <Card.Title>Programming Languages</Card.Title>
            <div className="prose max-w-none">
              <h2>Front-end</h2>
              <ul>
                <li>
                  <FontAwesomeIcon icon={faHtml5} />
                  &nbsp;HTML
                </li>
                <li>
                  <FontAwesomeIcon icon={faJs} />
                  &nbsp;JavaScript/TypeScript
                </li>
                <li>
                  <FontAwesomeIcon icon={faCss3} />
                  &nbsp;CSS
                </li>
                <li>
                  <FontAwesomeIcon icon={faSass} />
                  &nbsp;SASS
                </li>
                <li>
                  <FontAwesomeIcon icon={faLess} />
                  &nbsp;Less
                </li>
              </ul>

              <h2>Back-end</h2>
              <ul>
                <li>C#</li>
                <li>SQL</li>
                <li>JavaScript/TypeScript (Next.js and Node.js)</li>
                <li>XML</li>
              </ul>
            </div>
          </Card.Body>
        </Card>

        <Card>
          <Card.Body>
            <Card.Title>Front-end Frameworks</Card.Title>
            <div className="prose max-w-none">
              <h2>Modern</h2>
              <ul>
                <li>
                  <FontAwesomeIcon icon={faAngular} />
                  &nbsp;Angular
                </li>
                <li>RxJS</li>
                <li>Angular Material</li>
                <li>TailwindCSS</li>
                <li>KendoUI for Angular</li>
                <li>
                  <FontAwesomeIcon icon={faReact} />
                  &nbsp;React
                </li>
                <li>React Native</li>
                <li>Next.js</li>
                <li>Redux</li>
                <li>OData (Breeze)</li>
                <li>Highcharts</li>
                <li>JSONata</li>
                <li>Gridster</li>
                <li>
                  <FontAwesomeIcon icon={faFontAwesome} />
                  &nbsp;FontAwesome Icons
                </li>
              </ul>

              <h2>Legacy</h2>
              <ul>
                <li>
                  <FontAwesomeIcon icon={faAngular} />
                  &nbsp;AngularJS
                </li>
                <li>KnockoutJS</li>
                <li>
                  <FontAwesomeIcon icon={faBootstrap} />
                  &nbsp;Bootstrap
                </li>
                <li>jQuery/jQuery-UI</li>
              </ul>
            </div>
          </Card.Body>
        </Card>

        <Card>
          <Card.Body>
            <Card.Title>Back-end Frameworks</Card.Title>
            <div className="prose max-w-none">
              <ul>
                <li>.NET and .NET Core</li>
                <li>ASP.Net and ASP.Net Core</li>
                <li>ASP.Net MVC and Web API</li>
                <li>Entity Framework and Entity Framework Core</li>
                <li>Dapper</li>
                <li>Identity Framework</li>
                <li>OAuth / OpenID / OIDC</li>
              </ul>
            </div>
          </Card.Body>
        </Card>

        <Card>
          <Card.Body>
            <Card.Title>Platforms and Tools</Card.Title>
            <div className="prose max-w-none">
              <ul>
                <li>
                  <FontAwesomeIcon icon={faNodeJs} />
                  &nbsp;Node.js and NPM
                </li>
                <li>Webpack</li>
                <li>
                  <FontAwesomeIcon icon={faGulp} />
                  &nbsp;Gulp.js
                </li>
                <li>Jest</li>
                <li>Jasmine</li>
                <li>Vite and Vitest</li>
                <li>Azure DevOps and Azure Pipelines</li>
                <li>
                  <FontAwesomeIcon icon={faDocker} />
                  &nbsp;Docker and Harbor
                </li>
                <li>
                  <FontAwesomeIcon icon={faGitAlt} />
                  &nbsp;Git &amp; GitHub
                </li>
                <li>TFS</li>
                <li>Visual Studio</li>
                <li>VS Code</li>
                <li>JetBrains Rider</li>
                <li>JetBrains Webstorm</li>
                <li>Adobe Photoshop</li>
                <li>GIMP</li>
                <li>
                  <FontAwesomeIcon icon={faSlack} />
                  &nbsp;Slack
                </li>
                <li>Microsoft Teams</li>
                <li>Microsoft Excel</li>
                <li>Microsoft PowerPoint</li>
                <li>Microsoft SQL Server Management Studio</li>
                <li>DB Visualizer</li>
                <li>PostgreSQL</li>
              </ul>
            </div>
          </Card.Body>
        </Card>
      </section>
    </>
  );
}
