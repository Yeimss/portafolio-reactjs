import { useEffect, useState } from "react"

interface Repo {
  id: number
  name: string
  html_url: string
  description: string
  language: string
}

const GitHubProjects = () => {
    const [repos, setRepos] = useState<Repo[]>([]);

    useEffect(() => {
        fetch('https://api.github.com/users/Yeimss/repos')
        .then((res) => res.json())
        .then((res) => setRepos(res))
        .catch((err) => console.log(err))
    }, [])

     return (
    <section className="p-6 bg-[#FFF8F0] rounded-xl shadow-md">
      <h2 className="text-2xl font-bold text-[#FCB653] mb-4">Mis proyectos en GitHub 🚀</h2>
      <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {repos.map((repo) => (
          <li
            key={repo.id}
            className="border-2 border-[#F2CA94]  rounded-lg p-4 hover:shadow-lg transition-shadow bg-white"
          >
            <h3 className="text-lg font-semibold text-[#FCB653]">
              <a href={repo.html_url} target="_blank" rel="noreferrer">
                {repo.name}
              </a>
            </h3>
            <p className="text-sm text-gray-600">{repo.description || "Sin descripción"}</p>
            <span className="text-xs text-[#FCB653] font-mono">
              {repo.language || "Lenguaje no detectado"}
            </span>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default GitHubProjects