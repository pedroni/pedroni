import BlogAuthorPicture from './BlogAuthorPicture'

export default function BlogAuthor() {
  return (
    <div className="flex gap-6 items-center">
      <BlogAuthorPicture></BlogAuthorPicture>
      <div className="text-left">
        <div className="text-lg font-mono text-white">Lucas Pedroni</div>
        <div>
          Especialista em desenvolvimento front-end (com um pézinho no
          back-end). Desenvolvo software com atenção ao detalhe. Atualmente Team
          Lead na{' '}
          <a
            href="https://voxie.com"
            className="text-white font-bold"
            target="_blank"
            rel="noreferrer"
          >
            Voxie Inc.
          </a>{' '}
          Onde eu oriento, planejo, reviso e desenvolvo uma plataforma de
          automação de SMS Marketing.
        </div>
      </div>
    </div>
  )
}
