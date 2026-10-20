export const links = {
  github: "https://github.com/hiram9112",
  repository: "https://github.com/hiram9112/benehom",
  production: "https://benehom.es/",
  linkedin: "https://www.linkedin.com/in/hiramgonzalez9112",
};

export const layers = [
  {
    id: "surface",
    name: "Surface",
    title: "What you see is only the surface.",
    description:
      "I’m Hiram, a software developer. I build the interface—and the systems beneath it. Let’s look a little deeper.",
    short: "An interface people can use.",
    technologies: "HTML · CSS · JavaScript",
    evidenceTitle: "A usable product, not just a screen.",
    evidence:
      "BeneHom is a financial web application, developed end to end and running in production. Its frontend brings financial information into an interface built with HTML, CSS and JavaScript.",
    detailTitle: "From the browser to the application",
    detail:
      "Server-rendered views connect the visible interface to the PHP application. The frontend is one part of the product, rather than a standalone demonstration.",
    source: "/tree/main/app/views",
    sourceLabel: "Explore the views",
  },
  {
    id: "application",
    name: "Application",
    title: "Behind a simple action, real logic.",
    description:
      "Financial calculations, authentication and authorization turn an interface into a working application. PHP connects the pieces.",
    short: "The rules behind each action.",
    technologies: "PHP · Controllers · Services · Sessions",
    evidenceTitle: "Business rules have somewhere to live.",
    evidence:
      "Controllers, PDO models, services and server-rendered views support real financial logic. Authentication, authorization and sessions govern access to the application.",
    detailTitle: "Separating an action from its rules",
    detail:
      "The backend includes both controllers and services: handling an incoming action and performing financial calculations are distinct responsibilities in the implementation.",
    source: "/tree/main/app/services",
    sourceLabel: "Inspect the services",
  },
  {
    id: "data",
    name: "Data",
    title: "Personal finances. Personal boundaries.",
    description:
      "Relational data gives the product memory. Per-user isolation keeps that memory connected to the person it belongs to.",
    short: "Persistent data, scoped to its user.",
    technologies: "MySQL · SQL · PDO",
    evidenceTitle: "Persistence with a user boundary.",
    evidence:
      "MySQL stores the application’s relational data. PDO models connect the PHP backend to that data, with per-user isolation as part of the application’s access model.",
    detailTitle: "Why the data layer matters",
    detail:
      "Financial information must survive a browser session without becoming shared information. Relational persistence and user-scoped access address different parts of that requirement.",
    source: "/blob/main/database/schema.sql",
    sourceLabel: "Read the database schema",
  },
  {
    id: "integrations",
    name: "Integrations",
    title: "Connected, with boundaries.",
    description:
      "Numa brings AI to real application data. A read-only MCP server opens another path in. n8n connects operational workflows.",
    short: "AI and automation meet real data.",
    technologies: "Function Calling · RAG · Embeddings · MCP · n8n",
    evidenceTitle: "Useful connections. Explicit access.",
    evidence:
      "Numa combines generative AI, Function Calling, RAG and embeddings. The remote MCP server uses Streamable HTTP, PAT authentication and user-scoped, read-only access. n8n supports operational automation through authenticated webhooks.",
    detailTitle: "Three connections, different responsibilities",
    detail:
      "Numa integrates AI with application data. MCP gives compatible clients a read-only, authenticated interface. n8n handles operational automation. These are implemented subsystems around the same product, not separate portfolio projects.",
    source: "/tree/main/app/Mcp",
    sourceLabel: "Inspect the MCP server",
  },
  {
    id: "reliability",
    name: "Reliability",
    title: "Working once isn’t the finish line.",
    description:
      "Automated validation checks the work at different levels—from PHP logic and static analysis to browser behavior.",
    short: "Checks beyond the happy path.",
    technologies: "PHPUnit · PHPStan · Playwright · GitHub Actions",
    evidenceTitle: "Different checks for different failures.",
    evidence:
      "PHPUnit, PHPStan and Playwright provide automated validation at different levels. GitHub Actions supports the project’s automated integration and delivery workflow.",
    detailTitle: "Why more than one kind of check?",
    detail:
      "Logic tests, static analysis and browser tests answer different questions. Together, they make more of the implementation inspectable than a working screenshot could.",
    source: "/tree/main/tests",
    sourceLabel: "Explore the tests",
  },
  {
    id: "production",
    name: "Production",
    title: "Built is one thing. Running is another.",
    description:
      "The work continues on a Linux VPS: release-based deployments, smoke checks and rollback connect the code to a running product.",
    short: "From repository to running software.",
    technologies: "Linux · VPS · CI/CD · Releases · Rollback",
    evidenceTitle: "A deployment is part of the product.",
    evidence:
      "BeneHom runs in a Linux/VPS environment. Automated CI/CD, release-based deployments, smoke checks and rollback support the path from a code change to production.",
    detailTitle: "A way forward—and a way back",
    detail:
      "Release-based deployment makes the deployed version explicit. Smoke checks validate a release after deployment, and rollback provides a route back when a release does not behave as expected.",
    source: "/tree/main/resources/deployments",
    sourceLabel: "Read the deployment records",
  },
] as const;
