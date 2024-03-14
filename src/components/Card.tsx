interface CardProps {
  description: string;
  enterprise: string;
  logo: string;
  date: string;
}

export function Card({ description, enterprise, logo, date }: CardProps) {
  return (
      <div className="relative flex flex-col gap-8 bg-neutral-900 border border-white/10 w-full max-w-lg rounded-xl p-10">
        <div className="absolute right-5 top-0 h-px w-80 bg-gradient-to-l from-transparent via-white/30 via-10% to-transparent" />
        <p className="text-base text-center leading-[1.5] text-neutral-300">
          {description}
        </p>
        <div className="flex items-center justify-center gap-3">
          <img
            src={logo}
            alt="Gustavo's profile image"
            width={50}
            height={50}
            className="rounded-full object-cover"
          />
          <div className="flex flex-col">
            <a
              href="https://www.fortics.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base font-medium text-neutral-300 leading-none duration-300"
            >
              {enterprise}
            </a>
            <span className="text-neutral-400">{date}</span>
          </div>
        </div>
      </div>
  );
}
