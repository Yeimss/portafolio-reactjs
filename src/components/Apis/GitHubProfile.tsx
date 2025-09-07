import { useEffect, useState } from "react"

interface GitHubUser {
  login: string
  avatar_url: string
  html_url: string
  name: string
  bio: string
  followers: number
  following: number
}

const GitHubProfile = () => {
  const [user, setUser] = useState<GitHubUser | null>(null)

  useEffect(() => {
    fetch("https://api.github.com/users/Yeimss")
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((err) => console.error(err))
  }, [])

  if (!user) return <p>Cargando perfil...</p>

  return (
    <section className="flex flex-col items-center text-center p-6 bg-[#FFF8F0] rounded-xl shadow-md">
      <img
        src={user.avatar_url}
        alt={user.name}
        className="w-32 h-32 rounded-full border-4 border-[#F2CA94] shadow-md mb-4"
      />
      <h2 className="text-2xl font-bold text-[#FCB653]">{user.name}</h2>
      <p className="text-gray-600 mb-2">@{user.login}</p>
      <p className="text-sm text-gray-500 italic mb-4">{user.bio || "Sin bio 😅"}</p>
      <div className="flex gap-4 text-sm text-[#F5BD6E] font-medium">
        <span>👥 {user.followers} seguidores</span>
        <span>➡️ {user.following} siguiendo</span>
      </div>
      <a
        href={user.html_url}
        target="_blank"
        rel="noreferrer"
        className="mt-4 inline-block bg-[#FCB653] text-white px-4 py-2 rounded-lg hover:bg-[#F2CA94] transition-colors"
      >
        Ver en GitHub
      </a>
    </section>
  )
}

export default GitHubProfile
