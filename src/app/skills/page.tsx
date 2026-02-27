import {
  faAngular,
  faBootstrap,
  faCss3,
  faDocker,
  faFigma,
  faFontAwesome,
  faGitAlt,
  faGitlab,
  faGulp,
  faHtml5,
  faJs,
  faLess,
  faLinux,
  faMicrosoft,
  faNodeJs,
  faReact,
  faSass,
  faSlack,
  faVuejs,
  faWindows
} from '@fortawesome/free-brands-svg-icons'
import { faFileExcel, faFilePowerpoint } from '@fortawesome/free-solid-svg-icons'

import Card from '@/lib/components/ui/Card'
import PageHeader from '@/lib/components/ui/PageHeader'
import Icon from '@/lib/components/ui/Icon'

export default async function SkillsPage() {
  return (
    <>
      <PageHeader>Skills</PageHeader>
      <br />
      <section className="gap-8 space-y-12 max-lg:flex max-lg:w-full max-lg:flex-col max-lg:items-stretch lg:block lg:columns-2">
        <Card>
          <Card.Title>Patterns &amp; Processes</Card.Title>
          <Card.Body>
            <div className="prose max-w-none">
              <h4>Patterns</h4>
              <ul>
                <li>MVVM (Model-View-ViewModel) Architecture</li>
                <li>MVC / MVX</li>
                <li>Component-based Architecture</li>
                <li>Flux</li>
                <li>SPA (Single Page Application)</li>
                <li>Isomorphic</li>
                <li>RESTful Web APIs</li>
                <li>N-Tier</li>
                <li>Cloud &amp; Distributed</li>
                <li>CI/CD</li>
                <li>Microservices</li>
                <li>Composition</li>
              </ul>

              <h4>Processes</h4>
              <ul>
                <li>Agile</li>
                <li>SCRUM</li>
                <li>Kanban</li>
                <li>Waterfall</li>
              </ul>
            </div>
          </Card.Body>
        </Card>

        <Card>
          <Card.Title>Programming Languages</Card.Title>
          <Card.Body>
            <div className="prose max-w-none">
              <h4>Front-end</h4>
              <ul>
                <li>
                  <Icon icon={faHtml5} />
                  &nbsp;HTML
                </li>
                <li>
                  <Icon icon={faJs} />
                  &nbsp;JavaScript/TypeScript
                </li>
                <li>
                  <Icon icon={faCss3} />
                  &nbsp;CSS
                </li>
                <li>
                  <Icon icon={faSass} />
                  &nbsp;SASS
                </li>
                <li>
                  <Icon icon={faLess} />
                  &nbsp;Less
                </li>
              </ul>

              <h4>Back-end</h4>
              <ul>
                <li>C#</li>
                <li>SQL</li>
                <li>JavaScript/TypeScript (Node.js, Express, Next.js, Nuxt)</li>
                <li>JSON</li>
                <li>XML</li>
              </ul>
            </div>
          </Card.Body>
        </Card>

        <Card>
          <Card.Title>Front-end Frameworks and Tools</Card.Title>
          <Card.Body>
            <div className="prose max-w-none">
              <h4>Modern</h4>
              <ul>
                <li>
                  <Icon icon={faAngular} />
                  &nbsp;Angular
                </li>
                <li>RxJS</li>
                <li>Angular Material</li>
                <li>TailwindCSS</li>
                <li>KendoUI for Angular</li>
                <li>
                  <Icon icon={faReact} />
                  &nbsp;React
                </li>
                <li>React Native</li>
                <li>Next.js</li>
                <li>Redux</li>
                <li>
                  <Icon icon={faVuejs} />
                  &nbsp;Vue
                </li>
                <li>Nuxt</li>
                <li>Pinia</li>
                <li>GraphQL (Apollo client)</li>
                <li>Supabase JavaScript client</li>
                <li>OData (Breeze)</li>
                <li>Highcharts</li>
                <li>JSONata</li>
                <li>Gridster</li>
                <li>
                  <Icon icon={faFontAwesome} />
                  &nbsp;FontAwesome Icons
                </li>
              </ul>

              <h4>Testing and Build Tools</h4>
              <ul>
                <li>Webpack</li>
                <li>
                  <Icon icon={faGulp} />
                  &nbsp;Gulp.js
                </li>
                <li>Jest</li>
                <li>Jasmine</li>
                <li>Vite and Vitest</li>
                <li>Playwright</li>
              </ul>

              <h4>Legacy</h4>
              <ul>
                <li>
                  <Icon icon={faAngular} />
                  &nbsp;AngularJS
                </li>
                <li>KnockoutJS</li>
                <li>
                  <Icon icon={faBootstrap} />
                  &nbsp;Bootstrap
                </li>
                <li>jQuery / jQuery-UI</li>
              </ul>
            </div>
          </Card.Body>
        </Card>

        <Card>
          <Card.Title>Back-end Frameworks</Card.Title>
          <Card.Body>
            <div className="prose max-w-none">
              <ul>
                <li>.NET and .NET Core (Modern)</li>
                <li>ASP.Net and ASP.Net Core</li>
                <li>ASP.Net MVC and Web API</li>
                <li>Entity Framework and Entity Framework Core</li>
                <li>Dapper</li>
                <li>Hot Chocolate (.NET GraphQL API Framework)</li>
                <li>Identity Framework</li>
                <li>OAuth / OpenID / OIDC</li>
                <li>Node.js</li>
                <li>Express</li>
                <li>Next.js</li>
                <li>Nuxt</li>
                <li>AuthJS</li>
              </ul>
            </div>
          </Card.Body>
        </Card>

        <Card>
          <Card.Title>Databases</Card.Title>
          <Card.Body>
            <div className="prose max-w-none">
              <ul>
                <li>Microsoft SQL Server</li>
                <li>PostgreSQL</li>
                <li>Supabase</li>
                <li>MongoDB</li>
                <li>Redis</li>
              </ul>
            </div>
          </Card.Body>
        </Card>

        <Card>
          <Card.Title>Platforms and Tools</Card.Title>
          <Card.Body>
            <div className="prose max-w-none">
              <h4>Platforms</h4>
              <ul>
                <li>
                  <Icon icon={faMicrosoft} />
                  &nbsp;Microsoft Azure DevOps
                </li>
                <li>
                  <Icon icon={faDocker} />
                  &nbsp;Docker and Harbor
                </li>
                <li>Vercel</li>
                <li>
                  <Icon icon={faNodeJs} />
                  &nbsp;Node.js and NPM
                </li>
                <li>
                  <Icon icon={faMicrosoft} />
                  &nbsp;Microsoft .NET Framework
                </li>
                <li>
                  <Icon icon={faMicrosoft} />
                  &nbsp;Microsoft .NET Core
                </li>
                <li>
                  <Icon icon={faGitlab} />
                  &nbsp;GitLab
                </li>
              </ul>

              <h4>Tools</h4>
              <ul>
                <li>
                  <Icon icon={faGitAlt} />
                  &nbsp;Git &amp; GitHub
                </li>
                <li>
                  <Icon icon={faMicrosoft} />
                  &nbsp;Microsoft TFS (Team Foundation Server)
                </li>
                <li>Visual Studio</li>
                <li>VS Code</li>
                <li>JetBrains Rider</li>
                <li>JetBrains Webstorm</li>
                <li>Adobe Photoshop</li>
                <li>GIMP</li>
                <li>
                  <Icon icon={faFigma} />
                  &nbsp;Figma
                </li>
                <li>
                  <Icon icon={faFileExcel} />
                  &nbsp;Microsoft Excel
                </li>
                <li>
                  <Icon icon={faFilePowerpoint} />
                  &nbsp; Microsoft PowerPoint
                </li>
                <li>
                  <Icon icon={faMicrosoft} />
                  &nbsp; MS SQL Server Management Studio
                </li>
                <li>DB Visualizer</li>
                <li>OpenTelemetry</li>
                <li>OpenSearch</li>
                <li>Jaeger</li>
                <li>OpenObserve</li>
                <li>Prometheus</li>
                <li>
                  <Icon icon={faSlack} />
                  &nbsp;Slack
                </li>
                <li>
                  <Icon icon={faMicrosoft} />
                  &nbsp;Microsoft Teams
                </li>
              </ul>
            </div>
          </Card.Body>
        </Card>

        <Card>
          <Card.Title>Operating Systems &amp; Environments</Card.Title>
          <Card.Body>
            <div className="prose max-w-none">
              <ul>
                <li>
                  <Icon icon={faWindows} />
                  &nbsp;Windows &amp; Windows Server
                </li>
                <li>
                  <Icon icon={faLinux} />
                  &nbsp;Linux (Debian and Alpine) &amp; WSL
                </li>
                <li>Arduino (Arduino IDE &amp; C++ / Wiring)</li>
              </ul>
            </div>
          </Card.Body>
        </Card>
      </section>
    </>
  )
}
