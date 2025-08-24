import { calculateYears } from '../../../helpers'
import BlogAuthorPicture from './BlogAuthorPicture'
import { useTranslations } from 'next-intl'

export default function BlogAuthor() {
  const t = useTranslations('BlogAuthor')
  return (
    <div className="relative z-10 flex  gap-6 lg:gap-14 items-center flex-row">
      <BlogAuthorPicture className="hidden lg:block"></BlogAuthorPicture>
      <div className="text-left">
        <BlogAuthorPicture className="block float-left mr-4 mt-4 mb-4 lg:hidden"></BlogAuthorPicture>
        <div className="text-lg font-mono text-primary font-extralight">
          Lucas Pedroni
        </div>
        <div className="font-sans tracking-wide font-light">
          {t.rich('description', {
            years: calculateYears('2017-03-01'),
            company: chunks => (
              <a
                href="https://voxie.com"
                className="text-white font-bold"
                target="_blank"
                rel="noreferrer"
              >
                {chunks}
              </a>
            )
          })}
        </div>
      </div>
    </div>
  )
}
