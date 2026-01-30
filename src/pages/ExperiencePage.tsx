import Card from '@/components/ui/Card'
import PageHeader from '@/components/ui/PageHeader'

export default function ExperiencePage() {
  return (
    <>
      <PageHeader>
        Work Experience
        <br />
        <div className="text-base">(in reverse chronological order)</div>
      </PageHeader>
      <br />
      <section className="flex flex-col items-center gap-8 space-y-12">
        <Card className="w-full">
          <Card.Title className="mb-0 flex justify-center">Atlas Technology Group</Card.Title>
          <Card.Body>
            <div className="prose mb-4 max-w-none">
              <div className="text-center">
                <div className="text-lg">Multiple Roles (see below)</div>
                <div className="text-xs">November 2016 - November 2023</div>
              </div>
              <div>
                <h4>Role: AppDev Team - Senior Software Engineer and Front-end Architect</h4>
                <p>
                  I returned to my previous team to impart my experience gained while on the Canopy
                  team and bring their aging front-end architecture into modernity.
                </p>
                <ul>
                  <li>
                    <strong>Skills used:</strong> Angular 7 to 13, RxJS, Highcharts, Reactive and
                    Functional Programming, JSONata, .NET Core Framework, C#, ASP.NET Core Web API,
                    WebPack, Angular CLI, Gulp, Node.js/NPM, Angular Material UI Framework,
                    SASS/CSS, Kendo UI for Angular, Azure and Azure Pipelines..
                  </li>
                  <li>
                    Continued work on previous dashboard framework and architecture to support new
                    data-driven visualization widgets including gauges, charts, and maps.
                  </li>
                  <li>
                    Worked with the BI team to design and implement a number of new data-driven
                    visualization widgets, including cartesian-style graphs and charts, geographical
                    and numeric heatmaps, gauges, and expression-based card carousel. The dashboard
                    framework and widgets are tailored to drive the discovery of insights relating
                    to retail marketing and distribution.
                  </li>
                  <li>
                    Designed and implemented an expression-based action command framework to
                    facilitate the building of customizable, interactive dashboard experience for
                    customers and employees. This allowed widgets to link to reports and other
                    dashboards, creating a pathway for drill-downs and dynamic filtering.
                  </li>
                  <li>
                    Designed and implemented a web-based visual dashboard designer that enabled
                    users to build dashboards for the newly developed framework.
                  </li>
                  <li>
                    Appointed to roles of front-end architect, product owner, and lead engineer of a
                    team tasked with continuing the development of a new front-end framework and
                    component-set (with documentation) for rapidly building new applications and
                    modernizing existing applications. This framework and component-set was based on
                    a “skunk-works” project I started on my own initiative after experiencing and
                    observing the pains and inhibitions of an antiquated architecture with a large
                    amount of technical debt. The framework was based on Angular and Angular
                    Material with emphasis on not re-creating the wheel and only attempting to fill
                    the gaps of functionality that were required by our planned applications. This
                    involved either implementing the components in-house, or integrating existing
                    open-source and paid third-party components using the integration facilities of
                    our new framework.
                  </li>
                  <li>
                    Designed and implemented a multi-layered containerized development environment
                    for Angular front-end applications, using Docker on WSL2. The container was
                    designed to create a consistent environment for all front-end developers and to
                    reduce the onboarding time for new developers. The containerized environment was
                    also used along with Azure Pipelines to build and deploy the container image to
                    test and production environments.
                  </li>
                  <li>
                    Acted as front-end technical expert and consultant on multiple new projects,
                    including the design of new applications that were to utilize the aforementioned
                    front-end framework..
                  </li>
                  <li>
                    Acted as technical expert and lead engineer of a project to modernize our
                    flagship web application, using the newly built framework in addition to
                    Telerik&apos;s Kendo UI framework for Angular.
                  </li>
                  <li>
                    Acted as technical liaison between teams to close knowledge gaps and
                    troubleshoot issues.
                  </li>
                  <li>
                    Created and maintained Azure pipelines for all front-end applications and
                    frameworks.
                  </li>
                </ul>
              </div>

              <div>
                <h4>Role: Canopy Team - Front-end Software Engineer</h4>
                <p>
                  I was selected to be a part of the R&D team that developed new products including
                  Canopy, an advanced analytics platform for online retail which also served as a
                  comprehensive tool for clients to manage their online presence.
                </p>
                <ul>
                  <li>
                    <strong>Skills used:</strong> Angular 5, RxJS, NGRX, Highcharts, Reactive and
                    Functional programming, Single Store pattern, .NET Core Framework, C#, ASP.NET
                    Core Web API, Entity Framework Core, Node.js/NPM, WebPack, Angular CLI, Angular
                    Material UI Framework, and SASS/CSS.
                  </li>
                  <li>
                    Developed new and improved performance of analytics dashboard components,
                    including various data visualizations. This required working closely with the BI
                    engineers to accommodate the various types of online retail analytics.
                  </li>
                  <li>
                    Designed and implemented UI/UX for user input of post-run data filtering for
                    chart visualization. This filtering was applied after the content job had been
                    processed and thus was very fast and efficient, and allowed the user to quickly
                    and easily manipulate the visualizations.
                  </li>
                  <li>
                    Worked with the team to develop a set of components and APIs for assembling
                    client-side data queries for transforming data returned by RESTful Web API
                    endpoints, using a URL scheme similar to ODATA. The API provided the ability to
                    express filtering, paging, sorting, grouping, and aggregation of data. The
                    fluent API signature was similar to .NET&apos;s LINQ, but callable from
                    TypeScript/JavaScript.
                  </li>
                  <li>
                    Helped to establish more advanced features of back-end Web API model bindings to
                    parse and apply queries built by the aforementioned front-end API.
                  </li>
                  <li>
                    Implemented front-end unit tests using Gulp, Jasmine, Karma, Angular CLI, and
                    Angular Testing Framework.
                  </li>
                </ul>
              </div>

              <div>
                <h4>Role: AppDev Team - Full-stack Software Engineer</h4>
                <p>
                  Used Advanced JavaScript techniques and popular web frameworks and technologies,
                  such as Angular, TypeScript, ASP.NET MVC, and Entity Framework to update, enhance,
                  and add features to existing Reporting Studio web application. Reporting Studio
                  was designed to provide retail reporting and analytics for our clients - vendors
                  to Walmart, Target, and other prominent brick and mortar retailers.
                </p>
                <ul>
                  <li>
                    Designed and implemented a dashboard presentation framework to help curate and
                    categorize existing reports and content, making them easier to find. The
                    framework was highly extensible and scalable, facilitating rapid implementation
                    and deployment of new types of content.
                  </li>
                  <li>
                    Added functionality to facilitate multiple design surfaces in the AdHoc Report
                    Designer which provided a user friendly way to express advanced dynamic
                    filtering, to be used as a prefilter for the primary data-set produced by the
                    report design on the main surface.
                  </li>
                  <li>
                    Added new AdHoc Basic mode, a trimmed down version of the original AdHoc Report
                    Designer. This resulted in increased adoption of that tool by existing clients
                    and increased sales to new clients. The basic mode served as a general purpose
                    report designer and as a segue to the original advanced designer.
                  </li>
                  <li>
                    Implemented C# scripting engine and API to provide, with just a few clicks,
                    advanced retailer-specific filtering concepts like “traited vs valid” via the
                    AdHoc Basic mode.
                  </li>
                  <li>
                    Employed the module pattern to strengthen the architecture of the AdHoc Report
                    Designer, a user-friendly web-based drag-and-drop reporting design tool.
                  </li>
                  <li>
                    Developed advanced map plotting feature for visualizing data points
                    geographically. It supported multiple map browser windows to which data points
                    could be plotted.
                  </li>
                  <li>Helped transition front-end JavaScript codebase to TypeScript.</li>
                  <li>
                    Implemented front-end build processes (using gulp and node.js), including
                    generation of client-side entities and DTOs to be used for interop with Web
                    APIs.
                  </li>
                  <li>
                    Implemented front-end unit tests, using Gulp, Jasmine, Karma, Mocha, and
                    PhantomJS.
                  </li>
                </ul>
              </div>
            </div>
          </Card.Body>
        </Card>

        <Card className="w-full">
          <Card.Title className="mb-0 flex justify-center">The Learning Institute</Card.Title>
          <Card.Body>
            <div className="prose mb-4 max-w-none">
              <div className="text-center">
                <div className="text-lg">
                  Director of Software Development &amp; Lead Software Engineer
                </div>
                <div className="text-xs">July 2012 - July 2016</div>
              </div>
              <div>
                <ul>
                  <li>
                    Designed and implemented online testing web application using ASP.NET Web APIs
                    and an HTML/JavaScript front-end, involving Knockout.js and MVVM pattern. The
                    application allowed the user to login to their test and navigate from question
                    to question, selecting answers which were recorded on the server and instantly
                    scored when the user finished the test. Involved heavy use of Knockout.js and
                    the template binding, as well as cross-browser display of MathML content that
                    was embedded in the questions&apos; XHTML. Upon last check, it was found to have
                    collected results for over 5 million tests from over 140 districts.
                  </li>
                  <li>
                    Updated legacy web applications to allow servicing of school districts in
                    multiple states.
                  </li>
                  <li>
                    Updated data transfer system which connected to a new version of IBM Cognos
                    Business Intelligence Servers and installed, updated, ran reports, and finally
                    downloaded the report results and delivered them to the destination folder.
                  </li>
                  <li>
                    Designed and implemented a new version of content management and editor web
                    application using ASP.NET Web API and an HTML/JavaScript front-end involving
                    Knockout.js and the MVVM pattern. Implementation involved the EditLive! rich
                    content editor Java applet, from Ephox. This application allowed users to
                    create, edit and manage questions to be placed on assessments; including
                    association of educational standards.
                  </li>
                  <li>
                    Established source control branching and merging policies and source code
                    patterns and conventions for new MVVM SPA web application stack, including MS
                    SQL Server, Entity Framework 6, ASP.NET Web API 2, JavaScript, jQuery,
                    Knockout.js, breeze.js, Bootstrap, and HTML. New application stack also included
                    server-side and client-side components for data-driven bundling, minification,
                    and dynamic loading of application resources, including JavaScript modules, HTML
                    templates, and CSS stylesheets. The resources were grouped into “resource maps”,
                    which could be referenced by JavaScript modules in a way that insured required
                    resources were loaded before the module&apos;s code was executed, somewhat like
                    require.js, but more comprehensive and designed to work more seamlessly with the
                    Microsoft Web Optimization Framework (System.Web.Optimization).
                  </li>
                  <li>
                    Used new stack to architect a SPA (Single Page Application) portal framework
                    that facilitated navigation to and presentation of new versions of legacy
                    applications built with new stack. The portal included a data-driven home page
                    that displayed an icon for launching all of the applications to which the user
                    had access.
                  </li>
                  <li>
                    Used new stack and framework to build flexible and scalable data-bound front-end
                    presentation components.{' '}
                  </li>
                  <li>
                    One such component was a client-side datagrid that allowed user to dynamically
                    sort by column(s) and directions of their choosing, and filter by columns as
                    well. The grid used breeze.js to assemble OData queries on the client side,
                    submit them to ASP.NET Web API controllers, and finally receive the results and
                    display them via the Knockout.js templating system. It also allowed custom
                    display and formatting of column data, using JS callbacks and option object
                    conventions. The grid was expandable, allowing custom column templates to be
                    specified via the grid&apos;s options. The grid was very flexible and could
                    handle a variety of development scenarios.
                  </li>
                  <li>
                    Designed and implemented a unified data-bound list component with two display
                    modes: a dropdown list and a static listbox. This component displayed a list of
                    items and allowed selection of either a single item or multiple items, depending
                    on the options specified by the developer. Options for this component also
                    included the ability to specify the fields to be used for binding display text
                    and selected value(s).
                  </li>
                  <li>
                    Implemented new multi-layered authentication and authorization system based on
                    ASP.NET Identity Framework, which checked for authorization at the district,
                    school, and user levels.
                  </li>
                  <li>
                    Designed and implemented applications that facilitated management of district,
                    school, and user access to application features and historical data. The
                    application was used by internal staff, as well as manager users from client
                    districts, to authorize access to services and resources.
                  </li>
                  <li>
                    Established new schema for storing multiple frameworks of educational standards,
                    spanning multiple subjects. The new schema allowed questions from our question
                    bank to be associated with multiple educational standards from different
                    standard frameworks.
                  </li>
                  <li>
                    Designed and implemented application for entry and management of educational
                    standard frameworks and their standards and groupings.
                  </li>
                  <li>
                    Designed and implemented application for entry and management of course
                    alignment data, including associations to educational standards, definition of
                    curriculum schedule by marking periods, and management of rule-based course
                    settings and limitations.
                  </li>
                  <li>
                    Designed and implemented third version of content management and editor web
                    application on new stack. Implementation included integration with ckEditor, a
                    JavaScript based, client-side open source rich content editor component, to
                    replace EditLive! Java applet.
                  </li>
                  <li>
                    Designed and implemented a unified, rule-based assessment compilation and
                    rendering framework, which facilitated the delivery of assessments via multiple
                    formats, including PDF for print format, and via new version of in-house online
                    testing platform (updated for use with the new platform and stack).
                    Implementation of PDF formatting service included invoking of the now separated
                    Razor templating and data-binding engine from ASP.NET MVC to produce an HTML
                    document that, along with a CSS3 stylesheet, was converted to a PDF file.
                  </li>
                  <li>
                    Rebuilt online testing platform on new stack, and integrated it into content
                    management and editor application, to allow content editor users to preview
                    assessment questions in online format and approve them for online test taking.
                  </li>
                </ul>
              </div>
            </div>
          </Card.Body>
        </Card>

        <Card className="w-full">
          <Card.Title className="mb-0 flex justify-center">Cities In Touch</Card.Title>
          <Card.Body>
            <div className="prose mb-4 max-w-none">
              <div className="text-center">
                <div className="text-lg">CTO & Chief Software Engineer</div>
                <div className="text-xs">July 2000 - August 2011</div>
              </div>
              <div>
                <ul>
                  <li>
                    Designed user interface for interactive touch screen advertising and digital
                    signage
                  </li>
                  <li>Designed and developed website for marketing purposes</li>
                  <li>Administered wide area network of self-service, touch screen kiosks.</li>
                  <li>
                    Researched and developed system software for self-service, touch screen
                    terminals that provided financial services such as bill payment, check cashing,
                    and issuing pre-paid debit cards.
                  </li>
                  <li>
                    Implemented secure, time-sensitive terminal authentication system, in which a
                    private key was used to generate an authentication token on both the client and
                    server side. The token periodically changed to thwart brute force attacks.
                  </li>
                  <li>
                    Interfaced with secure financial networks and reporting software. Integration
                    involved industry standard security components, protocols, and policies
                    including but not limited to SSL and PCI-DSS.
                  </li>
                  <li>
                    Architected server-side hosting environment in compliance with PCI-DSS in
                    conjunction with Mainstream Technologies of Little Rock, AR.
                  </li>
                  <li>
                    Integrated POS (Point of Sale) and vending hardware using industry-standard
                    communications protocols.
                  </li>
                  <li>
                    Developed data driven website for remote management of a distributed network of
                    self-service, touch screen kiosks and their peripherals.
                  </li>
                  <li>
                    Developed graphical user interfaces (GUI) for touch screen kiosks, using Visual
                    Basic.NET and WinForms.
                  </li>
                  <li>And much, much more...</li>
                </ul>
              </div>
            </div>
          </Card.Body>
        </Card>
      </section>
    </>
  )
}
