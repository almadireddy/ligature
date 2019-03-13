import Layout from '../components/layout'

const pastProjects = [
  {
    name: "Creative Disturbance",
    link: "https://dev.creativedisturbance.org",
    description: "An interanational, multilingual, podcasting platform."
  },
  {
    name: "ArtSciLab",
    link: "https://artscilab.atec.io",
    description: "A research lab at the University of Texas at Dallas"
  },
  {
    name: "Comet Marketing",
    link: "https://utdcometmarketing.com",
    description: "An on-campus marketing organization at UT Dallas"
  }
]

const Projects = () => (
  <Layout title='Projects'>
    <div className="hero">
      <h1 className="title">Projects</h1>
    </div>
    {pastProjects.map((project) => (
      <div className='row project'>
        <div className='col'>
          <h2>{project.name}</h2>
          <p>{project.description}</p>
          <a href={project.link} className='action-button'>Access</a>
        </div>
      </div>
    ))}
  </Layout>
)

export default Projects;