import { Github, Instagram, Linkedin, Twitter } from 'lucide-react'

export function Introduction() {
    return (
        <section className="">
            <div>
                <img
                    src="https://github.com/flavioaugusto1.png"
                    className="h-20 w-20 rounded-full"
                    alt="Foto mostrando mais o perfil do rosto de um homem que está utilzando camisa preta, uma barba media e fazendo uma cara um pouco mais seria "
                />
            </div>

            <h1 className="mt-8 text-2xl font-semibold text-zinc-800">
                Flávio Augusto Silva
            </h1>
            <h2 className="text-lg text-zinc-400">Backend Developer</h2>

            <div className="my-10">
                <p className="my-4 leading-loose text-zinc-500">
                    Atualmente resido em Santa Catarina, trabalho na{' '}
                    <a
                        href="https://www.fortics.com.br/"
                        target="_blank"
                        className="font-medium text-zinc-800 underline decoration-blue-800 decoration-2 underline-offset-1 hover:text-blue-800 hover:decoration-blue-800/30 transition-colors"
                    >
                        Fortics
                    </a>{' '}
                    como Técnico de Garantia de Qualidade e estou fazendo
                    formações da{' '}
                    <a
                        href="https://www.rocketseat.com.br/"
                        target="_blank"
                        className="font-medium text-zinc-800 underline decoration-purple-600 decoration-2 underline-offset-1 hover:text-purple-600 hover:decoration-purple-600/30 transition-colors"
                    >
                        RocketSeat
                    </a>{' '}
                    e também da{' '}
                    <a
                        href="https://cursos.alura.com.br/"
                        target="_blank"
                        className="font-medium text-zinc-800 underline decoration-blue-800 decoration-2 underline-offset-1 hover:text-blue-800 hover:decoration-blue-800/30 transition-colors"
                    >
                        Alura
                    </a>
                    . Antes disso sou graduado em Análise e desenvolvimento de
                    Sistemas na{' '}
                    <a
                        href=""
                        target="_blank"
                        className="transform-framer font-medium text-zinc-800 underline decoration-cyan-500 decoration-2 underline-offset-1 hover:text-cyan-500 hover:decoration-cyan-500/30 transition-colors"
                    >
                        Estácio.
                    </a>
                </p>
            </div>

            <div className="mt-8 text-center flex flex-wrap gap-4">
                <a
                    href="https://twitter.com/flavinsdn"
                    target="_blank"
                    className="flex flex-none items-center justify-center gap-2 py-2 px-2.5 font-medium text-white shadow-lg rounded-md bg-cyan-500 hover:bg-cyan-600 transition-colors"
                >
                    <Twitter />
                    Twitter
                </a>

                <a
                    href="https://www.linkedin.com/in/flavio-augusto1/"
                    target="_blank"
                    className="flex flex-none items-center justify-center gap-2 py-2 px-2.5 font-medium text-white shadow-lg rounded-md bg-blue-600 hover:bg-blue-700 transition-colors"
                >
                    <Linkedin />
                    Linkedin
                </a>

                <a
                    href="https://github.com/flavioaugusto1"
                    target="_blank"
                    className="flex flex-none items-center justify-center gap-2 py-2 px-2.5 font-medium text-white shadow-lg rounded-md bg-slate-950 hover:bg-slate-600 transition-colors"
                >
                    <Github />
                    Github
                </a>

                <a
                    href="https://www.instagram.com/flavio.sdn/"
                    target="_blank"
                    className="flex flex-none items-center justify-center gap-2 py-2 px-2.5 font-medium text-white shadow-lg rounded-md bg-fuchsia-600 hover:bg-fuchsia-700 transition-colors"
                >
                    <Instagram />
                    Instagram
                </a>
            </div>
        </section>
    )
}
