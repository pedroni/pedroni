import BlogAuthorPicture from './BlogAuthorPicture'

export default function BlogAuthor() {
  return (
    <div className="flex  gap-6 items-center flex-row">
      <BlogAuthorPicture className="hidden lg:block"></BlogAuthorPicture>
      <div className="text-left">
        <BlogAuthorPicture className="block float-left mr-4 mt-4 mb-4 lg:hidden"></BlogAuthorPicture>
        <div className="text-lg font-mono text-white font-bold">
          Lucas Pedroni
        </div>
        <div className="font-serif tracking-wide font-light">
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
