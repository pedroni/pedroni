'use server'
import React from 'react'
import HomeBannerAboutButton from './HomeBannerAboutButton'
import { getLocale, getTranslations } from 'next-intl/server'
import { getSortedPosts } from '../lib/blog'
import { Link } from '../i18n/navigation'
import Title from './Title'
import Button from './Button'
import BlogPostHoverItem from './BlogPostHoverItem'

const HomeBanner = async () => {
  const locale = await getLocale()

  const t = await getTranslations()
  const posts = (await getSortedPosts()).slice(0, 3)

  return (
    <section className="relative w-full min-h-screen lg:min-h-auto">
      <div className="w-full h-screen absolute left-0 top bg-gradient-to-t from-black to-transparent"></div>
      <div className="absolute left-0 top-full w-full h-[500px] bg-gradient-to-b from-black to-transparent"></div>

      <div className="relative max-w-7xl mx-auto flex flex-col justify-center items-center pt-8 px-4 lg:flex-row">
        <div className="hidden lg:block">
          <img
            className="opacity-50  w-[632px] h-[750px] mr-0 ml-auto block object-contain"
            src="/img/banner/me.png"
            srcSet="/img/banner/me.png 1x, /img/banner/me@2x.png 2x"
            alt="Lucas Pedroni, foto de perfil"
          />
        </div>

        <div className="flex flex-col items-center pb-20">
          <img
            className="w-[495px] h-[133px] object-contain"
            src="/img/banner/name.png"
            srcSet="/img/banner/name.png 1x, /img/banner/name@2x.png 2x"
            alt="Lucas Pedroni, nome"
          />
          <h1 className="sr-only">Lucas Pedroni</h1>

          <div className="mt-4 text-primary font-extralight tracking-wider font-mono">
            {t('HomeBanner.title')}
          </div>

          <HomeBannerAboutButton className="mt-8">
            {t('HomeBanner.actionButton')}
          </HomeBannerAboutButton>

          {posts.length > 0 && (
            <div className="backdrop-blur-lg bg-white/5  border-[2] border-black/50  outline-1 outline-white/10 relative mt-20 text-left p-6 xl:p-8">
              <Title
                size="sm"
                subTitle={'Blog'}
                title={t('HomeBanner.recentPosts')}
              ></Title>

              <ul className="flex flex-col gap-2">
                {posts.map(post => (
                  <BlogPostHoverItem
                    key={post.slug}
                    post={post}
                    locale={locale}
                    minutesText={t('Words.minutes')}
                  />
                ))}
              </ul>

              {posts.length >= 3 && (
                <Link className='mt-4 inline-block' href="/blog">
                  <Button>{t('HomeBanner.viewAll')}</Button>
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default HomeBanner
