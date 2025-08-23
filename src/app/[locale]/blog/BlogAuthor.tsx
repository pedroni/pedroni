import { calculateYears } from '../../../helpers'
import BlogAuthorPicture from './BlogAuthorPicture'

export default function BlogAuthor() {
  return (
    <div className="relative z-10 flex  gap-6 items-center flex-row">
      <BlogAuthorPicture className="hidden lg:block"></BlogAuthorPicture>
      <div className="text-left">
        <BlogAuthorPicture className="block float-left mr-4 mt-4 mb-4 lg:hidden"></BlogAuthorPicture>
        <div className="text-lg font-mono text-white font-bold">
          Lucas Pedroni
        </div>
        <div className="font-serif tracking-wide font-light">
          Front-end development specialist (with a foot in back-end). I develop software with attention to detail. Over{' '}
          {calculateYears('2017-03-01')} years of experience. Currently Team
          Lead at{' '}
          <a
            href="https://voxie.com"
            className="text-white font-bold"
            target="_blank"
            rel="noreferrer"
          >
            Voxie Inc.
          </a>{' '}
          an SMS automation platform.
        </div>
      </div>
    </div>
  )
}
